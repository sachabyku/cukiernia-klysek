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
    body: 'Każdy wypiek powstaje z dbałością o szczegóły, od doboru składników po ostateczną dekorację. Pracujemy tak, jak nauczono nas lata temu, łącząc sprawdzone receptury z codziennym rzemiosłem.',
    image: '/images/o-nas/1562767738_kat01.jpg',
    imageAlt: 'Wypieki Cukierni A. H. Kłysek w Opolu',
  },
  {
    eyebrow: 'Tradycja',
    heading: 'Rodzinna cukiernia od 1977 roku',
    body: 'Anita i Henryk Kłysek prowadzą cukiernię od 1977 roku. Prawie pół wieku doświadczenia, sprawdzone receptury i pasja przekazywana w rodzinie to fundament każdego naszego wypieku.',
    image: '/images/o-nas/1562768021_kat10.jpg',
    imageAlt: 'Historia rodzinnej Cukierni Kłysek w Opolu',
  },
  {
    eyebrow: 'Smak',
    heading: 'Wypieki, które wracają do Ciebie',
    body: 'Sernik Czarny, Przysmak Wiśniowy, Ptyś, Fale Dunaju — nasi klienci wracają po smaki, które pamiętają z dzieciństwa. Każdego dnia pieczemy szeroki wybór ciast i tortów, a pączki smażymy świeże od samego rana.',
    image: '/images/o-nas/1562769068_kat27.jpg',
    imageAlt: 'Wybór ciast w Cukierni Kłysek',
  },
]

const slideVariants = {
  hiddenLeft:  { opacity: 0, x: -60 },
  hiddenRight: { opacity: 0, x: 60 },
  visible:     { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
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
