# Cukiernia Klysek — Website Design Spec

**Date:** 2026-05-28  
**Stack:** Next.js · Tailwind CSS · Framer Motion  
**Status:** Approved

---

## 1. Project Overview

A full marketing website for Cukiernia Klysek, a traditional Polish patisserie operating since 1985. The site must feel elegant, warm, and timeless — not trendy. The user has their own photography for all sections.

---

## 2. Design System

### Visual Direction
**Warm Cream** — cream/beige backgrounds, warm brown text, red-orange accent drawn directly from the existing logo.

### Color Palette
| Token | Hex | Usage |
|---|---|---|
| `cream` | `#faf6ef` | Page background, section backgrounds |
| `cream-dark` | `#f5e6d3` | Alternate section background |
| `brown-dark` | `#2c1810` | Primary text, footer background |
| `brown-mid` | `#6b5240` | Body text, secondary text |
| `brown-light` | `#9b7c5a` | Labels, captions, nav links |
| `gold` | `#c17f4a` | Dividers, accents, borders, dots |
| `red-accent` | `#d4452a` | Active nav underline, tab indicator |
| `brown-border` | `#e8ddd0` | Card borders, section dividers |

### Typography
- **Headings:** Cormorant Garamond — italic for hero/large headings, semi-bold for section titles
- **UI / Body:** Jost — weight 300 for body text, 400 for labels, 500 for navigation
- **Eyebrows / Labels:** Jost 300, `letter-spacing: 4–5px`, `text-transform: uppercase`, color `#c17f4a`
- **Google Fonts:** `Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600` + `Jost:wght@300;400;500`

### Logo
- File: `klysek.png` (project root)
- On dark backgrounds (hero, footer): `filter: brightness(0) invert(1)` at `opacity: 0.92`
- On light backgrounds (navbar scrolled): display at natural colors

---

## 3. Architecture — Approach C

**Hero:** Pure CSS animations (zero JS for animation). Ken Burns + cross-fade implemented entirely with `@keyframes` and `animation-delay`. The `<HeroSlideshow>` component is isolated — its internal state never causes re-renders in the navbar or the rest of the page.

**Scroll reveals:** Framer Motion `whileInView` only for sections below the hero (O nas, Oferta, etc.). This adds ~90kb but saves significant code for staggered entrance animations.

**Navbar scroll behavior:** CSS `scroll-event` listener via `useEffect` adds a Tailwind class (`scrolled`) to the navbar once scroll > 50px. No Framer Motion needed here.

---

## 4. Sections

### 00 · Navbar (sticky, z-50)
- **Default state:** fully transparent, white text/logo
- **Scrolled state (>50px):** `bg-[#faf6ef]/95 backdrop-blur-sm shadow-sm`, text switches to `#2c1810`
- **Logo:** left-aligned, `klysek.png`
- **Links (right):** Strona główna · O nas · Oferta · Wnętrze · Kontakt
- **Active link:** bottom border `1px solid #d4452a`
- **Transition:** `transition-all duration-300`

### 01 · Hero (h-screen)

**Slideshow:**
- 4 user-provided images loaded via Next.js `<Image>` with `priority` and `fill` on the first slide
- Each slide is an absolutely positioned `div` with a unique CSS animation instance
- Animation cycle: 20s total (4 slides × 5s each)
- `animation-delay`: 0s, 5s, 10s, 15s per slide
- `will-change: transform, opacity` for GPU compositing

**Ken Burns keyframe:**
```css
@keyframes slide-ken {
  0%   { opacity: 0; transform: scale(1.0); }
  5%   { opacity: 1; }
  25%  { opacity: 1; transform: scale(1.08); }
  30%  { opacity: 0; transform: scale(1.08); }
  100% { opacity: 0; }
}
```

**Overlay:** `bg-gradient-to-b from-[#140a05]/55 via-[#140a05]/42 to-[#140a05]/65`

**Static content layer (z-10, absolute center):**
- Eyebrow: `CUKIERNIA KLYSEK · OD 1985` — Jost 300, 10px, letter-spacing 5px, color `#c17f4a`
- Title: `Z miłości do dobrego smaku` — Cormorant Garamond italic, 58px (desktop) / 36px (mobile), white
- Decorative divider: 50px horizontal line, gradient `transparent → #c17f4a → transparent`
- Subtitle: `Tradycyjne wypieki · Autorskie torty · Sezonowe desery` — Jost 300, 12px, letter-spacing 3px, white/60
- CTA button: `Poznaj naszą ofertę` — outlined, border `rgba(193,127,74,0.7)`, hover fills with `rgba(193,127,74,0.2)`

**Slide indicators (dots):** 4 dots, bottom-center. Synchronized via the same `animation-delay` values as slides — no JS. Active dot: `width: 20px; border-radius: 3px; background: #c17f4a`. Inactive: `6px circle, rgba(255,255,255,0.3)`.

**Scroll indicator:** bottom-right. Vertical "scroll" text + animated line descending.

**Component structure:**
```
<HeroSection>          ← no state, static wrapper
  <HeroSlideshow />    ← pure CSS only, zero React state needed
  <HeroOverlay />      ← static dark gradient div
  <HeroContent />      ← static: logo eyebrow, title, divider, subtitle, CTA
  <HeroDots />         ← pure CSS animated
  <HeroScrollHint />   ← pure CSS animated
</HeroSection>
```

