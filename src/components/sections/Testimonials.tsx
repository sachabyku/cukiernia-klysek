'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { testimonials, googleReviewsUrl } from '@/data/testimonials'

export default function Testimonials() {
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
          <SectionHeading eyebrow="Co mówią klienci" heading="Opinie" center />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-cream rounded-sm border border-brown-border p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-4" aria-label="Pięć gwiazdek">
                {[0, 1, 2, 3, 4].map((s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#c17f4a">
                    <path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.787 1.401 8.168L12 18.897l-7.335 3.867 1.4-8.168L.132 9.209l8.2-1.191z"/>
                  </svg>
                ))}
              </div>

              <blockquote className="flex-grow">
                <p className="font-serif italic text-lg text-brown-dark leading-relaxed">
                  „{t.quote}&rdquo;
                </p>
              </blockquote>

              <figcaption className="mt-6 pt-4 border-t border-brown-border/60">
                <p className="font-sans font-medium text-sm text-brown-dark">{t.author}</p>
                {t.context && (
                  <p className="font-sans font-light text-[10px] tracking-[2px] uppercase text-gold mt-1">
                    {t.context}
                  </p>
                )}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-gold/70 text-brown-dark font-sans font-light text-[10px] tracking-[3px] uppercase px-7 py-3 transition-colors duration-300 hover:bg-gold/15"
          >
            Zobacz wszystkie opinie w Google →
          </a>
        </motion.div>

      </div>
    </section>
  )
}
