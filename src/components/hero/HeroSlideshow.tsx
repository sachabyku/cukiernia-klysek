const slides = [
  '/images/hero/hero-1.jpg',
  '/images/hero/hero-2.jpg',
  '/images/hero/hero-3.jpg',
  '/images/hero/hero-4.jpg',
]

const animationClasses = [
  'animate-ken-1',
  'animate-ken-2',
  'animate-ken-3',
  'animate-ken-4',
]

export default function HeroSlideshow() {
  return (
    <div className="absolute inset-0">
      {slides.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 bg-cover bg-center ${animationClasses[i]}`}
          style={{
            backgroundImage: `url('${src}')`,
            willChange: 'transform, opacity',
          }}
        />
      ))}
    </div>
  )
}
