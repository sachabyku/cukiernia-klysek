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
  metadataBase: new URL('https://cukierniaklysek.pl'),
  title: {
    default: 'Cukiernia A. H. Kłysek Opole — Tradycyjne wypieki od 1977',
    template: '%s | Cukiernia A. H. Kłysek Opole',
  },
  description:
    'Cukiernia A. H. Kłysek w Opolu od 1977 roku. Tradycyjne ciasta, torty na zamówienie, pączki smażone codziennie. ul. Jagiełły 18, tel. 77 469 10 64.',
  keywords: [
    'cukiernia Opole',
    'torty Opole',
    'torty na zamówienie Opole',
    'pączki Opole',
    'sernik Opole',
    'cukiernia Kłysek',
    'wypieki Opole',
    'torty weselne Opole',
    'torty okolicznościowe Opole',
  ],
  authors: [{ name: 'Cukiernia A. H. Kłysek' }],
  creator: 'Cukiernia A. H. Kłysek',
  publisher: 'Cukiernia A. H. Kłysek',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://cukierniaklysek.pl',
    siteName: 'Cukiernia A. H. Kłysek Opole',
    title: 'Cukiernia A. H. Kłysek Opole — Tradycyjne wypieki od 1977',
    description:
      'Tradycyjne ciasta, torty na zamówienie, pączki smażone codziennie. Cukiernia rodzinna w Opolu od 1977 roku.',
    images: [
      {
        url: '/images/hero/hero-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Cukiernia A. H. Kłysek Opole — wypieki',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cukiernia A. H. Kłysek Opole — Tradycyjne wypieki od 1977',
    description:
      'Tradycyjne ciasta, torty na zamówienie, pączki smażone codziennie. Rodzinna cukiernia w Opolu.',
    images: ['/images/hero/hero-1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Bakery',
  name: 'Cukiernia A. H. Kłysek',
  alternateName: 'Cukiernia Spółka Cywilna Henryk Kłysek Anita Kłysek',
  description:
    'Tradycyjna cukiernia rodzinna w Opolu od 1977 roku. Ciasta, torty na zamówienie, pączki, desery.',
  image: 'https://cukierniaklysek.pl/images/hero/hero-1.jpg',
  logo: 'https://cukierniaklysek.pl/logo.png',
  url: 'https://cukierniaklysek.pl',
  telephone: '+48774691064',
  email: 'anitakl@poczta.onet.pl',
  priceRange: '$$',
  foundingDate: '1977',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ul. Władysława Jagiełły 18',
    addressLocality: 'Opole',
    postalCode: '45-920',
    addressCountry: 'PL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 50.726930,
    longitude: 17.894528,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '08:00',
      closes: '19:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/profile.php?id=100078097097032',
    'https://www.instagram.com/cukiernia.a.h.klysek/',
  ],
  servesCuisine: 'Bakery',
  hasMenu: 'https://cukierniaklysek.pl/#oferta',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
