import Container from './Container.jsx'
import Wordmark from './Wordmark.jsx'
import { FOOTER } from '../content.js'

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-navy">
      <Container>
        <div className="flex flex-col items-start gap-6 py-9 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <Wordmark size="sm" />

          <div className="flex flex-wrap items-center gap-6 sm:gap-9">
            {FOOTER.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-l font-display text-[9.5px] font-medium tracking-[1.8px] text-muted uppercase"
              >
                {link.label}
              </a>
            ))}
            <span className="font-display text-[9.5px] tracking-[1.8px] text-muted uppercase">
              {FOOTER.wordmarkSuffix}
            </span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
