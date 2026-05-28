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
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const showSolid = scrolled || open

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-300 ${
          showSolid ? 'bg-cream/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
      >
        <Link href="#hero" onClick={() => setOpen(false)} className="relative z-50">
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

        <button
          type="button"
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative z-50 w-9 h-9 flex flex-col items-center justify-center gap-[5px]"
        >
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              showSolid ? 'bg-brown-dark' : 'bg-white'
            } ${open ? 'translate-y-[6px] rotate-45' : ''}`}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              showSolid ? 'bg-brown-dark' : 'bg-white'
            } ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              showSolid ? 'bg-brown-dark' : 'bg-white'
            } ${open ? '-translate-y-[6px] -rotate-45' : ''}`}
          />
        </button>
      </nav>

      <div
        className={`md:hidden fixed inset-0 z-40 bg-cream transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="h-full flex flex-col items-center justify-center gap-8 px-8">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              className={`transition-all duration-500 ${
                open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: open ? `${i * 60 + 120}ms` : '0ms' }}
            >
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-serif italic text-3xl text-brown-dark hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
