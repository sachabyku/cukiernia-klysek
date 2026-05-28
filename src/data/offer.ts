export interface OfferCategory {
  id: string
  label: string
  intro: string
  examples: string
  photos: string[]
}

export const offerCategories: OfferCategory[] = [
  {
    id: 'torty',
    label: 'Torty',
    intro:
      'Torty na zamówienie dla każdej okazji — weselne, urodzinowe, komunijne, okolicznościowe. Projekt i smak ustalamy indywidualnie podczas rozmowy w cukierni.',
    examples: 'Tort weselny · Tort urodzinowy · Tort okolicznościowy · Tort komunijny',
    photos: [
      '/images/torty/3.jpg',
      '/images/torty/PHOTO-2026-05-22-11-18-24 4.jpg',
      '/images/torty/PHOTO-2026-05-22-11-18-24 5.jpg',
      '/images/torty/PHOTO-2026-05-22-11-18-26 6.jpg',
      '/images/torty/PHOTO-2026-05-22-11-18-26 7.jpg',
      '/images/torty/PHOTO-2026-05-22-11-18-26 8.jpg',
      '/images/torty/PHOTO-2026-05-22-11-18-27 15.jpg',
      '/images/torty/PHOTO-2026-05-22-11-18-27 2.jpg',
      '/images/torty/PHOTO-2026-05-22-11-18-27 3.jpg',
      '/images/torty/PHOTO-2026-05-22-11-18-27 4.jpg',
      '/images/torty/PHOTO-2026-05-22-11-18-27 9.jpg',
      '/images/torty/PHOTO-2026-05-22-11-18-27.jpg',
    ],
  },
  {
    id: 'ciasta',
    label: 'Ciasta',
    intro:
      'Codziennie świeże ciasta z naszej cukierni w Opolu. Sprawdzone receptury, klasyka polskiej cukierni i nasze autorskie kompozycje.',
    examples:
      'Sernik Czarny · Murzynek · Jabłecznik · Kopiec Kreta · Fale Dunaju · Przysmak Wiśniowy · Karpatka · Tiramisu · Makowiec · Orzechowiec · Mazurek · Babka',
    photos: [
      '/images/ciasta/1.jpg',
      '/images/ciasta/2.jpg',
      '/images/ciasta/3.jpg',
      '/images/ciasta/PHOTO-2026-05-22-11-18-24 7.jpg',
      '/images/ciasta/PHOTO-2026-05-22-11-18-25 10.jpg',
      '/images/ciasta/PHOTO-2026-05-22-11-18-25 2.jpg',
      '/images/ciasta/PHOTO-2026-05-22-11-18-25 8.jpg',
      '/images/ciasta/PHOTO-2026-05-22-11-18-25 9.jpg',
      '/images/ciasta/PHOTO-2026-05-22-11-18-26 2.jpg',
      '/images/ciasta/PHOTO-2026-05-22-11-18-26 3.jpg',
      '/images/ciasta/PHOTO-2026-05-22-11-18-26.jpg',
      '/images/ciasta/PHOTO-2026-05-22-11-18-27 14.jpg',
      '/images/ciasta/PHOTO-2026-05-22-11-18-28.jpg',
    ],
  },
  {
    id: 'ciastka',
    label: 'Ciastka',
    intro:
      'Małe wypieki na każdą okazję — od kruchych ciasteczek po deserowe specjały. Idealne na kawę, prezent lub poczęstunek.',
    examples: 'Ptyś · Eklery · Napoleonki · Rurki z bitą śmietaną · Muffinki · Drożdżówki · Ciasteczka na wagę',
    photos: [
      '/images/ciastka/6.jpg',
      '/images/ciastka/PHOTO-2026-05-22-11-18-25 4.jpg',
      '/images/ciastka/PHOTO-2026-05-22-11-18-25 5.jpg',
      '/images/ciastka/PHOTO-2026-05-22-11-18-25 6.jpg',
      '/images/ciastka/PHOTO-2026-05-22-11-18-25 7.jpg',
      '/images/ciastka/PHOTO-2026-05-22-11-18-26 4.jpg',
      '/images/ciastka/PHOTO-2026-05-22-11-18-26 5.jpg',
      '/images/ciastka/PHOTO-2026-05-22-11-18-27 10.jpg',
      '/images/ciastka/PHOTO-2026-05-22-11-18-27 5.jpg',
    ],
  },
  {
    id: 'paczki',
    label: 'Pączki',
    intro:
      'Pączki smażone codziennie od rana. Klasyczne z lukrem, z różą i nadzieniem — w karnawale dostępne także faworki.',
    examples: 'Pączki klasyczne · Pączki z różą · Pączki z budyniem · Faworki',
    photos: [
      '/images/paczki/PHOTO-2026-05-22-11-18-24 2.jpg',
      '/images/paczki/PHOTO-2026-05-22-11-18-24 3.jpg',
      '/images/paczki/PHOTO-2026-05-22-11-18-24.jpg',
      '/images/paczki/PHOTO-2026-05-22-11-18-27 7.jpg',
    ],
  },
  {
    id: 'desery',
    label: 'Desery',
    intro:
      'Lekkie, deserowe wypieki na zakończenie spotkania — kremowe, owocowe, klasyczne i nowoczesne.',
    examples: 'Tiramisu · Sernik na zimno · Galaretka · Cappuccino · Jogurtowe z brzoskwinią',
    photos: [
      '/images/desery/4.jpg',
      '/images/desery/5.jpg',
      '/images/desery/PHOTO-2026-05-22-11-18-27 11.jpg',
      '/images/desery/PHOTO-2026-05-22-11-18-27 13.jpg',
      '/images/desery/PHOTO-2026-05-22-11-18-27 6.jpg',
    ],
  },
]
