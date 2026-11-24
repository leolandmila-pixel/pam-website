export default function BowSvg({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 56 58" fill="currentColor" className={className} style={style} aria-hidden="true">
      {/* left loop — compact, rounded */}
      <path d="M28 22 C25 15 14 10 14 17 C14 22 20 24 25 22.5 C26.5 22 27.5 22 28 22Z" />
      {/* right loop — mirror */}
      <path d="M28 22 C31 15 42 10 42 17 C42 22 36 24 31 22.5 C29.5 22 28.5 22 28 22Z" />
      {/* centre knot */}
      <ellipse cx="28" cy="22.5" rx="3" ry="3.5" />
      {/* left tail */}
      <path d="M25.5 26 C23 34 21 43 19 53 L22 53 C23.5 43 25.5 34 27.5 26Z" />
      {/* right tail — slight rightward curve */}
      <path d="M30.5 26 C33 34 36 43 37 53 L34 53 C33 43 31 34 28.5 26Z" />
    </svg>
  )
}
