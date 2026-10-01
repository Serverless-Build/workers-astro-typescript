# Astro on Workers

Render an Astro starter UI on demand in Workers, with browser interactions and typed API endpoints through the official Cloudflare adapter.

## Run locally

Use Node.js 22.12 or later.

```sh
npm ci
npm run dev
```

## Check and deploy

```sh
npm run check
npm run deploy
```

The configuration is portable: it contains no account ID, resource ID, or maintainer custom domain. Log in with Wrangler and select your own account before deploying. Generated dependencies and build outputs stay out of source control.

## Try the example

GET /api/health checks liveness. GET /api/quote?quantity=3&unit_price_cents=250 returns a 750-cent quote. Try quantity=0, 101, a decimal, duplicate values, or missing inputs to see HTTP 400 validation errors. Both values are bounded integers (quantity 1–100; unit price 1–1000000). Open / for the actual starter UI, increment the counter, and calculate a quote from the browser.

Astro renders on each request via its official Cloudflare adapter. Sessions are disabled because this example does not use them, so no KV namespace is required. The browser interaction uses an Astro-compiled script; this is not a generated screenshot.

## Pattern and live demo

- [Pattern page](https://serverless.build/patterns/astro-workers)
- [Live deployment](https://workers-astro-typescript.dwarven.workers.dev)
