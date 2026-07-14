# Project Guardrails

> Paste this file (or its contents) into your AI agent's system prompt or project instructions to enforce consistent patterns across all future website projects.

---

## You Are Building a Production Website

Follow these rules strictly. They are non-negotiable standards derived from our reference architecture (gfy, santaclara, matchpoint, instapost). Every new project must comply.

---

## 1. Directory Structure

```
app/
├── components/
│   ├── layout/        # Header, Footer, Section, Row
│   ├── sections/      # Page-specific section components
│   │   ├── homepage/
│   │   ├── about/
│   │   └── contact/
│   ├── shared/        # Cross-page reusable components (banners, modals)
│   ├── ui/            # Primitive UI elements (Button, FadeIn)
│   ├── globals/       # Global elements (BackToTop, CtaSection)
│   └── blocks/        # Content building blocks (cards, galleries)
├── hooks/             # Custom React hooks
├── lib/               # Business logic, constants, utilities
├── (pages)/           # Route group for main pages
├── (minors)/          # Route group for utility pages (404, coming-soon)
├── api/               # API routes
├── layout.tsx         # Root layout
├── page.tsx           # Homepage
└── not-found.tsx      # Custom 404
```

**Rules:**
- NEVER put components in a root-level `components/` folder. Always `app/components/`.
- Sections go in `app/components/sections/{pageName}/`.
- Layout primitives (Section, Row, Header, Footer) go in `app/components/layout/`.
- UI primitives (Button, FadeIn, ArrowButton) go in `app/components/ui/`.

---

## 2. Layout Primitives — Mandatory Usage

Every section component MUST use the `Section` + `Row` pair:

```tsx
<Section id="about" bgColor="bg-black" className="py-20">
  <Row>
    {/* content */}
  </Row>
</Section>
```

- **Section** handles: full-width background (color, image), `id` for anchor links, vertical padding.
- **Row** handles: content max-width (default 1340px), horizontal centering, `w-11/12` width.

**NEVER** hardcode `max-w-[1340px]` or `mx-auto` in a section. Use `Row`.
**NEVER** hardcode `bg-black px-6 py-20 lg:px-16` on a `<section>`. Use `Section` + `Row`.

Override `Row` max-width only when intentionally narrowing content (e.g., heading containers):
```tsx
<Row maxWidth={960}>...</Row>
```

---

## 3. Centralized Constants — No Inline Data

**NEVER** define data arrays inline in component files. All content data goes in `app/lib/constants.ts`:

```tsx
// GOOD — constants.ts
export const FEATURES = [...] as const;

// GOOD — component
import { FEATURES } from "@/app/lib/constants";

// BAD — inline in component
const features = [...]
```

This includes: navigation items, feature cards, testimonials, stats, step lists, FAQ items, and any repeated content.

---

## 4. Design Token Rules

### Body Text Color
- Muted text on dark backgrounds: **always** `text-white/80`
- NEVER use `text-neutral-200`, `text-neutral-300`, or `text-gray-*` for muted white text

### Background Colors
- Use theme variables from `globals.css` (`bg-black`, `bg-section`, `bg-card`, `bg-panel`)
- NEVER use raw hex values in components (e.g., `bg-[#1a140f]`)
- Alternating sections may use `bg-section` for visual breaks — this is intentional

### Heading Line-Height
- Headings: **always** `leading-tight` (Tailwind 1.25)
- NEVER use fixed pixel line-heights like `leading-[52px]` — they don't scale with responsive font sizes

### Border Radius — Two Tiers
- Cards and panels: `rounded-2xl` (16px)
- Large containers and modals: `rounded-3xl` (24px)
- Buttons: `rounded-xl` (12px) or `rounded-full` (pill)
- NEVER use arbitrary values like `rounded-[32px]`

### Image Overlays — Two Levels
- Light overlay (hero, banners): `bg-black/30`
- Heavy overlay (content over image): `bg-black/80`
- NEVER use arbitrary opacities like `/85` or `/90`

### Theme Colors
- Always use Tailwind theme colors defined in `globals.css`
- NEVER hardcode hex values like `text-[#d4960a]`
- Use `text-primary-500`, `bg-primary-600`, `text-amber-accent`, etc.

---

## 5. Icon Assignment Rules

- Each feature/card MUST have a **unique, semantically correct** icon
- NEVER reuse the same icon across different features
- NEVER assign icons arbitrarily (e.g., calendar icon for a profile feature)
- Review available icons in `/public/icons/` before assigning
- Document icon-to-feature mapping in `constants.ts`

---

## 6. Naming Conventions

- Section components: `{Name}Section.tsx` (e.g., `HeroSection.tsx`, `FeaturesSection.tsx`)
- Layout components: `{Name}.tsx` (e.g., `Header.tsx`, `Footer.tsx`, `Section.tsx`)
- UI components: `{Name}.tsx` (e.g., `Button.tsx`, `FadeIn.tsx`)
- All components: **PascalCase** filenames
- Export style: `export default function ComponentName()`

