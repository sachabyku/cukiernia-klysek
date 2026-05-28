# Cukiernia Klysek — Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a full marketing website for Cukiernia Klysek using Next.js 14, Tailwind CSS, and Framer Motion.

**Architecture:** Single-page App Router site with sticky navbar, Ken Burns hero slideshow (pure CSS), scroll-reveal sections (Framer Motion `whileInView`), and a tabbed offer section. Hero animations are isolated in their own component tree — zero re-renders on the rest of the page.

**Tech Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS v3 · Framer Motion · next/font/google

---

## Image Assets — Required Before Start

The project root already has `torty/`, `ciasta/`, `ciastka/`, `paczki/`, `desery/` with product photos.

**Still needed from client (add to project root before Task 1):**
- `hero/` — 4 photos for the hero slideshow (landscape, high-res)
- `o-nas/` — 3–4 photos for the "O nas" section
- `wnętrze/` — 4 photos for the interior gallery
- `bestsellery/` — 4 photos for bestseller cards

---

## File Map

```
klysek/                             ← project root (existing)
├── public/
│   ├── logo.png                    ← klysek.png moved here (Task 1)
│   └── images/
│       ├── hero/                   ← hero-1.jpg … hero-4.jpg (Task 1)
│       ├── bestsellery/            ← 4 product photos (Task 1)
│       ├── o-nas/                  ← 3-4 photos (Task 1)
│       ├── wnętrze/               ← 4 photos (Task 1)
│       ├── torty/                  ← moved from root (Task 1)
│       ├── ciasta/                 ← moved from root (Task 1)
│       ├── ciastka/                ← moved from root (Task 1)
│       ├── paczki/                 ← moved from root (Task 1)
│       └── desery/                 ← moved from root (Task 1)
├── src/
│   ├── app/
│   │   ├── globals.css             ← base styles, dot-indicator keyframe (Task 2)
│   │   ├── layout.tsx              ← fonts, metadata (Task 2)
│   │   └── page.tsx                ← assembles all sections (Task 13)
│   ├── components/
│   │   ├── Navbar.tsx              ← sticky navbar, scroll behavior (Task 4)
│   │   ├── hero/
│   │   │   ├── HeroSection.tsx     ← wrapper, assembles hero parts (Task 6)
│   │   │   ├── HeroSlideshow.tsx   ← pure CSS Ken Burns slides (Task 5)
│   │   │   ├── HeroContent.tsx     ← static text layer (Task 6)
│   │   │   ├── HeroDots.tsx        ← pure CSS slide indicators (Task 6)
│   │   │   └── HeroScrollHint.tsx  ← scroll indicator (Task 6)
│   │   ├── sections/
│   │   │   ├── AboutIntro.tsx      ← text + asymmetric photos (Task 7)
│   │   │   ├── Bestsellers.tsx     ← 4-card grid (Task 8)
│   │   │   ├── AboutUs.tsx         ← alternating text/photo blocks (Task 9)
│   │   │   ├── Offer.tsx           ← tabbed offer section (Task 10)
│   │   │   ├── Interior.tsx        ← 4-tile photo grid (Task 11)
│   │   │   └── Footer.tsx          ← 4-column footer (Task 12)
│   │   └── ui/
│   │       ├── SectionHeading.tsx  ← eyebrow + heading + divider (Task 3)
│   │       └── GoldDivider.tsx     ← decorative 40px gold line (Task 3)
│   └── data/
│       ├── bestsellers.ts          ← 4 bestseller items (Task 8)
│       └── offer.ts                ← 5 categories with items (Task 10)
└── tailwind.config.js              ← colors, fonts, keyframes (Task 2)
```

---

## Task 1: Initialize Next.js and organize assets

**Files:**
- Create: Next.js project in `/Users/macbook/Desktop/klysek/klysek`
- Create: `public/images/` structure

- [ ] **Step 1: Initialize Next.js in the existing project directory**

```bash
cd /Users/macbook/Desktop/klysek/klysek
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack
```

When prompted about existing files, accept all overrides. The logo and docs folders are safe.

Expected: `node_modules/`, `src/`, `package.json`, `tailwind.config.ts`, `tsconfig.json` created.

- [ ] **Step 2: Install Framer Motion**

```bash
npm install framer-motion
```

Expected: `framer-motion` appears in `package.json` dependencies.

