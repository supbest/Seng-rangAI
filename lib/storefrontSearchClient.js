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
          Return only a valid JSON object with a top-level "listings" array.
          Each listing must be selected from the provided JSON data.
          Do not invent listings, fields, images, links, or scores.
          Do not include markdown, code fences, explanations, commentary,
          or any text outside the JSON object.
          If no listings match, return exactly: {"listings":[]}
        `,
      },
      {
        role: 'user',
        content: JSON.stringify({
          task: 'Find matching storefront listings.',
          query: query || '',
          filters,
          availableListings: featuredListings,
          responseExample: {
            listings: [
              {
                id: 'exampleListing',
                title: 'Example Storefront - Bangkok',
                location: 'Bangkok',
                price: '฿0',
                badge: 'AI Match',
                aiScore: '90%',
                tags: ['High Traffic', 'Ready to Open'],
                image: '/mockups/coffee/cafe_eco_min.png',
                href: '/listings/exampleListing',
              },
            ],
          },
        }),
      },
    ],
    temperature: storefrontSearchApiConfig.temperature,
    max_tokens: storefrontSearchApiConfig.maxTokens,
  };
}

function toArray(value) {
  if (Array.isArray(value)) return value;
  if (Array.isArray(value?.featuredListings)) return value.featuredListings;
  if (Array.isArray(value?.listings)) return value.listings;
  if (Array.isArray(value?.results)) return value.results;
  if (Array.isArray(value?.data)) return value.data;
  if (Array.isArray(value?.data?.listings)) return value.data.listings;
  if (Array.isArray(value?.data?.results)) return value.data.results;
  return [];
}

function normalizeTags(tags) {
  if (Array.isArray(tags)) return tags.filter(Boolean).map(String);
  if (typeof tags === 'string') {
    return tags
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean);
  }
  return [];
}

function normalizeListing(item, index) {
  const id = item.id || item.slug || item.listingId || `api-listing-${index + 1}`;

  return {
    id,
    title: item.title || item.name || item.businessName || 'Untitled Storefront',
    location: item.location || item.address || item.area || 'Bangkok',
    price: item.price || item.rent || item.budget || 'Contact for price',
    badge: item.badge || item.status || 'AI Match',
    aiScore: item.aiScore || item.score || item.matchScore || 'N/A',
    tags: normalizeTags(item.tags || item.highlights || item.features),
    image: item.image || item.imageUrl || item.photo || item.thumbnail || '/mockups/coffee/cafe_eco_min.png',
    href: item.href || item.url || `/listings/${id}`,
  };
}

export function normalizeStorefrontSearchResponse(value) {
  return toArray(value).map(normalizeListing);
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
  const listings = normalizeStorefrontSearchResponse(parsedContent);

  console.log(response)

  
  if (!response.ok) {
    throw new Error(data?.error?.message || data?.message || 'Search request failed.');
  }

  return {
    ok: response.ok,
    status: response.status,
    source: storefrontSearchApiConfig.url,
    request,
    listings,
    message:
      typeof parsedContent === 'string'
        ? parsedContent.slice(0, 240)
        : data?.error?.message || data?.message || '',
  };
}
