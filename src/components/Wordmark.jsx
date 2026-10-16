/** sinfra • io — the gold dot is the brand's one flourish. */
export default function Wordmark({ size = 'lg' }) {
  const big = size === 'lg'

  return (
    <span
      className="flex items-baseline gap-[3px] font-display font-semibold text-white"
      style={{
        fontSize: big ? 22 : 17,
        letterSpacing: big ? '-1px' : '-0.8px',
      }}
    >
      sinfra
      <span
        aria-hidden="true"
        className="inline-block rounded-full bg-gold"
        style={{ width: big ? 6 : 5, height: big ? 6 : 5 }}
      />
      <span
        className="font-normal text-muted"
        style={{ fontSize: big ? 17 : 14, letterSpacing: big ? '-0.4px' : undefined }}
      >
        io
      </span>
    </span>
  )
}
