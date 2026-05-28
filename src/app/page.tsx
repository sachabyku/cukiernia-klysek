import Navbar from '@/components/Navbar'
import HeroSection from '@/components/hero/HeroSection'
import AboutIntro from '@/components/sections/AboutIntro'
import Bestsellers from '@/components/sections/Bestsellers'
import AboutUs from '@/components/sections/AboutUs'
import Offer from '@/components/sections/Offer'
import Testimonials from '@/components/sections/Testimonials'
import Interior from '@/components/sections/Interior'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutIntro />
      <Bestsellers />
      <AboutUs />
      <Offer />
      <Testimonials />
      <Interior />
      <Footer />
    </main>
  )
}
