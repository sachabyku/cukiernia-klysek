export interface Testimonial {
  quote: string
  author: string
  context?: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Od lat przejeżdżając przez Czarnowąsy muszę zahaczyć o to miejsce. Pączki od kilkunastu lat niezmiennie pyszne! Polecam!',
    author: 'Rajmund Zborowski',
    context: 'Opinia z Google',
  },
  {
    quote:
      'Pyszne ciasta i lody, najlepsze są truskawkowe — nie jadłem takich od wielu lat. Dodatkowo można na miejscu zjeść ciasteczko i napić się pysznej kawki w rozsądnych cenach.',
    author: 'Artur Z.',
    context: 'Opinia z Google',
  },
  {
    quote:
      'Cukiernia sprawdzona od lat, nigdy się nie zawiodłam. Wybór ciast ogromny, zwłaszcza w weekend — ale trzeba się spieszyć, bo szybko znikają. Można skonsumować zakup na miejscu przy filiżance kawy, jest też kącik dla najmłodszych.',
    author: 'K. K.',
    context: 'Lokalny przewodnik Google',
  },
]

export const googleReviewsUrl =
  'https://www.google.com/maps/place/Cukiernia+A+%26+H+K%C5%82ysek+Henryk+i+Anita+K%C5%82ysek+Cukiernia/@50.7269305,17.8968238,17z/data=!4m8!3m7!1s0x471051f9bb8c83f1:0x3900ce74409a6c41!8m2!3d50.7269271!4d17.8993987!9m1!1b1!16s%2Fg%2F1tfkv0rp'
