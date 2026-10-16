/**
 * The page's horizontal rhythm, in one place.
 *
 * Every section uses this, so the left edge of the headline, the phase
 * rows, the cards and the footer all line up down the page.
 *
 * `bleed` drops the 1280px cap so the content runs the full window width,
 * inset only by the gutter. The hero uses it; the lower sections don't.
 * To make the whole page full-bleed, pass bleed to all of them (or just
 * change the default here).
 */
export default function Container({ bleed = false, className = '', children }) {
  return (
    <div
      className={[
        'px-5 sm:px-8 lg:px-20',
        bleed ? 'w-full' : 'mx-auto max-w-[1280px]',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}
