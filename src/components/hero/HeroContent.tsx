import Link from 'next/link'

export default function HeroContent() {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
      <p className="font-sans font-light text-[10px] tracking-[5px] uppercase text-gold mb-4">
        Cukiernia Klysek · od 1985
      </p>

      <h1 className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-white leading-[1.15]"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}>
        Z miłości do<br />dobrego smaku
      </h1>

      <div className="w-12 h-px my-5"
           style={{ background: 'linear-gradient(to right, transparent, #c17f4a, transparent)' }} />

      <p className="font-sans font-light text-[11px] tracking-[3px] uppercase text-white/85">
        Tradycyjne wypieki · Torty na zamówienie · Codzienne pączki
      </p>

      <Link
        href="#oferta"
        className="mt-8 border border-gold/70 text-white font-sans font-light text-[10px] tracking-[3px] uppercase px-7 py-3 transition-colors duration-300 hover:bg-gold/20"
      >
        Poznaj naszą ofertę
      </Link>
    </div>
  )
}