- [ ] **Step 3: Move logo and product images into public/**

```bash
mkdir -p public/images/hero public/images/bestsellery public/images/o-nas public/images/wnetrze
cp klysek.png public/logo.png
mv torty ciasta ciastka paczki desery public/images/
```

Expected: `public/logo.png` exists; `public/images/torty/`, etc. exist.

- [ ] **Step 4: Add placeholder hero images (temporary)**

Copy any 4 JPGs from existing product folders as hero placeholders until client provides actual hero photos:

```bash
cp public/images/torty/3.jpg public/images/hero/hero-1.jpg
cp public/images/ciasta/1.jpg public/images/hero/hero-2.jpg
cp public/images/ciastka/6.jpg public/images/hero/hero-3.jpg
cp public/images/desery/4.jpg public/images/hero/hero-4.jpg
```

- [ ] **Step 5: Add placeholder o-nas and wnetrze images**

```bash
cp public/images/torty/PHOTO-2026-05-22-11-18-24\ 4.jpg public/images/o-nas/1.jpg
cp public/images/torty/PHOTO-2026-05-22-11-18-24\ 5.jpg public/images/o-nas/2.jpg
cp public/images/ciasta/2.jpg public/images/o-nas/3.jpg
cp public/images/ciasta/3.jpg public/images/wnetrze/1.jpg
cp public/images/ciastka/PHOTO-2026-05-22-11-18-25\ 4.jpg public/images/wnetrze/2.jpg
cp public/images/paczki/1.jpg public/images/wnetrze/3.jpg
cp public/images/desery/5.jpg public/images/wnetrze/4.jpg
```

- [ ] **Step 6: Add placeholder bestseller images**

```bash
cp public/images/torty/3.jpg public/images/bestsellery/tort-weselny.jpg
cp public/images/ciasta/1.jpg public/images/bestsellery/sernik.jpg
cp public/images/paczki/2.jpg public/images/bestsellery/paczki.jpg
cp public/images/ciastka/6.jpg public/images/bestsellery/eclair.jpg
```

- [ ] **Step 7: Verify dev server starts**

```bash
npm run dev
```

Expected: `http://localhost:3000` shows the default Next.js page. Ctrl+C to stop.

- [ ] **Step 8: Commit**

```bash
git init
git add -A
git commit -m "feat: initialize Next.js project with asset structure"
```

---

## Task 2: Design system — Tailwind config, fonts, globals

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Replace tailwind.config.ts with full design system config**

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-jost)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'slide-ken': {
          '0%':   { opacity: '0', transform: 'scale(1.0)' },
          '5%':   { opacity: '1', transform: 'scale(1.0)' },
          '25%':  { opacity: '1', transform: 'scale(1.08)' },
          '30%':  { opacity: '0', transform: 'scale(1.08)' },
          '100%': { opacity: '0', transform: 'scale(1.08)' },
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
  plugins: [],
}

export default config
```

- [ ] **Step 2: Replace globals.css**

```css
/* src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    background-color: #faf6ef;
    color: #2c1810;
  }
}

/* Dot indicator for hero slideshow — driven by CSS animation-delay only */
@keyframes dot-active {
  0%    { background-color: #c17f4a; width: 20px; border-radius: 3px; }
  24%   { background-color: #c17f4a; width: 20px; border-radius: 3px; }
  26%   { background-color: rgba(255, 255, 255, 0.3); width: 6px; border-radius: 9999px; }
  100%  { background-color: rgba(255, 255, 255, 0.3); width: 6px; border-radius: 9999px; }
}

.dot-indicator {
  height: 6px;
  width: 6px;
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 0.3);
  animation: dot-active 20s ease-in-out infinite;
}
```

- [ ] **Step 3: Replace layout.tsx with font setup and metadata**

```typescript
// src/app/layout.tsx
import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cukiernia Klysek',
  description: 'Z miłości do dobrego smaku. Tradycyjne wypieki, autorskie torty i sezonowe desery od 1985.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
```

- [ ] **Step 4: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 5: Commit**

```bash
git add tailwind.config.ts src/app/globals.css src/app/layout.tsx
git commit -m "feat: add design system tokens, fonts, and global styles"
```

---

## Task 3: Shared UI components

**Files:**
- Create: `src/components/ui/SectionHeading.tsx`
- Create: `src/components/ui/GoldDivider.tsx`

- [ ] **Step 1: Create GoldDivider**

```typescript
// src/components/ui/GoldDivider.tsx
export default function GoldDivider() {
  return (
    <div className="w-10 h-px bg-gold my-4" />
  )
}
```

- [ ] **Step 2: Create SectionHeading**

```typescript
// src/components/ui/SectionHeading.tsx
interface SectionHeadingProps {
  eyebrow: string
  heading: string
  center?: boolean
}

export default function SectionHeading({ eyebrow, heading, center = false }: SectionHeadingProps) {
  return (
    <div className={center ? 'text-center' : ''}>
      <p className="font-sans font-light text-[10px] tracking-[4px] uppercase text-gold mb-2">
        {eyebrow}
      </p>
      <h2 className="font-serif italic text-3xl md:text-4xl text-brown-dark leading-tight">
        {heading}
      </h2>
      {center
        ? <div className="w-10 h-px bg-gold mx-auto mt-4" />
        : <div className="w-10 h-px bg-gold mt-4" />
      }
    </div>
  )
}
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/
git commit -m "feat: add SectionHeading and GoldDivider UI components"
```

---

## Task 4: Navbar

**Files:**
- Create: `src/components/Navbar.tsx`

- [ ] **Step 1: Create Navbar with scroll behavior**

```typescript
// src/components/Navbar.tsx
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Strona główna', href: '#hero' },
  { label: 'O nas', href: '#o-nas' },
  { label: 'Oferta', href: '#oferta' },
  { label: 'Wnętrze', href: '#wnetrze' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-5 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <Link href="#hero">
        <Image
          src="/logo.png"
          alt="Cukiernia Klysek"
          width={160}
          height={48}
          className={`h-11 w-auto transition-all duration-300 ${
            scrolled ? '' : 'brightness-0 invert opacity-90'
          }`}
          priority
        />
      </Link>

      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`font-sans font-light text-[11px] tracking-[2.5px] uppercase transition-colors duration-300 hover:text-gold ${
                scrolled ? 'text-brown-light hover:text-brown-dark' : 'text-white/75 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "feat: add sticky navbar with scroll-aware transparency"
```

---

## Task 5: Hero — HeroSlideshow

**Files:**
- Create: `src/components/hero/HeroSlideshow.tsx`

- [ ] **Step 1: Create HeroSlideshow — pure CSS Ken Burns, zero React state**

```typescript
// src/components/hero/HeroSlideshow.tsx
const slides = [
  '/images/hero/hero-1.jpg',
  '/images/hero/hero-2.jpg',
  '/images/hero/hero-3.jpg',
  '/images/hero/hero-4.jpg',
]

const animationClasses = [
  'animate-ken-1',
  'animate-ken-2',
  'animate-ken-3',
  'animate-ken-4',
]

export default function HeroSlideshow() {
  return (
    <div className="absolute inset-0">
      {slides.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 bg-cover bg-center ${animationClasses[i]}`}
          style={{
            backgroundImage: `url('${src}')`,
            willChange: 'transform, opacity',
          }}
        />
      ))}
    </div>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/hero/HeroSlideshow.tsx
