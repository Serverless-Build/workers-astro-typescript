import type { APIRoute } from 'astro';
export const GET: APIRoute = ({ url }) => {
  const quantity = url.searchParams.getAll('quantity');
  const price = url.searchParams.getAll('unit_price_cents');
  const valid = (values: string[], max: number) => values.length === 1 && /^\d{1,7}$/.test(values[0]) && Number(values[0]) >= 1 && Number(values[0]) <= max;
  if (!valid(quantity, 100) || !valid(price, 1_000_000)) return Response.json({ error: 'Supply one integer quantity (1–100) and unit_price_cents (1–1000000)' }, { status: 400, headers: { 'Cache-Control': 'no-store' } });
  return Response.json({ quantity: Number(quantity[0]), unit_price_cents: Number(price[0]), total_cents: Number(quantity[0]) * Number(price[0]), currency: 'USD' }, { headers: { 'Cache-Control': 'no-store' } });
};
