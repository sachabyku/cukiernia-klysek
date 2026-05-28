'use client'

import { useState } from 'react'
import Image from 'next/image'
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
              {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <div className="max-w-3xl mx-auto text-center mb-8">
              <p className="font-sans font-light text-sm text-brown-mid leading-relaxed">
                {activeCategory.intro}
              </p>
              <p className="font-sans font-light text-[11px] tracking-[1.5px] text-gold mt-3">
                {activeCategory.examples}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {activeCategory.photos.map((src, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="relative aspect-square rounded-sm overflow-hidden group"
                >
                  <Image
                    src={encodeURI(src)}
                    alt={`${activeCategory.label} — Cukiernia A. H. Kłysek Opole`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-brown-dark/0 group-hover:bg-brown-dark/20 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
