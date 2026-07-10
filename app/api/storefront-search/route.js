import { searchStorefronts } from '../../../lib/storefrontSearchApi';

export async function POST(request) {
  try {
    const filters = await request.json();
    const result = await searchStorefronts(filters);

    return Response.json(result, {
      status: result.ok ? 200 : result.status || 502,
    });
  } catch (error) {
    return Response.json(
      {
        ok: false,
        listings: [],
        message: error instanceof Error ? error.message : 'Unable to search storefronts.',
      },
      { status: 500 }
    );
  }
}
