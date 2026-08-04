# Repository Guidelines

## Project Structure & Module Organization

This repository contains a single-page React 19 portfolio built with TypeScript and Vite. Application code lives in `src/`: `components/` contains UI sections, `contexts/` holds shared React state, and `test/` provides unit-test setup. Keep profile, project, experience, and translation data in `src/content.json` rather than hard-coding it in components. Static files belong in `public/`; imported assets belong in `src/assets/`. Browser tests live in `tests/e2e/`.

## Build, Test, and Development Commands

Use pnpm 10.11.1 and Node 20, matching `package.json` and CI.

- `pnpm install --frozen-lockfile` installs exact dependencies.
- `pnpm dev` starts Vite at `http://localhost:5173`.
- `pnpm build` type-checks and creates the production bundle.
- `pnpm preview` serves the built site at `http://localhost:4173`.
- `pnpm test run` runs Vitest once; `pnpm test` starts watch mode.
- `pnpm test:e2e` runs Playwright against the development server.
- `pnpm validate` runs unit tests, ESLint, and TypeScript checks.
- `pnpm check` runs formatting, validation, and a production build; use it as the primary quality gate.
- `pnpm format:check` verifies Prettier formatting.

## Coding Style & Naming Conventions

Follow the existing two-space, no-semicolon TypeScript style. Strict TypeScript is enabled; resolve unused values and unsafe typing instead of suppressing checks. Use PascalCase filenames and named exports for React components (`LanguageSelector.tsx`), camelCase for functions and variables, and relative imports grouped after external imports. Prefer Tailwind utility classes and responsive, mobile-first styling; reserve inline styles for dynamic values. Run `pnpm lint` and `pnpm format:check` before submitting changes.

## Testing Guidelines

Use Vitest, Testing Library, and `jest-dom` for component and context behavior. Place unit tests beside their subjects as `*.test.tsx`. Write user-focused assertions using accessible roles and labels. Put full browser flows in `tests/e2e/*.spec.ts`; Playwright currently targets Chromium. Add or update tests for behavior changes, then run `pnpm check` and `pnpm test:e2e`.

## Commit & Pull Request Guidelines

History follows Conventional Commit prefixes such as `feat:` and `fix:` with concise, imperative summaries. Keep commits focused and do not add AI-tool or co-author credits. Pull requests should explain the user-visible change, identify important implementation or test details, link relevant issues, and include before/after screenshots for visual changes. Confirm `pnpm check` and relevant E2E tests pass before requesting review.

## Security & Configuration

Do not commit secrets or personal tokens. Treat `src/content.json` and public assets as publicly deployable data. Keep deployment behavior in `vercel.json` and avoid committing generated `dist/`, test results, or local environment files.
