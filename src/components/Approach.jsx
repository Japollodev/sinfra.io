import Container from './Container.jsx'
import Eyebrow from './Eyebrow.jsx'
import Reveal from './Reveal.jsx'
import { APPROACH } from '../content.js'

function Arrow() {
  return (
    <svg
      className="row-arrow hidden shrink-0 lg:block"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      stroke="var(--color-gold)"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M5 13h16M14 6l7 7-7 7" />
    </svg>
  )
}

export default function Approach() {
  return (
    <section id="approach" className="bg-navy py-24 lg:pt-[140px] lg:pb-[130px]">
      <Container>
        <Reveal className="mb-14 flex flex-col gap-8 lg:mb-[76px] lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div>
            <Eyebrow className="mb-7">{APPROACH.eyebrow}</Eyebrow>
            <h2
              className="m-0 font-display font-semibold text-white"
              style={{
                fontSize: 'clamp(36px, 5vw, 66px)',
                lineHeight: 1.04,
                letterSpacing: '-0.042em',
              }}
            >
              {APPROACH.heading[0]}
              <br />
              {APPROACH.heading[1]}
            </h2>
          </div>
          <p className="m-0 max-w-[380px] text-base leading-[1.8] text-body lg:mb-2.5">
            {APPROACH.intro}
          </p>
        </Reveal>

        <div className="border-t border-gold/20">
          {APPROACH.phases.map((phase) => (
            <Reveal
              key={phase.num}
              as="a"
              href="#contact"
              className="row-link flex flex-col gap-4 border-b border-gold/20 px-0 py-10 text-inherit lg:flex-row lg:items-center lg:gap-14 lg:px-8 lg:py-[52px]"
            >
              <span className="row-num w-11 shrink-0 font-display text-[15px] font-semibold tracking-[1.5px] text-gold/65">
                {phase.num}
              </span>

              {/* Fixed basis, no shrink: all three descriptions must start at
                  the same x or the rows stop reading as one table. */}
              <span
                className="font-display font-semibold text-white lg:basis-[240px] lg:shrink-0 lg:grow-0"
                style={{
                  fontSize: 'clamp(38px, 4vw, 54px)',
                  letterSpacing: '-0.04em',
                }}
              >
                {phase.name}
              </span>

              <span className="grow text-[15px] leading-[1.8] text-body sm:text-base">
                {phase.body}
              </span>

              <Arrow />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
