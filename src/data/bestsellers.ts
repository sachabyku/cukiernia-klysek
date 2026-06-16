export interface Bestseller {
  id: string
  name: string
  description: string
  image: string
}

export const bestsellers: Bestseller[] = [
  {
    id: 'paczki',
    name: 'Pączki',
    description: 'Smażone codziennie od rana. Puszyste i delikatne, z różą, lukrem lub klasyczne z cukrem pudrem.',
    image: '/images/bestsellery/paczki.jpg',
  },
  {
    id: 'przysmak-wisniowy',
    name: 'Przysmak Wiśniowy',
    description: 'Lekki biszkopt, śmietanowy krem i soczyste wiśnie. Jeden z najczęściej zamawianych klasyków.',
    image: '/images/bestsellery/przysmak wisniowy.jpg',
  },
  {
    id: 'ptys',
    name: 'Ptyś',
    description: 'Chrupiące ciasto parzone z bitą śmietaną. Lekki deser, który zniknie w kilka sekund.',
    image: '/images/bestsellery/ptyś.jpg',
  },
  {
    id: 'tort-okolicznosciowy',
    name: 'Tort okolicznościowy',
    description: 'Wykonany na zamówienie — projekt, smak i dekorację ustalamy podczas rozmowy w cukierni.',
    image: '/images/bestsellery/tort okolicznosciowy.jpg',
  },
]