git commit -m "feat: add HeroSlideshow with pure CSS Ken Burns animation"
```

---

## Task 6: Hero — content layer and full HeroSection assembly

**Files:**
- Create: `src/components/hero/HeroContent.tsx`
- Create: `src/components/hero/HeroDots.tsx`
- Create: `src/components/hero/HeroScrollHint.tsx`
- Create: `src/components/hero/HeroSection.tsx`

- [ ] **Step 1: Create HeroContent**

```typescript
// src/components/hero/HeroContent.tsx
import Link from 'next/link'

export default function HeroContent() {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
      <p className="font-sans font-light text-[10px] tracking-[5px] uppercase text-gold mb-4">
        Cukiernia Klysek · od 1985
      </p>

      <h1 className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-white leading-[1.15]"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}>
        Z miłości do<br />dobrego smaku
      </h1>

      <div className="w-12 h-px my-5"
           style={{ background: 'linear-gradient(to right, transparent, #c17f4a, transparent)' }} />

      <p className="font-sans font-light text-[11px] tracking-[3px] uppercase text-white/60">
        Tradycyjne wypieki · Autorskie torty · Sezonowe desery
      </p>

      <Link
        href="#oferta"
        className="mt-8 border border-gold/70 text-white font-sans font-light text-[10px] tracking-[3px] uppercase px-7 py-3 transition-colors duration-300 hover:bg-gold/20"
      >
        Poznaj naszą ofertę
      </Link>
    </div>
  )
}
```

- [ ] **Step 2: Create HeroDots**

```typescript
// src/components/hero/HeroDots.tsx
export default function HeroDots() {
  return (
    <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="dot-indicator"
          style={{ animationDelay: `${i * 5}s` }}
        />
      ))}
    </div>
  )
}
```

- [ ] **Step 3: Create HeroScrollHint**

```typescript
// src/components/hero/HeroScrollHint.tsx
export default function HeroScrollHint() {
  return (
    <div className="absolute bottom-6 right-10 z-10 hidden md:flex flex-col items-center gap-2">
      <span
        className="font-sans font-light text-[8px] tracking-[3px] uppercase text-white/40"
        style={{ writingMode: 'vertical-rl' }}
      >
        scroll
      </span>
      <div className="w-px h-9 bg-gradient-to-b from-gold to-transparent" />
    </div>
  )
}
```

- [ ] **Step 4: Create HeroSection — assembles all hero parts**

```typescript
// src/components/hero/HeroSection.tsx
import HeroSlideshow from './HeroSlideshow'
import HeroContent from './HeroContent'
import HeroDots from './HeroDots'
import HeroScrollHint from './HeroScrollHint'

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen overflow-hidden bg-brown-dark">
      <HeroSlideshow />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-[5]"
        style={{
          background: 'linear-gradient(to bottom, rgba(20,10,5,0.55) 0%, rgba(20,10,5,0.42) 50%, rgba(20,10,5,0.65) 100%)',
        }}
      />

      <HeroContent />
      <HeroDots />
      <HeroScrollHint />
    </section>
  )
}
```

- [ ] **Step 5: Wire into page.tsx for preview**

```typescript
// src/app/page.tsx
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/hero/HeroSection'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
    </main>
  )
}
```

- [ ] **Step 6: Start dev server and verify hero visually**

```bash
npm run dev
```

Open `http://localhost:3000`. Verify:
- Slideshow cycles through 4 images every 5 seconds with cross-fade
- Each image slowly zooms (Ken Burns)
- "Z miłości do dobrego smaku" text is centered and readable
- Navbar is transparent at top; scroll down → becomes cream with shadow
- Dots animate at bottom center

