export async function requestStorefrontSearch(filters) {
  const response = await fetch('/api/storefront-search', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(filters),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Search request failed.');
  }

  return {
    ...data,
    listings: Array.isArray(data.listings) ? data.listings : [],
  };
}
