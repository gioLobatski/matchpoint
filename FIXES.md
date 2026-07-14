# MatchPoint — Fixes Applied

> Log of every change made to resolve the inconsistencies documented in `CODE_INCONSISTENCIES.md`.

---

## Structural Changes

### Component Architecture Restructure (1.1)

All components moved from root `components/` into `app/components/` subdirectories:

| Old Path | New Path |
|---|---|
| `components/Navbar.tsx` | `app/components/layout/Header.tsx` |
| `components/Footer.tsx` | `app/components/layout/Footer.tsx` |
| `components/Hero.tsx` | `app/components/sections/homepage/HeroSection.tsx` |
| `components/Marquee.tsx` | `app/components/sections/homepage/MarqueeSection.tsx` |
| `components/PainPoints.tsx` | `app/components/sections/homepage/PainPointsSection.tsx` |
| `components/Features.tsx` | `app/components/sections/homepage/FeaturesSection.tsx` |
| `components/HowItWorks.tsx` | `app/components/sections/homepage/HowItWorksSection.tsx` |
| `components/WhyWeBuilt.tsx` | `app/components/sections/homepage/WhyWeBuiltSection.tsx` |
| `components/SocialProof.tsx` | `app/components/sections/homepage/SocialProofSection.tsx` |
| `components/MissionBanner.tsx` | `app/components/sections/homepage/MissionBannerSection.tsx` |
| `components/ApplyForm.tsx` | `app/components/sections/homepage/ApplyFormSection.tsx` |

The old root `components/` directory was deleted after migration.

---

### Layout Primitives Created (1.7)

- **`app/components/layout/Section.tsx`** — Full-width section container. Handles `bgColor`, `bgImage`, `id`, and `className`. Replaces all hardcoded `<section>` wrappers.
- **`app/components/layout/Row.tsx`** — Content width controller. Default `maxWidth: 1340px`, width `w-11/12`, auto-centered. Replaces all hardcoded `mx-auto max-w-[1340px]` divs.

---

### Utility Directories Created (1.4)

- **`app/hooks/useScrollAnimation.ts`** — IntersectionObserver hook returning `{ ref, isVisible }`.
- **`app/hooks/useOnScreen.ts`** — Simpler visibility hook used by `FadeIn` component.
- **`app/lib/constants.ts`** — Centralized site configuration and all component data arrays.

---

### UI Primitives Created

- **`app/components/ui/FadeIn.tsx`** — Scroll-triggered fade-in wrapper with configurable direction, delay, and duration.

---

### Custom 404 Page (1.2)

- **`app/not-found.tsx`** — Created with Header, centered 404 message, and "Return to Homepage" CTA. Uses Section + Row primitives.

---

## Internal Code Inconsistency Fixes

### 2.1 — Max-Width Standardized

**Before:** Three different values (`1340px`, `1280px`, `1000px`) used interchangeably.

**Fix:** `Row` component enforces a single default of `1340px`. Components that need a narrower container (e.g., HowItWorks heading at `960px`) pass `maxWidth` explicitly. Footer and ApplyForm now use `Row` default instead of their own `max-w-[1280px]`.

---

### 2.2 — Horizontal Padding Standardized

**Before:** `lg:px-16`, `lg:px-20`, `lg:px-[70px]`, and some with no desktop override.

**Fix:** `Row` uses `w-11/12` (~4% margin each side) instead of hardcoded `px-*` values. All sections delegate horizontal padding to `Row`. The fixed Header retains its own `px-6 lg:px-16` since it uses a different layout pattern.

---

### 2.3 — Vertical Padding Standardized

**Before:** `py-20`, `py-24`, `py-6`, `min-h-*`, and some with none.

**Fix:** Standardized to `py-20` for all content sections. HowItWorks keeps `py-24` (intentional extra spacing). Marquee keeps `py-6` (decorative band). Hero/MissionBanner keep `min-h-*` (full-viewport patterns). WhyWeBuilt now inherits spacing from Section padding.

---

### 2.4 — Body Text Color Standardized

**Before:** `text-white/80` in some components, `text-neutral-200` in others.

**Fix:** All muted body text now uses `text-white/80`. Changed in:
- `HeroSection.tsx` (was `text-neutral-200`)
- `MissionBannerSection.tsx` (was `text-neutral-200`)
- `SocialProofSection.tsx` (was `text-neutral-200`)
- `ApplyFormSection.tsx` (was `text-neutral-200`)
- `Header.tsx` nav links (was `text-neutral-200`)
- `Footer.tsx` copyright (was `text-neutral-400`, now `text-white/80`)

