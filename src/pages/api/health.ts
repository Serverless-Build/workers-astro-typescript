import type { APIRoute } from 'astro';
export const GET: APIRoute = () => Response.json({ status: 'ok', marker: 'SERVERLESS_BUILD_ASTRO_TYPESCRIPT_V1' }, { headers: { 'Cache-Control': 'no-store' } });
