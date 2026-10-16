import Container from './Container.jsx'
import Reveal from './Reveal.jsx'
import { CTA, CONTACT } from '../content.js'

export default function CallToAction() {
  return (
    <section
      id="contact"
      className="bg-navy py-28 lg:pt-[150px] lg:pb-[140px]"
      style={{
        backgroundImage:
          'radial-gradient(ellipse at 50% 100%, rgb(159 141 86 / 0.16) 0%, transparent 58%)',
      }}
    >
      <Container>
        <Reveal className="flex flex-col items-center gap-8 text-center lg:gap-9">
          <div className="font-display text-[10px] font-semibold tracking-[3px] uppercase text-gold-light">
            {CTA.eyebrow}
          </div>

          <h2
            className="m-0 max-w-[1000px] font-display font-semibold text-white"
            style={{
              fontSize: 'clamp(40px, 7vw, 96px)',
              lineHeight: 0.98,
              letterSpacing: '-0.047em',
            }}
          >
            {CTA.heading}
          </h2>

          <p className="m-0 max-w-[560px] text-[17px] leading-[1.75] text-body sm:text-lg">
            {CTA.body}
          </p>

          <a
            href={CONTACT.calendly}
            target="_blank"
            rel="noopener"
            className="btn-g mt-2 inline-flex h-[58px] items-center rounded px-10 font-display text-xs font-semibold tracking-[1.8px] text-navy uppercase"
            style={{ backgroundColor: 'var(--color-gold)' }}
          >
            {CTA.button}
          </a>

          <a
            href={`mailto:${CONTACT.email}`}
            className="font-display text-[13px] tracking-[1.2px] text-gold-light hover:text-gold-bright"
          >
            {CONTACT.email}
          </a>
        </Reveal>
      </Container>
    </section>
  )
}