- [ ] **Step 7: Commit**

```bash
git add src/components/hero/ src/app/page.tsx
git commit -m "feat: complete hero section with Ken Burns slideshow and static content layer"
```

---

## Task 7: AboutIntro section

**Files:**
- Create: `src/components/sections/AboutIntro.tsx`

- [ ] **Step 1: Create AboutIntro**

```typescript
// src/components/sections/AboutIntro.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function AboutIntro() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-cream max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <SectionHeading eyebrow="Nasza historia" heading="Słodka pasja od pokoleń" />
          <p className="font-sans font-light text-sm text-brown-mid leading-relaxed mt-6">
            Cukiernia Klysek to miejsce, gdzie tradycja spotyka się z pasją do dobrego smaku.
            Od 1985 roku tworzymy wypieki z najlepszych składników, dbając o każdy detal —
            od doboru surowców po ostateczną dekorację.
          </p>
          <p className="font-sans font-light text-sm text-brown-mid leading-relaxed mt-4">
            Nasze przepisy, przekazywane z pokolenia na pokolenie, łączą sprawdzoną tradycję
            z nutą nowoczesności. Każdego dnia pieczemy z miłością, byś mógł cieszyć się
            smakiem, który zawsze pamiętasz.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-2 gap-3"
        >
          <div className="relative col-span-2 h-52 rounded-sm overflow-hidden">
            <Image src="/images/o-nas/1.jpg" alt="Cukiernia Klysek" fill className="object-cover" />
          </div>
          <div className="relative h-36 rounded-sm overflow-hidden">
            <Image src="/images/o-nas/2.jpg" alt="Nasze wypieki" fill className="object-cover" />
          </div>
          <div className="relative h-36 rounded-sm overflow-hidden">
            <Image src="/images/o-nas/3.jpg" alt="Rzemiosło cukiernicze" fill className="object-cover" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add to page.tsx**

```typescript
// src/app/page.tsx
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/hero/HeroSection'
import AboutIntro from '@/components/sections/AboutIntro'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutIntro />
    </main>
  )
}
```

- [ ] **Step 3: Verify in browser**

Check `http://localhost:3000`. Scroll past hero — AboutIntro should fade up into view with the asymmetric photo grid on the right.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/AboutIntro.tsx src/app/page.tsx
git commit -m "feat: add AboutIntro section with scroll-reveal animation"
```

---

## Task 8: Bestsellers section

**Files:**
- Create: `src/data/bestsellers.ts`
- Create: `src/components/sections/Bestsellers.tsx`

- [ ] **Step 1: Create bestsellers data**

```typescript
// src/data/bestsellers.ts
export interface Bestseller {
  id: string
  name: string
  description: string
  image: string
}

export const bestsellers: Bestseller[] = [
  {
    id: 'tort-weselny',
    name: 'Tort weselny',
    description: 'Wielopiętrowy, dekorowany ręcznie — projekt ustalany indywidualnie.',
    image: '/images/bestsellery/tort-weselny.jpg',
  },
  {
    id: 'sernik',
    name: 'Sernik wiedeński',
    description: 'Kremowy, na maślanym kruchym spodzie, pieczony w kąpieli wodnej.',
    image: '/images/bestsellery/sernik.jpg',
  },
  {
    id: 'paczki',
    name: 'Pączki krakowskie',
    description: 'Z różą i lukrem, smażone każdego ranka ze świeżego ciasta.',
    image: '/images/bestsellery/paczki.jpg',
  },
  {
    id: 'eclair',
    name: 'Éclair czekoladowy',
    description: 'Paryskie choux z kremem patissière i polewą z gorzkiej czekolady.',
    image: '/images/bestsellery/eclair.jpg',
  },
]
```

- [ ] **Step 2: Create Bestsellers component**

```typescript
// src/components/sections/Bestsellers.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { bestsellers } from '@/data/bestsellers'

