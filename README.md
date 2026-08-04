# Javier Sanchez Daza — Portfolio

Personal portfolio built as a content-driven React 19 single-page application. It presents experience, projects, skills, and contact information in English and Spanish.

## Stack

- React, TypeScript, and Vite
- Tailwind CSS
- Vitest and Testing Library
- Playwright for browser flows
- Vercel for deployment

## Local development

Use Node 20 and pnpm 10.11.1.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

The development server is available at `http://localhost:5173`.

## Quality checks

```bash
pnpm check
pnpm test:e2e
```

`pnpm check` verifies formatting, unit tests, linting, TypeScript, and the production build. Playwright starts the Vite server automatically and exercises the portfolio in Chromium.

## Project structure

- `src/components/` contains the page sections and shared UI.
- `src/contexts/` contains shared React state.
- `src/content.json` is the source of truth for portfolio content and translations.
- `src/**/*.test.tsx` contains unit and component tests.
- `tests/e2e/` contains browser-level acceptance tests.
- `public/` contains deployable static assets and metadata.

Update content in `src/content.json` instead of embedding profile data in components. See `AGENTS.md` for contributor and agent conventions.
