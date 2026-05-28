// src/components/ui/SectionHeading.tsx
interface SectionHeadingProps {
  eyebrow: string
  heading: string
  center?: boolean
}

export default function SectionHeading({ eyebrow, heading, center = false }: SectionHeadingProps) {
  return (
    <div className={center ? 'text-center' : ''}>
      <p className="font-sans font-light text-[10px] tracking-[4px] uppercase text-gold mb-2">
        {eyebrow}
      </p>
      <h2 className="font-serif italic text-3xl md:text-4xl text-brown-dark leading-tight">
        {heading}
      </h2>
      {center
        ? <div className="w-10 h-px bg-gold mx-auto mt-4" />
        : <div className="w-10 h-px bg-gold mt-4" />
      }
    </div>
  )
}
