import HeroSlideshow from './HeroSlideshow'
import HeroContent from './HeroContent'
import HeroDots from './HeroDots'

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen overflow-hidden bg-brown-dark">
      <HeroSlideshow />

      <div
        className="absolute inset-0 z-[5]"
        style={{
          background: 'linear-gradient(to bottom, rgba(20,10,5,0.55) 0%, rgba(20,10,5,0.42) 50%, rgba(20,10,5,0.65) 100%)',
        }}
      />

      <HeroContent />
      <HeroDots />
    </section>
  )
}
