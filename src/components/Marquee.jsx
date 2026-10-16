import { MARQUEE_ITEMS } from '../content.js'

// The band translates by -50% of its own width, i.e. exactly one copy of
// the list. Scroll speed therefore depends on how long the list is, so the
// duration is derived from the item count to keep the pace steady when
// items are added or removed.
const SECONDS_PER_ITEM = 5.5

export default function Marquee() {
  const line = MARQUEE_ITEMS.join(' · ') + ' · '
  const duration = `${(MARQUEE_ITEMS.length * SECONDS_PER_ITEM).toFixed(1)}s`

  return (
    <div
      className="overflow-hidden bg-gold py-5"
      style={{ '--mq-duration': duration }}
      aria-hidden="true"
    >
      <div className="mq">
        {/* Two identical copies: one scrolls out while the other scrolls in. */}
        {[0, 1].map((i) => (
          <span
            key={i}
            className="pr-11 font-display text-[11px] font-semibold tracking-[3.5px] whitespace-nowrap text-navy uppercase sm:text-[13px]"
          >
            {line}
          </span>
        ))}
      </div>
    </div>
  )
}