### 02 · Opis cukierni
- Two-column grid: left = text block, right = asymmetric photo group (1 large + 2 small in 2×2 grid)
- Eyebrow + heading (Cormorant Garamond italic) + gold divider + body text (Jost 300)
- Framer Motion `whileInView` fade-up on both columns with slight stagger
- Background: `#faf6ef`

### 03 · Bestsellery
- Section heading centered
- 4-column card grid (2 columns on mobile)
- Each card: photo top, product name (Cormorant Garamond italic), short description (Jost 300), `Zamów →` link in gold
- Framer Motion `whileInView` stagger on cards (each card delays by 0.1s)
- Card hover: `translateY(-4px) shadow-md` transition

### 04 · O nas
- 3–4 alternating blocks: `[photo left | text right]` then `[text left | photo right]`
- Each text block: eyebrow + heading + gold divider + body paragraph
- Framer Motion: text slides in from left/right (`x: ±60, opacity: 0 → 0`), photo fades in from opposite side
- Background alternates: `#faf6ef` / `#f5e6d3`

### 05 · Oferta
- Centered section heading
- 5 tab buttons: Torty · Ciasta · Ciastka · Pączki · Desery
- Active tab: bottom border `2px solid #d4452a`, text `#2c1810`
- Tab content: 3-column grid of offer items (icon + name + short description)
- Tab switching: Framer Motion `AnimatePresence` for smooth content transition
- Background: `#faf6ef`

### 06 · Wnętrze
- Centered section heading
- 4-image asymmetric grid: 1 large (spans 2 rows, left) + 3 small (right column, stacked)
- Each tile: on hover shows dark overlay with location label
- Framer Motion `whileInView` stagger fade-in
- Background: `#2c1810` (dark section for contrast)

### 07 · Footer
- Background: `#2c1810`, text: `rgba(255,255,255,0.6)`
- 4-column grid:
  1. Logo (inverted) + tagline
  2. Godziny otwarcia (placeholder hours)
  3. Dane kontaktowe (address, phone, email — placeholders)
  4. Google Maps embed (placeholder `<iframe>`)
- Bottom bar: copyright line, `#9b7c5a` text
- Static — no animations

---

## 5. Performance & Image Strategy

- **Hero images:** `next/image` with `fill` layout, `object-fit: cover`. First slide gets `priority` prop (preloaded). Remaining 3 slides load lazily.
- **CLS prevention:** Hero wrapper has explicit `h-screen` — no layout shift possible.
- **Ken Burns:** only `transform` + `opacity` animated — both composited properties, no layout/paint triggered.
- **`will-change: transform, opacity`** on each slide div.
- **Framer Motion:** imported as `import { motion } from 'framer-motion'` — tree-shakeable. Only used in scroll-reveal sections, not hero.
- **Font loading:** `next/font/google` with `display: swap` for both Cormorant Garamond and Jost.

---

## 6. Tailwind Config Additions

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      cream: '#faf6ef',
      'cream-dark': '#f5e6d3',
      'brown-dark': '#2c1810',
      'brown-mid': '#6b5240',
      'brown-light': '#9b7c5a',
      gold: '#c17f4a',
      'red-accent': '#d4452a',
      'brown-border': '#e8ddd0',
    },
    fontFamily: {
      serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      sans: ['Jost', 'system-ui', 'sans-serif'],
    },
    keyframes: {
      'slide-ken': {
        '0%':   { opacity: '0', transform: 'scale(1.0)' },
        '5%':   { opacity: '1' },
        '25%':  { opacity: '1', transform: 'scale(1.08)' },
        '30%':  { opacity: '0', transform: 'scale(1.08)' },
        '100%': { opacity: '0' },
      },
    },
    animation: {
      'ken-1': 'slide-ken 20s ease-in-out infinite 0s',
      'ken-2': 'slide-ken 20s ease-in-out infinite 5s',
      'ken-3': 'slide-ken 20s ease-in-out infinite 10s',
      'ken-4': 'slide-ken 20s ease-in-out infinite 15s',
    },
  },
},
```

---

## 7. File Structure

```
klysek/
├── public/
│   ├── logo.png              ← klysek.png renamed
│   └── images/
│       ├── hero/             ← hero-1.jpg … hero-4.jpg
│       ├── bestsellers/      ← product photos
│       ├── about/            ← O nas section photos
│       └── interior/         ← Wnętrze section photos
├── src/
│   ├── app/
│   │   ├── layout.tsx        ← fonts, metadata
│   │   └── page.tsx          ← assembles all sections
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── hero/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── HeroSlideshow.tsx
│   │   │   └── HeroContent.tsx
│   │   ├── sections/
│   │   │   ├── AboutIntro.tsx
│   │   │   ├── Bestsellers.tsx
│   │   │   ├── AboutUs.tsx
│   │   │   ├── Offer.tsx
│   │   │   ├── Interior.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/
│   │       ├── SectionHeading.tsx
│   │       └── GoldDivider.tsx
│   └── data/
│       ├── bestsellers.ts
│       └── offer.ts
└── tailwind.config.js
```

---

## 8. Content Placeholders

All text content below is placeholder — to be replaced by the client:
- "O nas" section: 3–4 paragraphs about the bakery's history and values
- Bestsellers: product names, descriptions (4 items)
- Offer: items per category (Torty, Ciasta, Ciastka, Pączki, Desery)
- Footer: address, phone number, email, opening hours
- Google Maps embed: `<iframe>` src with actual location
