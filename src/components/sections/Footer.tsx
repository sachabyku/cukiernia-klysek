import Image from 'next/image'

export default function Footer() {
  return (
    <footer id="kontakt" className="bg-brown-dark text-white/60">

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        <div>
          <Image
            src="/logo.png"
            alt="Cukiernia Klysek"
            width={140}
            height={42}
            className="h-10 w-auto mb-4"
          />
          <p className="font-sans font-light text-xs text-white/40 leading-relaxed italic mb-5">
            Z miłości do dobrego smaku
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=100078097097032&locale=pl_PL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white/40 hover:text-gold transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.884v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/cukiernia.a.h.klysek/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/40 hover:text-gold transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-sans font-light text-[9px] tracking-[3px] uppercase text-gold mb-4">
            Godziny otwarcia
          </h4>
          <ul className="font-sans font-light text-xs leading-8">
            <li>Pon – Nd: <span className="text-white/80">8:00 – 19:00</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans font-light text-[9px] tracking-[3px] uppercase text-gold mb-4">
            Kontakt
          </h4>
          <address className="font-sans font-light text-xs not-italic leading-8">
            <p>ul. Jagiełły 18</p>
            <p>45-920 Opole</p>
            <p className="mt-2">
              <a href="tel:+48774691064" className="hover:text-gold transition-colors">77 469 10 64</a>
            </p>
            <p>
              <a href="mailto:anitakl@poczta.onet.pl" className="hover:text-gold transition-colors">anitakl@poczta.onet.pl</a>
            </p>
          </address>
        </div>

        <div>
          <h4 className="font-sans font-light text-[9px] tracking-[3px] uppercase text-gold mb-4">
            Lokalizacja
          </h4>
          <div className="rounded-sm overflow-hidden h-32">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.6231395533036!2d17.894527793742373!3d50.72693039431705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471051f9bb8c83f1%3A0x3900ce74409a6c41!2sCukiernia%20A%20%26%20H%20K%C5%82ysek%20Henryk%20i%20Anita%20K%C5%82ysek%20Cukiernia!5e0!3m2!1spl!2spl!4v1779986729727!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>

      <div className="border-t border-white/10 py-5 px-6 md:px-12">
        <p className="font-sans font-light text-[10px] text-brown-light text-center tracking-[1px]">
          © {new Date().getFullYear()} Cukiernia A. H. Klysek · Wszelkie prawa zastrzeżone
        </p>
      </div>

    </footer>
  )
}
