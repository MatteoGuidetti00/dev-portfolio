# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev      # Start development server at http://localhost:3000
yarn build    # Production build
yarn lint     # Run ESLint with next/core-web-vitals rules
```

## Architecture

This is a Next.js 13 portfolio site using the Pages Router with TypeScript.

**Key files:**
- `pages/index.tsx` - Single-page homepage with navigation, avatar, and social links
- `pages/_document.tsx` - Custom document that renders animated firefly div elements
- `pages/_app.tsx` - App wrapper importing global styles

**Styling:**
- Uses SCSS/Sass with CSS Modules (`styles/Home.module.scss`)
- Global styles in `styles/globals.scss` and `styles/fireflies.sass`
- Theme variables in `styles/_variables.scss` (dark theme default, color scheme responsive)
- Sass include path configured in `next.config.js`

**Font:** Poppins loaded via `next/font/google`

**Images:** External images allowed from `i.ibb.co` (configured in `next.config.js`)

**Path alias:** `@/*` maps to project root
