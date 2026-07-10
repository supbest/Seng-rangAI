import listingsData from '../data/listings.json';

const DEFAULT_SEARCH_API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const DEFAULT_MODEL = 'tencent/hy3:free';
const { featuredListings } = listingsData;

export const storefrontSearchApiConfig = {
  url: process.env.NEXT_PUBLIC_STOREFRONT_SEARCH_API_URL || DEFAULT_SEARCH_API_URL,
  apiKey: process.env.NEXT_PUBLIC_OPENROUTER_API_KEY || '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',
  model: process.env.NEXT_PUBLIC_STOREFRONT_SEARCH_MODEL || DEFAULT_MODEL,
  temperature: Number(process.env.NEXT_PUBLIC_STOREFRONT_SEARCH_TEMPERATURE || 0.7),
  maxTokens: Number(process.env.NEXT_PUBLIC_STOREFRONT_SEARCH_MAX_TOKENS || 1024),
};

export function buildStorefrontSearchRequest({ query, location, businessType, budget } = {}) {
  const filters = {
    location: location && location !== 'Location' ? location : '',
    businessType: businessType && businessType !== 'Type' ? businessType : '',
    budget: budget && budget !== 'Budget' ? budget : '',
  };

  return {
    model: storefrontSearchApiConfig.model,
    messages: [
      {
        role: 'system',
        content: `
          You are a storefront search assistant for commercial rentals.
          Return only a valid JSON object with a top-level "indexes" array.
          Each value in "indexes" must be a zero-based index from the provided featuredListings array.
          Select only indexes for storefronts that match the user's query and filters.
          Do not return listing objects, copied listing fields, markdown, code fences, explanations, commentary,
          or any text outside the JSON object.
          If no listings match, return exactly: {"indexes":[]}
        `,
      },
      {
        role: 'user',
        content: JSON.stringify({
          task: 'Find matching storefront listing indexes.',
          query: query || '',
          filters,
          featuredListings: featuredListings.map((listing, index) => ({
            index,
            ...listing,
          })),
          responseExample: {
            indexes: [0, 2],
          },
        }),
      },
    ],
    temperature: storefrontSearchApiConfig.temperature,
    max_tokens: storefrontSearchApiConfig.maxTokens,
  };
}

function normalizeIndex(value) {
  const index = Number(value);
  if (!Number.isInteger(index)) return null;
  if (index < 0 || index >= featuredListings.length) return null;
  return index;
}

function toIndexes(value) {
  const rawIndexes = Array.isArray(value)
    ? value
    : value?.indexes || value?.indices || value?.listingIndexes || value?.results || [];

  if (!Array.isArray(rawIndexes)) return [];

  return [...new Set(rawIndexes.map(normalizeIndex).filter((index) => index !== null))];
}

export function normalizeStorefrontSearchResponse(value) {
  const indexes = toIndexes(value);

  return {
    indexes,
    listings: indexes.map((index) => ({
      ...featuredListings[index],
      index,
    })),
  };
}

function parseJsonFromContent(content) {
  if (!content || typeof content !== 'string') return content;

  const trimmed = content.trim();
  const withoutFence = trimmed
    .replace(/^```json\s*/i, '')
    .replace(/^```\s*/i, '')
    .replace(/\s*```$/i, '');

  try {
    return JSON.parse(withoutFence);
  } catch {
    const match = withoutFence.match(/\{[\s\S]*\}|\[[\s\S]*\]/);
    if (!match) return content;

    try {
      return JSON.parse(match[0]);
    } catch {
      return content;
    }
  }
}

function extractAssistantContent(value) {
  return value?.choices?.[0]?.message?.content || value?.choices?.[0]?.text || '';
}

export async function requestStorefrontSearch(filters) {
  const request = buildStorefrontSearchRequest(filters);
  const response = await fetch(storefrontSearchApiConfig.url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storefrontSearchApiConfig.apiKey}`,
      'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || window.location.origin,
      'X-Title': 'Storefront AI',
    },
    body: JSON.stringify(request),
  });

  const data = await response.json();
  const assistantContent = extractAssistantContent(data);
  const parsedContent = parseJsonFromContent(assistantContent);
  const { indexes, listings } = normalizeStorefrontSearchResponse(parsedContent);

  if (!response.ok) {
    throw new Error(data?.error?.message || data?.message || 'Search request failed.');
  }

  return {
    ok: response.ok,
    status: response.status,
    source: storefrontSearchApiConfig.url,
    request,
    indexes,
    listings,
    message:
      typeof parsedContent === 'string'
        ? parsedContent.slice(0, 240)
        : data?.error?.message || data?.message || '',
  };
}
