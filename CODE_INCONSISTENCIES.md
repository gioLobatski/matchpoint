# MatchPoint Website — Audit Report

> Structural gaps compared to **gfy** and **santaclara** reference projects, plus internal code inconsistencies across all 11 components.

---

## Part 1 — Structural Gaps vs Reference Projects

The following items exist in both **gfy** and **santaclara** but are entirely absent from **matchpoint-website**.

---

### 1.1 Component Architecture

**Current:** All 11 components live flat in a root-level `components/` folder.

**Standard (gfy & santaclara):** Components live inside `app/components/` organized into subdirectories:

| Folder | Purpose |
|---|---|
| `components/layout/` | Header, Footer, Row, Section |
| `components/sections/` | Page-specific sections (homepage/, about/, contact/) |
| `components/shared/` | Reusable cross-page components (banners, modals) |
| `components/ui/` | Primitive UI elements (Button, FadeIn) |
| `components/globals/` | Global elements (BackToTop, CtaSection) |
| `components/blocks/` | Content building blocks (cards, galleries) |
| `components/seo/` | Structured data, meta helpers |

#### Proposed Component Mapping

| Current File | Proposed Location |
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

---

### 1.2 Route Groups & Page Structure

**Current:** Only `app/page.tsx` exists — a single-page landing site.

**Standard:** Both reference projects use Next.js route groups:

| Route Group | gfy pages | santaclara pages |
|---|---|---|
| `(pages)/` | about, contact, services, faqs, privacy-policy, cookie-policy | about-us, contact-us, products, gallery, press, dealer, privacy-policy, cookie-policy |
| `(minors)/` | 404, coming-soon, maintenance, thank-you | 404, coming-soon, maintenance, thank-you |
| `api/` | contact/route.ts, revalidate/route.ts | contact/submit/route.ts, revalidate/route.ts |

Also missing:
- `app/not-found.tsx` — custom 404 page

---

### 1.3 SEO Infrastructure

| File / Feature | Purpose | gfy | santaclara | matchpoint |
|---|---|---|---|---|
| `robots.ts` | Controls crawler access | ✓ | ✓ | ✗ |
| `sitemap.ts` | Dynamic XML sitemap | ✓ | ✓ | ✗ |
| Open Graph tags | Social sharing preview | partial | ✓ full | ✗ |
| JSON-LD schemas | Structured data for search engines | ✗ | ✓ | ✗ |
| Favicon metadata | Browser tab icon | ✓ | ✓ | ✗ |

Current matchpoint metadata only has basic `title` and `description` in layout.tsx.

---

### 1.4 Utility Directories

| Directory | Purpose | gfy | santaclara | matchpoint |
|---|---|---|---|---|
| `app/hooks/` | Custom React hooks (e.g. `useScrollAnimation`) | ✓ | ✓ | ✗ |
| `app/lib/` | Business logic, services, constants | ✓ | ✓ | ✗ |
| `app/types/` | Shared TypeScript interfaces | ✗ | ✓ | ✗ |

Examples from reference projects:
- `hooks/useScrollAnimation.ts` — intersection observer for scroll-triggered animations
- `lib/constants.ts` — `SITE_CONFIG`, `NAVIGATION_ITEMS`
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- `lib/schema.ts` — JSON-LD generators (Organization, LocalBusiness, Product)
- `types/index.ts` — `Product`, `Testimonial`, `NewsItem`, `CompanyStat` interfaces

---

### 1.5 Deployment & CI/CD

| Item | gfy | santaclara | matchpoint |
|---|---|---|---|
| `ecosystem.config.cjs` (PM2) | ✓ | ✓ | ✗ |
| CI/CD pipeline | GitHub Actions | Bitbucket Pipelines | ✗ |

Both reference projects deploy to a VPS via SSH + PM2 with automated build pipelines.

---

### 1.6 Environment Variables

**Missing:** `.env.example`

Santaclara provides a documented `.env.example` with all required variables, comments explaining where to get API keys, and placeholder values. MatchPoint has no example file.

---

### 1.7 Layout Primitives

**Missing:** `Section` and `Row` wrapper components.

Both reference projects use:
- `Section` — full-width background container (handles bg color, bg image, id)
- `Row` — content width controller (default max-width: 1320px, centered with `mx-auto`)

