# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with React + TypeScript + Vite, styled with TailwindCSS. It's a single-page application that displays profile information, skills, projects, and experience through a content-driven approach using a JSON configuration file.

## Key Commands

- **Development server**: `pnpm dev` (runs on http://localhost:5173)
- **Build**: `pnpm build` (TypeScript compilation + Vite build)
- **Preview build**: `pnpm preview` (serves build on http://localhost:4173)
- **Lint**: `pnpm lint` (ESLint with flat config)
- **E2E tests**: `pnpm test:e2e` (Playwright tests)
- **Single E2E test**: `pnpm test:e2e tests/e2e/<filename>.spec.ts`
- **Headed/trace E2E**: `pnpm test:e2e --headed --trace on`

## Architecture

### Content-Driven Approach
- All content is centralized in `src/content.json` - profile info, skills, projects, experience, and contact details
- Components import and render data from this JSON file
- This pattern allows for easy content updates without touching component code

### Component Structure
- `src/App.tsx`: Main app layout with mobile menu functionality
- `src/components/`: All UI components (Header, Hero, Skills, Projects, Experience, Contact, Footer)
- Each major section is a separate component that imports relevant data from `content.json`

### Mobile Menu Implementation
- Uses vanilla DOM manipulation for mobile menu toggle
- Global mousedown event listener for outside-click closing
- Backdrop element with test-id for E2E testing

### Styling
- TailwindCSS utility classes with custom CSS variables for theming
- Responsive design with mobile-first approach
- Dark theme implementation via CSS custom properties

## Development Conventions

- **Package Manager**: Use `pnpm` exclusively (see packageManager in package.json)
- **TypeScript**: Strict configuration with separate configs for app and node
- **Components**: Function components with named exports (no default exports)
- **Imports**: Group external then internal, prefer relative paths
- **Styling**: TailwindCSS utilities, avoid inline styles unless dynamic
- **Testing**: E2E tests with Playwright in `tests/e2e/`

## Key Files
- `src/content.json`: All website content and configuration
- `src/App.tsx`: Main layout with mobile menu logic
- `src/components/Header.tsx`: Navigation with mobile menu button
- `eslint.config.js`: ESLint v9 flat configuration
- `playwright.config.ts`: E2E test configuration targeting localhost:5173

## Before Committing
Always run `pnpm lint` before making commits. The project uses ESLint v9 with flat config including React hooks rules and TypeScript support.