---

## 7. Component Composition

- **Header** and **Footer** are imported and rendered in `page.tsx`, not in `layout.tsx`
- Each page composes its own Header + sections + Footer
- The root `layout.tsx` only provides: fonts, global CSS, `<html>` and `<body>` tags

---

## 8. Page Structure

- Every project MUST have a custom `not-found.tsx` (404 page)
- Use route groups: `(pages)/` for main pages, `(minors)/` for utility pages
- The `not-found.tsx` must include Header, Footer, and use Section + Row primitives

---

## 9. Accessibility

- Decorative images: empty `alt=""` (acceptable)
- Content images: descriptive `alt` text (required)
- Background images in `<Image>`: empty `alt=""` is acceptable
- Be consistent — if the same image appears in multiple places, apply the same alt-text policy

---

## 10. Client vs Server Components

- Only add `"use client"` when the component uses hooks, state, or event handlers
- Layout primitives (`Section`, `Row`) are server components unless they need interactivity
- `FadeIn` and scroll-animation hooks require `"use client"`
- Header with mobile menu will need `"use client"`

---

## 11. Design Tokens File

- Every project MUST have `app/tokens.css` with CSS custom properties for: colors, typography (with responsive breakpoints), spacing, border-radius, shadows, transitions, z-index, and overlays
- `app/globals.css` imports tokens via `@import "./tokens.css"` — only ONE `@import "tailwindcss"` and ONE tokens import allowed
- NEVER duplicate the `@import "tailwindcss"` line — it wipes all generated Tailwind styles
- Use token variables in components (e.g., `var(--color-primary)`, `var(--transition-entrance)`)

---

## 12. Scroll Animations — Mandatory FadeIn Usage

- Every section component (except Marquee) MUST wrap its content in `<FadeIn>`
- FadeIn is in `app/components/ui/FadeIn.tsx`, backed by `app/hooks/useOnScreen.ts`
- Components using FadeIn MUST have `"use client"` directive

**FadeIn architecture (critical):**
```tsx
// Outer div: opacity transition ONLY — className="transition-all"
// Inner div: layout classes + translate animation — receives `className` prop
<div ref={ref} className="transition-all" style={{ opacity, transitionDuration, ... }}>
  <div className={`${className} ${isVisible ? "" : getInitialTransform()}`}>
    {children}
  </div>
</div>
```

- `className` goes to the **inner div only** — NEVER to the outer div (prevents double-class layout bugs)
- The outer div handles opacity fading; the inner div handles layout + slide animation

**Animation rules:**
- Default direction: `"up"` (content slides up as it fades in)
- Default duration: `600ms`
- Hero sections use `duration={800}` for a slower, more dramatic entrance
- Use `delay` prop for staggered animations within a section (e.g., heading first, content second with `delay={200}`)
- When wrapping a `Row` inside a flex Section, pass `className="flex flex-1"` to FadeIn so the wrapper divs don't break the flex flow

---

## 13. WhyWeBuiltSection Flex Layout Pattern

Side-by-side sections (image + content) use a flex Section with equal columns:

```tsx
<Section className="flex flex-col items-stretch lg:flex-row">
  <div className="relative min-h-[400px] bg-card lg:flex-1">
    {/* image column — 50% */}
  </div>
  <FadeIn direction="up" className="flex flex-1">
  <Row className="flex flex-1 items-center justify-center p-10">
    {/* content column — 50%, centered */}
  </Row>
  </FadeIn>
</Section>
```

**Rules:**
- Image column uses `lg:flex-1` (NOT a fixed width like `lg:w-[476px]`) for equal 50/50 split
- FadeIn wrapping the Row MUST have `className="flex flex-1"` to preserve the flex flow
- Image uses `object-contain` to prevent the portrait from being cropped in height

---

## Quick Reference Checklist

Before submitting any component, verify:

- [ ] Uses `<Section>` + `<Row>` (no hardcoded containers)
- [ ] Data imported from `lib/constants.ts` (no inline arrays)
- [ ] Body text uses `text-white/80` on dark backgrounds
- [ ] Headings use `leading-tight` (no fixed pixel line-heights)
- [ ] Border radius uses `rounded-2xl` or `rounded-3xl` (no arbitrary values)
- [ ] Overlays use `/30` or `/80` (no arbitrary opacities)
- [ ] No hardcoded hex colors (uses theme variables only)
- [ ] Icons are unique and semantically correct per feature
- [ ] File is in the correct subdirectory
- [ ] Filename follows PascalCase + Section suffix convention
- [ ] `tokens.css` exists and is imported in `globals.css` (single import only)
- [ ] Section includes `<FadeIn>` scroll animation (except Marquee)
- [ ] Component has `"use client"` if using FadeIn/hooks
- [ ] FadeIn `className` applied to inner div only (never outer)
- [ ] Side-by-side sections use `lg:flex-1` on both columns for equal split