These enforce consistent spacing and max-width across all sections. MatchPoint hardcodes these values in every component (see inconsistencies in Part 2).

---

### 1.8 Cookie Consent / Privacy Compliance

Both reference projects have a full GDPR consent system:
- `ConsentProvider.tsx` — React context
- `ConsentGate.tsx` — Gate for consent-gated content
- `ConsentScriptLoader.tsx` — Loads 3rd-party scripts after consent
- `CookieConsentBanner.tsx` — GDPR banner UI
- `CookieSettingsModal.tsx` — Granular settings modal
- `CookieSettingsLink.tsx` — Footer link
- `lib/consent/` — config, storage, types

---

### 1.9 Third-Party Integrations

| Integration | Purpose | gfy | santaclara | matchpoint |
|---|---|---|---|---|
| `@next/third-parties` | Google Analytics 4 | ✓ | ✓ | ✗ |
| CleanTalk | Anti-spam for forms | ✓ | ✓ | ✗ |
| Revalidation API | On-demand ISR from CMS | ✓ | ✓ | ✗ |

---

### 1.10 Feature Parity Summary

| Feature | gfy | santaclara | matchpoint |
|---|---|---|---|
| Route groups `(pages)`, `(minors)` | ✓ | ✓ | ✗ |
| API routes | ✓ | ✓ | ✗ |
| Custom 404 page | ✓ | ✓ | ✗ |
| robots.ts | ✓ | ✓ | ✗ |
| sitemap.ts | ✓ | ✓ | ✗ |
| Open Graph metadata | partial | ✓ | ✗ |
| JSON-LD Structured Data | ✗ | ✓ | ✗ |
| Component subdirectories | ✓ | ✓ | ✗ |
| Layout primitives (Section, Row) | ✓ | ✓ | ✗ |
| UI primitives (Button, FadeIn) | ✓ | ✓ | ✗ |
| Custom hooks directory | ✓ | ✓ | ✗ |
| Lib / services directory | ✓ | ✓ | ✗ |
| Shared types directory | ✗ | ✓ | ✗ |
| PM2 ecosystem config | ✓ | ✓ | ✗ |
| CI/CD pipeline | ✓ | ✓ | ✗ |
| .env.example | ✗ | ✓ | ✗ |
| Cookie consent system | ✓ | ✓ | ✗ |
| Google Analytics 4 | ✓ | ✓ | ✗ |
| Anti-spam (CleanTalk) | ✓ | ✓ | ✗ |
| Back-to-top button | ✓ | ✓ | ✗ |
| Font optimization (next/font) | ✓ | ✓ | ✓ |
| TypeScript strict mode | ✓ | ✓ | ✓ |
| Tailwind CSS v4 | ✓ | ✓ | ✓ |
| ESLint config | ✓ | ✓ | ✓ |

---

## Part 2 — Internal Code Inconsistencies

Audit of patterns across all 11 matchpoint components.

---

### 2.1 Max-Width Values

Different `max-w-*` values are used across components with no single standard.

| Component | Max Width Used |
|---|---|
| PainPoints | `max-w-[1340px]` |
| Features | `max-w-[1340px]` |
| HowItWorks | `max-w-[1340px]` |
| Hero (text container) | `max-w-[1000px]` |
| MissionBanner (text container) | `max-w-[1000px]` |
| ApplyForm | `max-w-[1280px]` |
| Footer | `max-w-[1280px]` |
| SocialProof (text) | `max-w-[710px]` |
| SocialProof (quote) | `max-w-[695px]` |
| HowItWorks (heading) | `max-w-[960px]` |
| WhyWeBuilt (text) | `max-w-[621px]` |

**Issue:** Three different container widths (`1340px`, `1280px`, `1000px`) are used interchangeably. There is no single source of truth for content max-width.

---

### 2.2 Horizontal Padding

`lg:px` values differ across components.

| Component | Mobile px | Desktop lg:px |
|---|---|---|
| Navbar | `px-6` | `lg:px-16` |
| PainPoints | `px-6` | `lg:px-16` |
| Features | `px-6` | `lg:px-16` |
| HowItWorks | `px-6` | `lg:px-16` |
| Hero | `px-6` | `lg:px-20` |
| ApplyForm | `px-6` | `lg:px-20` |
| WhyWeBuilt | — | `lg:px-[70px]` |
| SocialProof | `px-6` | *(none)* |
| MissionBanner | `px-6` | *(none)* |
| Footer | `p-10` | `lg:p-20` |

