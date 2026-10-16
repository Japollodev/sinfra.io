import Container from './Container.jsx'
import Eyebrow from './Eyebrow.jsx'
import Reveal from './Reveal.jsx'
import { WHO } from '../content.js'

export default function WhoItsFor() {
  return (
    <section
      id="who"
      className="bg-navy-mid py-24 lg:py-[130px]"
      style={{
        backgroundImage: 'radial-gradient(circle, rgb(159 141 86 / 0.07) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }}
    >
      <Container>
        <Reveal className="mb-12 lg:mb-16">
          <Eyebrow className="mb-7">{WHO.eyebrow}</Eyebrow>
          <h2
            className="m-0 max-w-[820px] font-display font-semibold text-white"
            style={{
              fontSize: 'clamp(36px, 5vw, 66px)',
              lineHeight: 1.04,
              letterSpacing: '-0.042em',
            }}
          >
            {WHO.heading}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {WHO.cards.map((card) => (
            <Reveal
              key={card.label}
              className="card-lift rounded-[18px] border border-gold/20 bg-navy-card p-8 sm:p-[38px] sm:py-11"
            >
              <div className="mb-7 font-display text-[9.5px] font-semibold tracking-[2.5px] uppercase text-gold/80">
                {card.label}
              </div>
              <h3 className="mt-0 mb-4 font-display text-[24px] leading-[1.2] font-semibold tracking-[-0.03em] text-white sm:text-[27px]">
                {card.title}
              </h3>
              <p className="m-0 text-[15px] leading-[1.8] text-body">{card.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