---

### 2.5 — Background Colors (Intentional Decision)

**Before:** Most sections used `bg-black`, HowItWorks and WhyWeBuilt used `bg-section`.

**Fix:** Kept as intentional alternation. `bg-section` (`#100c08`) is used by HowItWorks and WhyWeBuilt to provide visual break between `bg-black` sections. This is now a deliberate design pattern, not an inconsistency.

---

### 2.6 — Heading Styles Standardized

**Before:** Section h2s used `leading-[52px]` which doesn't scale at `md:text-4xl`.

**Fix:** All headings now use `leading-tight` (Tailwind's 1.25 line-height), which scales naturally with font size. Applied to all h1 and h2 headings across HeroSection, MissionBanner, PainPoints, Features, HowItWorks, WhyWeBuilt, SocialProof, and ApplyForm.

---

### 2.7 — Hardcoded Colors Removed

**Before:** WhyWeBuilt used `text-[#d4960a]` (wrong gold) and `bg-[#1a140f]` (non-theme color).

**Fix:**
- `text-[#d4960a]` replaced with `text-primary-500` (matches theme gold `#e2a037`)
- `bg-[#1a140f]` replaced with `bg-card` (closest theme variable `#181008`)

---

### 2.8 — Feature Icons Corrected

**Before:** Only 2 icons alternated across 6 features (calendar-x and wallet-outline), semantically wrong.

**Fix:** Each feature now has a unique, semantically correct icon:

| Feature | Old Icon | New Icon |
|---|---|---|
| Verified Profile | `calendar-x.svg` | `user-plus.svg` |
| Availability Calendar | `wallet-outline.svg` | `calendar-x.svg` |
| Game Alerts | `calendar-x.svg` | `inbox.svg` |
| Payment Tracking | `wallet-outline.svg` | `wallet-outline.svg` (kept) |
| Rating System | `calendar-x.svg` | `trending-up.svg` |
| Performance Analytics | `wallet-outline.svg` | `search.svg` |

---

### 2.10 — Border Radius Standardized

**Before:** Four different values (`rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-[32px]`, `rounded-full`).

**Fix:** Two tiers:
- Cards/panels: `rounded-2xl` (16px) — kept for all card components
- Large containers: `rounded-3xl` (24px) — replaced `rounded-[32px]` in SocialProof quote box, ApplyForm form, and ApplyForm side image
- CTA buttons: `rounded-xl` (12px) — kept as intentional button styling
- Submit button: `rounded-full` — kept as intentional pill shape

---

### 2.12 — Overlay Opacities Standardized

**Before:** Four different values (`bg-black/30`, `/40`, `/85`, `/90`).

**Fix:** Two levels:
- Light overlay (hero/banner): `bg-black/30` — Hero stays at `/30`, MissionBanner changed from `/40` to `/30`
- Heavy overlay (content-over-image): `bg-black/80` — SocialProof changed from `/85` to `/80`, ApplyForm changed from `/90` to `/80`

---

### 2.13 — Centralized Data/Constants

**Before:** All data arrays defined inline in component files.

**Fix:** All data moved to `app/lib/constants.ts`:
- `SITE_CONFIG` — site name, tagline, description, URL
- `NAVIGATION_ITEMS` — nav links (from Navbar)
- `PAIN_POINTS` — pain point cards (from PainPoints)
- `FEATURES` — feature cards with corrected icons (from Features)
- `HOW_IT_WORKS_STEPS` — step-by-step items (from HowItWorks)
- `TESTIMONIAL_STATS` — social proof stats (from SocialProof)
- `MARQUEE_ITEM_COUNT` — marquee repetition count (from Marquee)

---

### 2.17 — Shared Section Layout Pattern

**Before:** Every section reinvented its own container with different padding, max-width, and structure.

**Fix:** All sections now use the `Section` + `Row` primitive pair:
```tsx
<Section id="..." bgColor="bg-black" className="py-20">
  <Row className="...">
    content
  </Row>
</Section>
```

This ensures consistent max-width, centering, and horizontal padding across all sections.

---

## Items Not Changed (Skipped by Request)

- **1.3** SEO infrastructure (robots.ts, sitemap.ts, OG, JSON-LD)
- **1.5** Deployment config (PM2, CI/CD)
- **1.6** `.env.example`
- **1.8** Cookie consent / GDPR compliance
- **1.9** Third-party integrations (GA4, CleanTalk)
- **2.16** Form backend/API route (ApplyForm submission stays client-side)