**Issue:** Three different desktop padding values (`lg:px-16`, `lg:px-20`, `lg:px-[70px]`) plus two components with no desktop override at all.

---

### 2.3 Vertical Padding

| Component | Vertical Padding |
|---|---|
| PainPoints | `py-20` |
| Features | `py-20` |
| HowItWorks | `py-24` |
| SocialProof | `py-20` |
| ApplyForm | `py-20` |
| Hero | `min-h-[800px]` + `pt-[98px]` |
| MissionBanner | `min-h-[695px]` |
| WhyWeBuilt | *(none)* |
| Marquee | `py-6` |

**Issue:** HowItWorks uses `py-24` while everything else uses `py-20`. Hero and MissionBanner use `min-h-*` instead of padding. WhyWeBuilt has no vertical padding.

---

### 2.4 Body Text Color

Two different approaches for muted body text.

| Approach | Components |
|---|---|
| `text-white/80` | PainPoints, Features, HowItWorks, WhyWeBuilt, ApplyForm |
| `text-neutral-200` | Hero, MissionBanner, SocialProof |

**Issue:** Same visual intent (muted white text) expressed two different ways. `text-white/80` ≈ 80% opacity white, `text-neutral-200` is a fixed gray. These render as slightly different colors.

---

### 2.5 Background Colors

| Component | Background |
|---|---|
| Hero | `bg-black` + image overlay |
| Marquee | `bg-primary-500` |
| PainPoints | `bg-black` |
| MissionBanner | `bg-black` + image overlay |
| Features | `bg-black` |
| HowItWorks | `bg-section` |
| WhyWeBuilt | `bg-section` |
| SocialProof | image overlay (`bg-black/85`) |
| ApplyForm | image overlay (`bg-black/90`) |
| Footer | `bg-black` |

**Issue:** HowItWorks and WhyWeBuilt use the `bg-section` theme color (`#100c08`), while all others use `bg-black`. The difference is subtle but inconsistent — either all should use `bg-section` or all should use `bg-black`.

---

### 2.6 Heading Styles

### Section headings (h2)

| Component | Classes |
|---|---|
| PainPoints | `text-3xl font-bold leading-[52px] text-white md:text-4xl` |
| Features | `text-3xl font-bold leading-[52px] text-white md:text-4xl` |
| HowItWorks | `text-3xl font-bold leading-[52px] text-white md:text-4xl` |
| WhyWeBuilt | `text-3xl font-bold leading-[52px] text-white md:text-4xl` |
| SocialProof | `text-3xl font-bold leading-[52px] text-white md:text-4xl` |
| ApplyForm | `text-3xl font-bold leading-[52px] text-white md:text-4xl` |
| Hero (h1) | `text-4xl font-bold text-white md:text-6xl` |
| MissionBanner | `text-4xl font-bold text-white md:text-6xl` |

**Issue:** Two different heading patterns. The section h2s all share one style, but Hero and MissionBanner use a different style (`text-4xl md:text-6xl`, no `leading-[52px]`). Also, `leading-[52px]` is hardcoded and doesn't scale when the font jumps from `text-3xl` → `text-4xl` at `md`.

---

### 2.7 Hardcoded Colors (Bypassing Theme)

| Component | Hardcoded Value | Should Be |
|---|---|---|
| WhyWeBuilt | `text-[#d4960a]` | `text-primary-500` (`#e2a037`) — and the values don't even match |
| WhyWeBuilt | `bg-[#1a140f]` | A theme color variable |

**Issue:** WhyWeBuilt bypasses the theme system with raw hex values. Worse, `#d4960a` doesn't match `--color-primary-500: #e2a037` — so the "Every Call Counts" text in WhyWeBuilt is a **different shade of gold** than the rest of the site.

---

### 2.8 Duplicate / Wrong Icons in Features

| Feature Card | Icon Used |
|---|---|
| Verified Profile | `/icons/calendar-x.svg` |
| Availability Calendar | `/icons/wallet-outline.svg` |
| Game Alerts | `/icons/calendar-x.svg` |
| Payment Tracking | `/icons/wallet-outline.svg` |
| Rating System | `/icons/calendar-x.svg` |
| Performance Analytics | `/icons/wallet-outline.svg` |

