import { useEffect, useRef } from 'react'

/**
 * Wraps content in a scroll-triggered reveal.
 *
 * Deliberately progressive: the `reveal` class (which sets opacity: 0) is
 * added by this effect, so if JavaScript fails the content just renders
 * visible instead of staying invisible forever.
 *
 * @param {string} as - which element to render ('div', 'a', 'section'…)
 */
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.classList.add('reveal')

    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('in')
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  )
}
