export default function BowSvg({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 56 64" fill="currentColor" className={className} style={style} aria-hidden="true">
      {/* left loop */}
      <path d="M28 24 C24 14 6 8 6 18 C6 26 16 30 24 27 C26 26.5 27 25 28 24Z" />
      {/* left loop inner fold */}
      <path d="M28 24 C25 17 12 12 12 19 C12 25 18 28 23 26 C25.5 25.5 27 25 28 24Z" opacity={0.35} />
      {/* right loop */}
      <path d="M28 24 C32 14 50 8 50 18 C50 26 40 30 32 27 C30 26.5 29 25 28 24Z" />
      {/* right loop inner fold */}
      <path d="M28 24 C31 17 44 12 44 19 C44 25 38 28 33 26 C30.5 25.5 29 25 28 24Z" opacity={0.35} />
      {/* centre knot */}
      <ellipse cx="28" cy="25.5" rx="3.5" ry="4" />
      {/* left tail */}
      <path d="M25.5 30 C23 39 20 49 18 60 L21 60 C23 50 25.5 40 27.5 30Z" />
      {/* right tail — curves right with slight end curl */}
      <path d="M30.5 30 C33 39 36 50 38 58 C39 61 38.5 63 37 62 L35.5 60 C36.5 61.5 36.5 61 36 59 C34.5 51 31.5 40 28.5 30Z" />
    </svg>
  )
}
