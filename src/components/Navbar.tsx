'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Strona główna', href: '#hero' },
  { label: 'O nas', href: '#o-nas' },
  { label: 'Oferta', href: '#oferta' },
  { label: 'Wnętrze', href: '#wnetrze' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-5 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <Link href="#hero">
        <Image
          src="/logo.png"
          alt="Cukiernia Klysek"
          width={160}
          height={48}
          className="h-11 w-auto transition-all duration-300"
          priority
        />
      </Link>

      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`font-sans font-light text-[11px] tracking-[2.5px] uppercase transition-colors duration-300 hover:text-gold ${
                scrolled ? 'text-brown-light hover:text-brown-dark' : 'text-white/75 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
