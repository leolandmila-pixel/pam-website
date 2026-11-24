export default function BowSvg({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 32 38"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* left loop */}
      <path d="M16 15 C14 8 3 5 4 11 C5 16 12 17 15.5 15.5" />
      {/* right loop */}
      <path d="M16 15 C18 8 29 5 28 11 C27 16 20 17 16.5 15.5" />
      {/* left tail */}
      <path d="M15.5 17 C13 24 11 30 9 37" />
      {/* right tail with slight curl */}
      <path d="M16.5 17 C19 24 21 31 22 35 C22.5 37 22 38.5 21 38" />
    </svg>
  )
}