export default function Bestsellers() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-cream-dark">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <SectionHeading eyebrow="Polecane przez klientów" heading="Nasze bestsellery" center />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-cream rounded-sm overflow-hidden border border-brown-border hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif italic text-lg text-brown-dark">{item.name}</h3>
                <p className="font-sans font-light text-xs text-brown-light mt-2 leading-relaxed">
                  {item.description}
                </p>
                <span className="inline-block mt-4 font-sans font-light text-[10px] tracking-[2px] uppercase text-gold border-b border-gold pb-px">
                  Zamów →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
```

- [ ] **Step 3: Add to page.tsx**

```typescript
// src/app/page.tsx
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/hero/HeroSection'
import AboutIntro from '@/components/sections/AboutIntro'
import Bestsellers from '@/components/sections/Bestsellers'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutIntro />
      <Bestsellers />
    </main>
  )
}
```

- [ ] **Step 4: Verify in browser**

Cards stagger-animate in. Hover lifts the card and slowly zooms the image.

- [ ] **Step 5: Commit**

```bash
git add src/data/bestsellers.ts src/components/sections/Bestsellers.tsx src/app/page.tsx
git commit -m "feat: add Bestsellers section with staggered scroll-reveal cards"
```

---

## Task 9: AboutUs section (alternating blocks)

**Files:**
- Create: `src/components/sections/AboutUs.tsx`

- [ ] **Step 1: Create AboutUs with alternating left/right blocks**

```typescript
// src/components/sections/AboutUs.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import GoldDivider from '@/components/ui/GoldDivider'

interface AboutBlock {
  eyebrow: string
  heading: string
  body: string
  image: string
  imageAlt: string
}

const blocks: AboutBlock[] = [
  {
    eyebrow: 'Rzemiosło',
    heading: 'Pieczemy z miłością każdego dnia',
    body: 'Każdy wypiek powstaje z najwyższej jakości składników, starannie dobranych przez naszych cukierników. Nie używamy sztucznych barwników ani konserwantów — tylko to, co najlepsze.',
    image: '/images/o-nas/1.jpg',
    imageAlt: 'Nasz cukiernik przy pracy',
  },
  {
    eyebrow: 'Tradycja',
    heading: 'Przepisy przekazywane z pokolenia na pokolenie',
    body: 'Nasze receptury mają ponad 40 lat historii. Pan A. H. Klysek założył cukiernię w 1985 roku, a dziś jego pasja żyje w każdym wypieku, który opuszcza naszą kuchnię.',
    image: '/images/o-nas/2.jpg',
    imageAlt: 'Historia cukierni Klysek',
  },
  {
    eyebrow: 'Jakość',
    heading: 'Tylko najlepsze składniki',
    body: 'Mąka, masło, jaja i śmietana pochodzą od sprawdzonych, lokalnych dostawców. Owoce sezonowe zbieramy w szczycie dojrzałości, a czekoladę importujemy bezpośrednio z Belgii.',
    image: '/images/o-nas/3.jpg',
    imageAlt: 'Składniki naszych wypieków',
  },
]

