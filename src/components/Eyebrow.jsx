/** Small gold dot + uppercase micro-label, used above each section heading. */
export default function Eyebrow({ children, className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-[7px] w-[7px] shrink-0 bg-gold" aria-hidden="true" />
      <span className="font-display text-[10px] font-semibold tracking-[3px] text-gold-light uppercase">
        {children}
      </span>
    </div>
  )
}
