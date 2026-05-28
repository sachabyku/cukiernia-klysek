export default function HeroDots() {
  return (
    <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="dot-indicator"
          style={{ animationDelay: `${i * 5}s` }}
        />
      ))}
    </div>
  )
}
