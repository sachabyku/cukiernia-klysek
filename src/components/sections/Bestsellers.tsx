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
                <a
                  href="tel:+48774691064"
                  className="inline-block mt-4 font-sans font-light text-[10px] tracking-[2px] uppercase text-gold border-b border-gold pb-px hover:text-brown-dark hover:border-brown-dark transition-colors duration-200"
                >
                  Zamów →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
