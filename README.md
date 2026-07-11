# Skymouse Website

This repository contains the approved content and the Next.js App Router implementation for the Skymouse corporate website.

Sprint 0 establishes the application foundation only:

- Next.js App Router
- TypeScript
- Tailwind CSS
- static export configuration
- shared metadata defaults
- required route shells
- linting and formatting configuration
- basic CI for lint and build

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The site is configured for static output and builds to `out/`.

## Deployment

1. Install dependencies with `npm install`.
2. Build the static site with `npm run build`.
3. Serve the generated `out/` directory with a static host, object storage, or an Nginx document root.

If you are using Nginx, point the site root at the generated `out/` directory and enable standard compression and cache headers for static assets.

## Launch checklist

- Confirm every required route renders.
- Confirm `npm run lint` succeeds.
- Confirm `npm run build` succeeds.
- Confirm the generated `out/` directory contains the exported site.
- Confirm no approved Markdown content was overwritten.

## Project structure

- `app/` - routes, layout, metadata and static special files
- `components/` - shared UI shells and layout primitives
- `content/` - approved Markdown source copy
- `docs/` - implementation brief and brand guidance
- `lib/` - site configuration and metadata helpers
- `public/` - static icons and social images

## Content source

The Markdown files under `content/` remain the editorial source of truth and are not overwritten by the application scaffold.

## Positioning

Skymouse is an independent Botswana technology company that designs, builds and manages digital systems for governance, institutional performance, public service delivery and enterprise operations.