**Issue:** Only 2 icons are used for 6 different features, alternating. "Verified Profile" shouldn't use a calendar icon. "Availability Calendar" shouldn't use a wallet icon. The icons are semantically wrong for the content they represent.

Available unused icons in `/public/icons/`:
- `chevron-down.svg`
- `inbox.svg`
- `people.svg`
- `quote.svg`
- `search.svg`
- `trending-up.svg`
- `user-plus.svg`

---

### 2.9 Section IDs vs Navigation Links

| NavLink | href | Component with matching ID |
|---|---|---|
| Home | `#home` | Hero (`id="home"`) ✓ |
| Problem | `#problem` | PainPoints (`id="problem"`) ✓ |
| Solutions | `#solutions` | Features (`id="solutions"`) ✓ |
| Experience | `#experience` | HowItWorks (`id="experience"`) ✓ |
| Purpose | `#purpose` | WhyWeBuilt (`id="purpose"`) ✓ |
| *(CTA button)* | `#apply` | ApplyForm (`id="apply"`) ✓ |

**Missing IDs:** Marquee, MissionBanner, SocialProof, and Footer have no `id` attributes. This is fine for now but means they can't be deep-linked.

**Issue:** The nav only links to 5 of 11 sections. Not necessarily wrong, but worth noting that Marquee, MissionBanner, and SocialProof are "invisible" to navigation.

---

### 2.10 Rounded Corner Values

| Component | Border Radius |
|---|---|
| PainPoints cards | `rounded-2xl` (16px) |
| Features cards | `rounded-2xl` (16px) |
| HowItWorks container | `rounded-2xl` (16px) |
| SocialProof quote box | `rounded-[32px]` |
| ApplyForm form | `rounded-[32px]` |
| ApplyForm side image | `rounded-[32px]` |
| Stats cards | `rounded-lg` (8px) |
| CTA buttons (Navbar, Hero) | `rounded-xl` (12px) |
| ApplyForm submit button | `rounded-full` |

**Issue:** Four different border-radius values used with no pattern (`rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-[32px]`, `rounded-full`). Cards within sections use different radii than other cards.

---

### 2.11 Repeated Background Images

| Image | Used In |
|---|---|
| `/images/stadium-bg.png` | SocialProof, ApplyForm |
| `/images/photo-panel-officials.png` | MissionBanner, HowItWorks |

**Issue:** The same background images appear in multiple sections. This may be intentional for visual consistency, but it means changes to one section's overlay need to be manually replicated in the other.

---

### 2.12 Image Overlay Patterns

| Component | Overlay |
|---|---|
| Hero | `bg-black/30` |
| MissionBanner | `bg-black/40` |
| SocialProof | `bg-black/85` |
| ApplyForm | `bg-black/90` |

**Issue:** Four different overlay opacities for background image sections. No consistent darkness level.

---

### 2.13 Component Data Patterns

| Component | Data Location |
|---|---|
| Navbar | Inline `const navLinks` at top of file |
| PainPoints | Inline `const painPoints` at top of file |
| Features | Inline `const features` at top of file |
| HowItWorks | Inline `const steps` at top of file |
| SocialProof | Inline `const stats` at top of file |
| Marquee | Inline `const items` at top of file |
| ApplyForm | Inline `const inputClass` at top of file |

**Issue:** All data arrays are defined inline in their component files. If any data needs to be shared or reused, it would require duplication. There is no `lib/constants.ts` or `lib/data.ts` to centralize content.

---

### 2.14 `alt` Text Quality

| Component | Image | Alt Text |
|---|---|---|
| Hero | hero-bg.png | `""` *(decorative — OK)* |
| PainPoints | grind-photo.png | `"The daily grind of a basketball official"` ✓ |
| Features | tools-photo.png | `"Tools of a basketball official"` ✓ |
| HowItWorks | photo-panel-officials.png | `"Basketball officials"` ✓ |
| WhyWeBuilt | founder.png | `"Rhoy Landicho, Founder of MatchPoint"` ✓ |
| SocialProof | quote.svg | `""` *(decorative — OK)* |
| SocialProof | avatar-rodel.png | `"Rodel Santos"` ✓ |
| MissionBanner | photo-panel-officials.png | `""` *(decorative — OK)* |
| ApplyForm | stadium-bg.png | `""` *(decorative — OK)* |
| ApplyForm | waitlist-photo.png | `"Basketball referee"` ✓ |
| Navbar | logo.png | `"MatchPoint"` ✓ |
| Footer | logo.png | `"MatchPoint"` ✓ |