const slideVariants = {
  hiddenLeft:  { opacity: 0, x: -60 },
  hiddenRight: { opacity: 0, x: 60 },
  visible:     { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export default function AboutUs() {
  return (
    <section id="o-nas" className="py-20 md:py-28">
      {blocks.map((block, i) => {
        const isEven = i % 2 === 0
        return (
          <div
            key={block.eyebrow}
            className={`py-16 px-6 md:px-12 ${isEven ? 'bg-cream' : 'bg-cream-dark'}`}
          >
            <div className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center ${!isEven ? 'md:[direction:rtl]' : ''}`}>

              <motion.div
                variants={slideVariants}
                initial={isEven ? 'hiddenLeft' : 'hiddenRight'}
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="md:[direction:ltr]"
              >
                <div className="relative h-72 md:h-80 rounded-sm overflow-hidden">
                  <Image src={block.image} alt={block.imageAlt} fill className="object-cover" />
                </div>
              </motion.div>

              <motion.div
                variants={slideVariants}
                initial={isEven ? 'hiddenRight' : 'hiddenLeft'}
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="md:[direction:ltr]"
              >
                <p className="font-sans font-light text-[10px] tracking-[4px] uppercase text-gold mb-2">
                  {block.eyebrow}
                </p>
                <h2 className="font-serif italic text-3xl md:text-4xl text-brown-dark leading-tight">
                  {block.heading}
                </h2>
                <GoldDivider />
                <p className="font-sans font-light text-sm text-brown-mid leading-relaxed mt-2">
                  {block.body}
                </p>
              </motion.div>

            </div>
          </div>
        )
      })}
    </section>
  )
}
```

- [ ] **Step 2: Add to page.tsx**

```typescript
// src/app/page.tsx
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/hero/HeroSection'
import AboutIntro from '@/components/sections/AboutIntro'
import Bestsellers from '@/components/sections/Bestsellers'
import AboutUs from '@/components/sections/AboutUs'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutIntro />
      <Bestsellers />
      <AboutUs />
    </main>
  )
}
```

- [ ] **Step 3: Verify in browser**

Scroll to "O nas". Each block should slide in from alternating sides. Odd blocks: image left, text right. Even blocks: text left, image right.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/AboutUs.tsx src/app/page.tsx
git commit -m "feat: add AboutUs section with alternating slide-in blocks"
```

---

## Task 10: Offer section

**Files:**
- Create: `src/data/offer.ts`
- Create: `src/components/sections/Offer.tsx`

- [ ] **Step 1: Create offer data**

```typescript
// src/data/offer.ts
export interface OfferItem {
  name: string
  description: string
}

export interface OfferCategory {
  id: string
  label: string
  icon: string
  items: OfferItem[]
}

export const offerCategories: OfferCategory[] = [
  {
    id: 'torty',
    label: 'Torty',
    icon: '🎂',
    items: [
      { name: 'Tort weselny', description: 'Od 2 do 8 pięter, dowolna dekoracja' },
      { name: 'Tort urodzinowy', description: 'Projekt na zamówienie, dowolny smak' },
      { name: 'Tort artystyczny', description: 'Rzeźby z masy cukrowej, hand-painted' },
      { name: 'Tort komunijny', description: 'Elegancki, biały, z motywem religijnym' },
      { name: 'Tort firmowy', description: 'Z logo i identyfikacją wizualną firmy' },
      { name: 'Tort owocowy', description: 'Biszkopt, krem mascarpone, świeże owoce' },
    ],
  },
  {
    id: 'ciasta',
    label: 'Ciasta',
    icon: '🍰',
    items: [
      { name: 'Sernik wiedeński', description: 'Kremowy, na kruchym maślanym spodzie' },
      { name: 'Szarlotka', description: 'Z cynamonem i kruszonką, ciepła lub zimna' },
      { name: 'Makowiec', description: 'Tradycyjny, zawijany, z lukrem' },
      { name: 'Piernik staropolski', description: 'Dojrzewający 4 tygodnie w miodzie' },
      { name: 'Ciasto marchewkowe', description: 'Z kremem serowym, orzechy włoskie' },
      { name: 'Tiramisu', description: 'Klasyczne włoskie, z kawą i mascarpone' },
    ],
  },
  {
    id: 'ciastka',
    label: 'Ciastka',
    icon: '🍪',
    items: [
      { name: 'Éclair czekoladowy', description: 'Choux z kremem patissière i ganache' },
      { name: 'Kruche maślane', description: 'Rozpływające się w ustach, z dżemem' },
      { name: 'Rogaliki marcińskie', description: 'Z nadzieniem makowym, tradycja Poznania' },
      { name: 'Ciastka owsiane', description: 'Z rodzynkami i orzechami, wypiekane codziennie' },
      { name: 'Makaroniki', description: 'Francuskie, w sezonowych smakach' },
      { name: 'Rugelach', description: 'Miniaturowe rogaliki z nadzieniem orzechowym' },
    ],
  },
  {
    id: 'paczki',
    label: 'Pączki',
    icon: '🍩',
    items: [
      { name: 'Pączki z różą', description: 'Smażone rano, z konfiturą różaną i lukrem' },
      { name: 'Pączki z budyniem', description: 'Nadzienie waniliowe, polewa czekoladowa' },
      { name: 'Faworki', description: 'Chrupiące, pudrowane, tradycyjny karnawał' },
      { name: 'Oponki', description: 'Drożdżowe, z cukrem waniliowym' },
    ],
  },
  {
    id: 'desery',
    label: 'Desery',
    icon: '🍮',
    items: [
      { name: 'Panna cotta', description: 'Waniliowa z coulis z malin lub mango' },
      { name: 'Crème brûlée', description: 'Klasyczny, karmelizowany przy stole' },
      { name: 'Lody rzemieślnicze', description: 'Sezonowe smaki, tylko naturalne składniki' },
      { name: 'Parfait czekoladowe', description: 'Mrożony mus z brownie i solonym karmelem' },
      { name: 'Tarta cytrynowa', description: 'Krem lemon curd, beza włoska' },
    ],
  },
]
```

- [ ] **Step 2: Create Offer component with tabs**

```typescript
// src/components/sections/Offer.tsx
'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { offerCategories } from '@/data/offer'

export default function Offer() {
  const [activeId, setActiveId] = useState('torty')
  const activeCategory = offerCategories.find((c) => c.id === activeId)!

  return (
    <section id="oferta" className="py-20 md:py-28 px-6 md:px-12 bg-cream">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <SectionHeading eyebrow="Co oferujemy" heading="Nasza oferta" center />
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-0 border-b border-brown-border mb-8">
          {offerCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`font-sans font-light text-[11px] tracking-[2px] uppercase px-5 py-3 transition-colors duration-200 ${
                activeId === cat.id
                  ? 'text-brown-dark border-b-2 border-red-accent -mb-px'
                  : 'text-brown-light hover:text-brown-dark'
              }`}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {activeCategory.items.map((item) => (
              <div
                key={item.name}
                className="flex items-start gap-4 p-4 bg-cream-dark rounded-sm border border-brown-border"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cream flex items-center justify-center text-lg">
                  {activeCategory.icon}
                </div>
                <div>
                  <h3 className="font-serif italic text-base text-brown-dark">{item.name}</h3>
                  <p className="font-sans font-light text-[11px] text-brown-light mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
```

- [ ] **Step 3: Add to page.tsx**

```typescript
// src/app/page.tsx
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/hero/HeroSection'
import AboutIntro from '@/components/sections/AboutIntro'
import Bestsellers from '@/components/sections/Bestsellers'
import AboutUs from '@/components/sections/AboutUs'
import Offer from '@/components/sections/Offer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutIntro />
      <Bestsellers />
      <AboutUs />
      <Offer />
    </main>
  )
}
```

- [ ] **Step 4: Verify in browser**

Click each tab — content transitions smoothly with fade. All 5 categories show correct items.

- [ ] **Step 5: Commit**

```bash
git add src/data/offer.ts src/components/sections/Offer.tsx src/app/page.tsx
git commit -m "feat: add tabbed Offer section with AnimatePresence transitions"
```

---

## Task 11: Interior section

**Files:**
- Create: `src/components/sections/Interior.tsx`

- [ ] **Step 1: Create Interior with asymmetric photo grid**

```typescript
// src/components/sections/Interior.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const photos = [
  { src: '/images/wnetrze/1.jpg', alt: 'Sala główna cukierni' },
  { src: '/images/wnetrze/2.jpg', alt: 'Lada z wypiekami' },
  { src: '/images/wnetrze/3.jpg', alt: 'Stolik przy oknie' },
  { src: '/images/wnetrze/4.jpg', alt: 'Szczegół wystroju' },
]

function InteriorTile({ photo, delay }: { photo: typeof photos[0]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay }}
      className="relative rounded-sm overflow-hidden group"
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-brown-dark/0 group-hover:bg-brown-dark/30 transition-colors duration-300 flex items-center justify-center">
        <span className="font-sans font-light text-[10px] tracking-[3px] uppercase text-transparent group-hover:text-white transition-colors duration-300">
          {photo.alt}
        </span>
      </div>
    </motion.div>
  )
}

export default function Interior() {
  return (
    <section id="wnetrze" className="py-20 md:py-28 px-6 md:px-12 bg-brown-dark">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="font-sans font-light text-[10px] tracking-[4px] uppercase text-gold mb-2">
            Zapraszamy
          </p>
          <h2 className="font-serif italic text-3xl md:text-4xl text-white leading-tight">
            Nasze wnętrze
          </h2>
          <div className="w-10 h-px bg-gold mx-auto mt-4" />
        </motion.div>

        {/*
          Layout: 1 large tile left (spans 3 rows) + 3 small tiles right (stacked).
          Uses inline gridTemplateColumns/Rows so row heights are explicit — Tailwind
          arbitrary row-span on dynamic heights is unreliable.
        */}
        <div
          className="gap-3 md:gap-4"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr',
            gridTemplateRows: 'repeat(3, 160px)',
          }}
        >
          {/* Big tile — spans all 3 rows */}
          <div style={{ gridRow: '1 / 4' }} className="relative rounded-sm overflow-hidden group">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <Image
                src={photos[0].src}
                alt={photos[0].alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brown-dark/0 group-hover:bg-brown-dark/30 transition-colors duration-300 flex items-center justify-center">
                <span className="font-sans font-light text-[10px] tracking-[3px] uppercase text-transparent group-hover:text-white transition-colors duration-300">
                  {photos[0].alt}
                </span>
              </div>
            </motion.div>
          </div>

          {/* 3 small tiles */}
          {photos.slice(1).map((photo, i) => (
            <InteriorTile key={photo.src} photo={photo} delay={(i + 1) * 0.1} />
          ))}
        </div>

      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add to page.tsx**

```typescript
// src/app/page.tsx
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/hero/HeroSection'
import AboutIntro from '@/components/sections/AboutIntro'
import Bestsellers from '@/components/sections/Bestsellers'
import AboutUs from '@/components/sections/AboutUs'
import Offer from '@/components/sections/Offer'
import Interior from '@/components/sections/Interior'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutIntro />
      <Bestsellers />
      <AboutUs />
      <Offer />
      <Interior />
    </main>
  )
}
```

- [ ] **Step 3: Verify in browser**

Dark background section. Large photo on the left spans full height. 3 smaller photos on the right. Hover shows overlay with label.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/Interior.tsx src/app/page.tsx
git commit -m "feat: add Interior section with asymmetric photo grid"
```

---

## Task 12: Footer

**Files:**
- Create: `src/components/sections/Footer.tsx`

- [ ] **Step 1: Create Footer**

```typescript
// src/components/sections/Footer.tsx
import Image from 'next/image'

export default function Footer() {
  return (
    <footer id="kontakt" className="bg-brown-dark text-white/60">

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo + tagline */}
        <div>
          <Image
            src="/logo.png"
            alt="Cukiernia Klysek"
            width={140}
            height={42}
            className="h-10 w-auto brightness-0 invert opacity-90 mb-4"
          />
          <p className="font-sans font-light text-xs text-white/40 leading-relaxed italic">
            Z miłości do dobrego smaku
          </p>
        </div>

        {/* Godziny otwarcia */}
        <div>
          <h4 className="font-sans font-light text-[9px] tracking-[3px] uppercase text-gold mb-4">
            Godziny otwarcia
          </h4>
          <ul className="font-sans font-light text-xs leading-8">
            <li>Poniedziałek – Piątek: <span className="text-white/80">8:00 – 19:00</span></li>
            <li>Sobota: <span className="text-white/80">8:00 – 17:00</span></li>
            <li>Niedziela: <span className="text-white/80">9:00 – 14:00</span></li>
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h4 className="font-sans font-light text-[9px] tracking-[3px] uppercase text-gold mb-4">
            Kontakt
          </h4>
          <address className="font-sans font-light text-xs not-italic leading-8">
            <p>ul. Przykładowa 12</p>
            <p>30-001 Kraków</p>
            <p className="mt-2">
              <a href="tel:+48123456789" className="hover:text-gold transition-colors">12 345 67 89</a>
            </p>
            <p>
              <a href="mailto:kontakt@klysek.pl" className="hover:text-gold transition-colors">kontakt@klysek.pl</a>
            </p>
          </address>
        </div>

        {/* Mapa */}
        <div>
          <h4 className="font-sans font-light text-[9px] tracking-[3px] uppercase text-gold mb-4">
            Lokalizacja
          </h4>
          <div className="rounded-sm overflow-hidden h-32 bg-brown-mid/30 flex items-center justify-center">
            {/* Replace src with actual Google Maps embed URL */}
            <p className="font-sans font-light text-[10px] text-white/30 text-center px-4">
              Google Maps embed<br />(podmień src na właściwy)
            </p>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 px-6 md:px-12">
        <p className="font-sans font-light text-[10px] text-brown-light text-center tracking-[1px]">
          © {new Date().getFullYear()} Cukiernia A. H. Klysek · Wszelkie prawa zastrzeżone
        </p>
      </div>

    </footer>
  )
}
```

- [ ] **Step 2: Add to page.tsx — final assembly**

```typescript
// src/app/page.tsx
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/hero/HeroSection'
import AboutIntro from '@/components/sections/AboutIntro'
import Bestsellers from '@/components/sections/Bestsellers'
import AboutUs from '@/components/sections/AboutUs'
import Offer from '@/components/sections/Offer'
import Interior from '@/components/sections/Interior'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutIntro />
      <Bestsellers />
      <AboutUs />
      <Offer />
      <Interior />
      <Footer />
    </main>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Footer.tsx src/app/page.tsx
git commit -m "feat: add Footer with contact details and Google Maps placeholder"
```

---

## Task 13: Production build and final checks

**Files:**
- Modify: `next.config.ts` (if image domains needed)

- [ ] **Step 1: Add .gitignore entries**

Add to `.gitignore`:
```
.superpowers/
```

- [ ] **Step 2: Run production build**

```bash
npm run build
```

Expected: Build completes with no errors. Note any warnings about image sizes.

- [ ] **Step 3: Run production server and do full visual check**

```bash
npm run start
```

Open `http://localhost:3000`. Walk through every section:
- [ ] Navbar transparent → scrolled state works
- [ ] Hero slideshow cycles all 4 images with Ken Burns
- [ ] Dots animate in sync with slides
- [ ] AboutIntro fades up on scroll
- [ ] Bestsellers cards stagger in and hover correctly
- [ ] AboutUs alternates left/right with slide-in animations
- [ ] Offer tabs switch smoothly between all 5 categories
- [ ] Interior hover shows overlay labels
- [ ] Footer displays correctly on mobile and desktop

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "feat: complete Cukiernia Klysek website — all sections implemented"
```

---

## Post-launch: swap placeholder content

When client provides final assets, update:
1. `public/images/hero/hero-*.jpg` — replace with actual hero photos
2. `public/images/o-nas/*.jpg` — replace with actual "O nas" photos
3. `public/images/wnetrze/*.jpg` — replace with actual interior photos
4. `public/images/bestsellery/*.jpg` — replace with actual product photos
5. `src/components/sections/Footer.tsx` — replace address, phone, email, Google Maps `<iframe>`
6. `src/data/bestsellers.ts` — update product names and descriptions
7. `src/data/offer.ts` — adjust items per category to match actual menu
