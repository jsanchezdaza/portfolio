# CRUSH.md

Repo: React + TypeScript + Vite + Tailwind + ESLint + Playwright.

Build/lint/test
- Dev server: pnpm dev
- Build: pnpm build (tsc -b && vite build)
- Preview build: pnpm preview
- Lint all: pnpm lint (eslint .)
- E2E tests: pnpm test:e2e (Playwright)
- Single E2E test: pnpm test:e2e tests/e2e/home.spec.ts
- Headed/trace: pnpm test:e2e --headed --trace on

Project conventions
- Imports: use ESM; absolute from src only if configured; otherwise relative. Group std/lib, external, internal; keep React first when present.
- Formatting: follow ESLint + Prettier defaults if present; no semicolons preference not enforced here—stay consistent with existing files; 2-space indent, single quotes.
- Types: TypeScript strict-ish; prefer explicit types for public APIs; use React.FC sparingly; prefer function components with named exports.
- Naming: files/components PascalCase for React components, camelCase for functions/vars, SCREAMING_SNAKE_CASE for constants.
- State/props: derive state when possible; keep components pure; lift state up; avoid any; use unknown over any.
- Error handling: fail fast; surface errors via UI or console.error in dev; never swallow promise rejections; use try/catch around async side effects.
- React hooks: follow eslint-plugin-react-hooks rules; list all deps; use useCallback/useMemo for stable references only when needed.
- Styling: TailwindCSS utility-first; keep className strings small; extract reusable bits to components; avoid inline styles unless dynamic.
- Files: colocate component, styles, and tests; keep components under src/components; shared types under src/.

CI/Preview
- CI uses pnpm build then vite preview health-check on port 4173 (see .github/workflows/ci.yml). Vercel config present (vercel.json).

Notes for agents
- Use pnpm as package manager (packageManager field). Avoid adding new libs without approval. Respect eslint.config.js rulesets.
- PR comments: include only a short Summary. Do NOT add Test plan or any boilerplate like “Generated with Crush”.
- Commit messages and PR bodies must NOT include “💘 Generated with Crush” or similar footers.
