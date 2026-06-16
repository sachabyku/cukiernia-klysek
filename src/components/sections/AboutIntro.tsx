'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

export default function AboutIntro() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-cream max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <SectionHeading eyebrow="Nasza historia" heading="Słodka pasja od 1977 roku" />
          <p className="font-sans font-light text-sm text-brown-mid leading-relaxed mt-6">
            Cukiernia A. H. Kłysek to rodzinne miejsce w sercu Opola, gdzie tradycja
            spotyka się z pasją do dobrego smaku. Od 1977 roku codziennie pieczemy ciasta,
            torty i pączki, z dbałością o każdy szczegół.
          </p>
          <p className="font-sans font-light text-sm text-brown-mid leading-relaxed mt-4">
            Nasze receptury sprawdzają się od ponad czterech dekad. Klienci wracają do nas
            po smaki, które pamiętają z dzieciństwa — i odkrywają nowe, które tworzymy
            z myślą o ważnych chwilach.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-2 gap-3"
        >
          <div className="relative col-span-2 h-52 rounded-sm overflow-hidden">
            <Image src="/images/intro/1562769117_kat29.jpg" alt="Cukiernia Klysek" fill className="object-cover" />
          </div>
          <div className="relative h-36 rounded-sm overflow-hidden">
            <Image src="/images/intro/2.jpg" alt="Nasze wypieki" fill className="object-cover" />
          </div>
          <div className="relative h-36 rounded-sm overflow-hidden">
            <Image src="/images/intro/20210320_104935.jpg" alt="Rzemiosło cukiernicze" fill className="object-cover" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
