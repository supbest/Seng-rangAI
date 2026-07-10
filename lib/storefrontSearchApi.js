const DEFAULT_SEARCH_API_URL = 'https://api.opentyphoon.ai/v1/chat/completions';
const DEFAULT_MODEL = 'typhoon-v2.5-30b-a3b-instruct';

export const storefrontSearchApiConfig = {
  url: process.env.STOREFRONT_SEARCH_API_URL || DEFAULT_SEARCH_API_URL,
  model: process.env.STOREFRONT_SEARCH_MODEL || DEFAULT_MODEL,
  temperature: Number(process.env.STOREFRONT_SEARCH_TEMPERATURE || 0.7),
  maxTokens: Number(process.env.STOREFRONT_SEARCH_MAX_TOKENS || 1024),
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
        content:
          `
          You are a storefront search assistant for Bangkok commercial rentals. 
          Return only valid JSON with a top-level "listings" array. 
          Each listing must include id, title, location, price, badge, aiScore, tags, image, and href. 
          Do not include markdown or extra commentary.
          `,
      },
      {
        role: 'user',
        content: JSON.stringify({
          task: 'Find matching storefront listings.',
          query: query || '',
          filters,
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

function parseApiBody(text) {
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
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

export async function searchStorefronts(filters) {
  const payload = buildStorefrontSearchRequest(filters);
  const apiKey =
    process.env.OPENTYPHOON_API_KEY ||
    process.env.TYPHOON_API_KEY ||
    process.env.STOREFRONT_SEARCH_API_KEY;

  if (!apiKey) {
    throw new Error('Missing OPENTYPHOON_API_KEY environment variable.');
  }

  const response = await fetch(storefrontSearchApiConfig.url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(payload),
    cache: 'no-store',
  });

  const text = await response.text();
  const parsedBody = parseApiBody(text);
  const assistantContent = extractAssistantContent(parsedBody);
  const parsedContent = parseJsonFromContent(assistantContent);
  const listings = normalizeStorefrontSearchResponse(parsedContent);

  return {
    ok: response.ok,
    status: response.status,
    source: storefrontSearchApiConfig.url,
    request: payload,
    listings,
    message:
      typeof parsedContent === 'string'
        ? parsedContent.slice(0, 240)
        : parsedBody?.error?.message || parsedBody?.message || '',
  };
}
