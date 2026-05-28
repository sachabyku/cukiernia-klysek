# Cukiernia A. H. Kłysek — strona internetowa

Strona marketingowa dla cukierni rodzinnej w Opolu (ul. Jagiełły 18).

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion (animacje)
- Static Site Generation (SSG) — strona jest w pełni statyczna

## Lokalne uruchomienie

```bash
npm install
npm run dev
```

Strona dostępna na `http://localhost:3000`.

## Build produkcyjny

```bash
npm run build
npm start
```

## Deployment

### Vercel (rekomendowane)

1. Wejdź na https://vercel.com/new
2. Połącz z GitHub i wybierz repozytorium
3. Vercel automatycznie wykryje Next.js — kliknij **Deploy**
4. Po pierwszym deployu wejdź w **Settings → Domains** i podłącz `cukierniaklysek.pl`

### Inny hosting (VPS / shared hosting)

```bash
npm run build
npm start
```

Wymaga Node.js 20+ na serwerze. Strona nasłuchuje na porcie 3000 (można zmienić zmienną `PORT`).

## Po deploye — checklist

- [ ] Sprawdź `https://cukierniaklysek.pl/robots.txt`
- [ ] Sprawdź `https://cukierniaklysek.pl/sitemap.xml`
- [ ] Test rich results: https://search.google.com/test/rich-results
- [ ] Test Open Graph: https://www.opengraph.xyz
- [ ] Dodaj stronę do Google Search Console: https://search.google.com/search-console
- [ ] Zweryfikuj profil Google Maps i podłącz stronę

## Edycja treści (bez CMS)

Wszystkie treści są w `src/data/`:

| Plik | Co edytuje |
|---|---|
| `src/data/bestsellers.ts` | Sekcja Bestsellery |
| `src/data/offer.ts` | Sekcja Oferta (5 kategorii) |
| `src/data/testimonials.ts` | Opinie klientów |

Sekcje statyczne (treść w kodzie komponentu):
- `src/components/hero/HeroContent.tsx` — tagline hero
- `src/components/sections/AboutIntro.tsx` — sekcja pod hero
- `src/components/sections/AboutUs.tsx` — O nas (3 bloki)
- `src/components/sections/Footer.tsx` — adres, telefon, email, godziny
- `src/app/layout.tsx` — meta tagi SEO, JSON-LD

Zdjęcia w `public/images/<sekcja>/`.

## SEO

- JSON-LD `Bakery` z pełnymi danymi firmy (layout.tsx)
- Open Graph z hero-1.jpg
- robots.txt + sitemap.xml (auto-generowane)
- Favicon z logo cukierni
- Wszystkie meta tagi w `src/app/layout.tsx`

## Kontakt techniczny

Wszelkie problemy z deployem lub edycją — kontakt z deweloperem.
