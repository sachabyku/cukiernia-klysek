'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const photos = [
  { src: '/images/wnetrze/sala główna.jpg', alt: 'Sala główna cukierni' },
  { src: '/images/wnetrze/lada z wypiekami.jpg', alt: 'Lada z wypiekami' },
  { src: '/images/wnetrze/stolik przy oknie.jpg', alt: 'Stolik przy oknie' },
  { src: '/images/wnetrze/szczegół wystroju.jpg', alt: 'Szczegół wystroju' },
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

        <div
          className="gap-3 md:gap-4"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr',
            gridTemplateRows: 'repeat(3, 160px)',
          }}
        >
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

          {photos.slice(1).map((photo, i) => (
            <InteriorTile key={photo.src} photo={photo} delay={(i + 1) * 0.1} />
          ))}
        </div>

      </div>
    </section>
  )
}
