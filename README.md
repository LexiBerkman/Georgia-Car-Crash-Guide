## Georgia Car Crash Guide

This repository contains the Georgia Car Crash Guide website, a Next.js app focused on plain-language Georgia car crash and civil claim information.

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The main application code lives under `src/app/`, with shared site content and public assets in `src/resources/` and `public/`.

## Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates a production build.
- `npm run start` runs the production build locally.
- `npm run lint` runs ESLint.

## Deployment

Set `NEXT_PUBLIC_SITE_URL` in the deployment environment so sitemap, robots, and metadata URLs point at the correct live domain.
