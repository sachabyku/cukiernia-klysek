export default function HeroScrollHint() {
  return (
    <div className="absolute bottom-6 right-10 z-10 hidden md:flex flex-col items-center gap-2">
      <span
        className="font-sans font-light text-[8px] tracking-[3px] uppercase text-white/40"
        style={{ writingMode: 'vertical-rl' }}
      >
        scroll
      </span>
      <div className="w-px h-9 bg-gradient-to-b from-gold to-transparent" />
    </div>
  )
}