**Issue:** `photo-panel-officials.png` has descriptive alt text in HowItWorks (`"Basketball officials"`) but empty alt in MissionBanner. Since it's a background image in both cases, this is technically fine, but the inconsistency suggests no alt-text policy.

---

### 2.15 Missing `"use client"` Considerations

| Component | Has `"use client"` | Has Interactivity |
|---|---|---|
| ApplyForm | ✓ | Yes — `useState`, `onSubmit` |
| Navbar | ✗ | No — but mobile menu will need it |
| All others | ✗ | No |

**Current state:** Correct. Only ApplyForm needs client directives. But when a mobile hamburger menu is added to Navbar, it will need `"use client"` added.

---

### 2.16 Form Submission Has No Backend

```tsx
// ApplyForm.tsx — lines 29-32
onSubmit={(e) => {
  e.preventDefault();
  setSubmitted(true);
}}
```

**Issue:** The form prevents default but does nothing with the data. There is no API route, no fetch call, no state management for loading/error states. The user sees "Application Received!" but nothing is actually submitted.

---

### 2.17 Inconsistent Section Composition

Some sections compose their layout inline, others use a pattern. There's no shared `Section` or `Row` wrapper.

**PainPoints pattern:**
```
<section id="..." className="bg-black px-6 py-20 lg:px-16">
  <div className="mx-auto flex max-w-[1340px] ...">
    ...content...
  </div>
</section>
```

**HowItWorks pattern:**
```
<section id="..." className="flex flex-col items-center gap-16 bg-section px-6 py-24 lg:px-16">
  <div className="flex max-w-[960px] ...">...heading...</div>
  <div className="flex w-full max-w-[1340px] ...">...content...</div>
  <div className="h-px w-full max-w-[1340px] ...">...divider...</div>
</section>
```

**Issue:** Every section reinvents its own container. The heading + content + max-width pattern is duplicated across all components. A shared `Section` + `Row` primitive would eliminate this.

---

## Summary

### Part 1 — Structural Gaps (missing vs gfy/santaclara)

| # | Item | Status |
|---|---|---|
| 1.1 | Component subdirectories | ✗ Missing |
| 1.2 | Route groups `(pages)`, `(minors)` + API routes | ✗ Missing |
| 1.3 | SEO infrastructure (robots.ts, sitemap.ts, OG, JSON-LD) | ✗ Missing |
| 1.4 | Utility directories (hooks/, lib/, types/) | ✗ Missing |
| 1.5 | Deployment config (PM2 + CI/CD) | ✗ Missing |
| 1.6 | `.env.example` | ✗ Missing |
| 1.7 | Layout primitives (Section, Row) | ✗ Missing |
| 1.8 | Cookie consent / privacy compliance | ✗ Missing |
| 1.9 | Third-party integrations (GA4, CleanTalk) | ✗ Missing |

### Part 2 — Internal Code Inconsistencies

| # | Category | Severity |
|---|---|---|
| 2.1 | Max-width values (3 different standards) | High |
| 2.2 | Horizontal padding (4 different values) | High |
| 2.3 | Vertical padding inconsistency | Medium |
| 2.4 | Body text color (2 approaches) | Medium |
| 2.5 | Background color inconsistency | Low |
| 2.6 | Heading style inconsistency | Medium |
| 2.7 | Hardcoded colors bypassing theme | High |
| 2.8 | Duplicate/wrong icons in Features | High |
| 2.9 | Section IDs coverage | Low |
| 2.10 | Border radius inconsistency | Medium |
| 2.11 | Repeated background images | Low |
| 2.12 | Overlay opacity inconsistency | Medium |
| 2.13 | No centralized data/constants | Medium |
| 2.14 | Alt text inconsistency | Low |
| 2.15 | Future "use client" needs | Low |
| 2.16 | Form has no backend | High |
| 2.17 | No shared section layout pattern | High |
