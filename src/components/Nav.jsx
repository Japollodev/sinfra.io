import Container from './Container.jsx'
import Wordmark from './Wordmark.jsx'
import { NAV_LINKS, HERO } from '../content.js'

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-gold/20 bg-navy/90 backdrop-blur-md">
      <Container>
        <nav className="flex h-[72px] items-center justify-between gap-8">
          <a href="#top" aria-label="sinfra.io — back to top">
            <Wordmark />
          </a>

          <div className="flex items-center gap-6 sm:gap-10">
            {/* Text links are hidden on phones; the gold button is the one
                action that always stays reachable. */}
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-l hidden font-display text-[11px] font-medium tracking-[1.8px] text-body uppercase md:inline"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="btn-g inline-flex h-11 items-center rounded px-5 font-display text-[10.5px] font-semibold tracking-[1.6px] text-navy uppercase sm:px-6"
              style={{ backgroundColor: 'var(--color-gold)' }}
            >
              {HERO.primaryCta}
            </a>
          </div>
        </nav>
      </Container>
    </header>
  )
}
