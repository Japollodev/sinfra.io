import Container from './Container.jsx'
import Eyebrow from './Eyebrow.jsx'
import { HERO, CONTACT } from '../content.js'

// Height of one line in the cycling stack, in em. Must match the
// `.kin-wrap` height and `.kin > span` height in index.css.
const LINE = 1.16

// Seconds each word holds before moving on.
const PER_WORD = 3

/**
 * Builds the @keyframes for the cycling word from the word list, so the
 * translate steps always match how many words there are. Hard-coding them
 * is how the stack drifts out of its mask when the list changes.
 */
function kinKeyframes(count) {
  const slot = 100 / count
  let steps = ''

  for (let i = 0; i < count; i++) {
    const start = i * slot
    const settle = start + slot * 0.8
    const y = (i * LINE).toFixed(2)
    steps += `  ${start.toFixed(2)}%, ${settle.toFixed(2)}% { transform: translateY(-${y}em); }\n`
  }

  // Land on the duplicated first word, then snap back invisibly.
  steps += `  100% { transform: translateY(-${(count * LINE).toFixed(2)}em); }\n`

  return `@keyframes kin {\n${steps}}`
}

export default function Hero() {
  const words = HERO.cycle
  // The first word is repeated at the end so the loop closes seamlessly.
  const stack = [...words, words[0]]

  return (
    <section
      id="top"
      className="relative py-24 lg:pt-[130px] lg:pb-[120px]"
      style={{
        backgroundImage: [
          'radial-gradient(ellipse at 4% 46%, rgb(159 141 86 / 0.13) 0%, transparent 52%)',
          'radial-gradient(ellipse at 96% 6%, rgb(46 63 92 / 0.6) 0%, transparent 50%)',
          'radial-gradient(circle, rgb(159 141 86 / 0.07) 1px, transparent 1px)',
        ].join(', '),
        backgroundSize: 'auto, auto, 20px 20px',
      }}
    >
      <style>{kinKeyframes(words.length)}</style>

      <Container bleed>
        <Eyebrow className="hero-a d1 mb-8 lg:mb-10">{HERO.eyebrow}</Eyebrow>

        {/* The headline runs the full width, inset only by the gutter. */}
        <h1
          className="m-0 font-display font-semibold text-white"
          style={{
            fontSize: 'clamp(40px, 9.2vw, 150px)',
            lineHeight: 1,
            letterSpacing: '-0.045em',
          }}
        >
          <span className="hero-a d2 block">{HERO.headline}</span>
          <span className="hero-a d3 block text-gold-light">
            <span className="kin-wrap">
              <span
                className="kin"
                style={{
                  animation: `kin ${words.length * PER_WORD}s cubic-bezier(.76,0,.24,1) infinite`,
                }}
              >
                {stack.map((word, i) => (
                  <span key={`${word}-${i}`}>{word}</span>
                ))}
              </span>
            </span>
          </span>
        </h1>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:gap-16">
          <div className="min-w-0 grow">
            <div className="rule-a my-8 h-0.5 w-[180px] bg-gold lg:mt-11 lg:mb-8" />

            <p className="hero-a d4 m-0 max-w-[620px] text-[17px] leading-[1.7] text-body sm:text-[19px]">
              {HERO.body}
            </p>

            <div className="hero-a d5 mt-10 flex flex-wrap items-center gap-4 lg:mt-12 lg:gap-5">
              <a
                href="#contact"
                className="btn-g inline-flex h-[54px] items-center rounded px-8 font-display text-[11.5px] font-semibold tracking-[1.8px] text-navy uppercase"
                style={{ backgroundColor: 'var(--color-gold)' }}
              >
                {HERO.primaryCta}
              </a>
              <a
                href="#approach"
                className="btn-o inline-flex h-[54px] items-center rounded border border-gold/30 px-7 font-display text-[11.5px] font-medium tracking-[1.8px] text-body uppercase"
              >
                {HERO.secondaryCta}
              </a>
            </div>
          </div>

          {/* Practice areas rail: a sibling column on desktop, stacked
              underneath on phones. */}
          <div className="hero-a d5 flex shrink-0 flex-col gap-5 border-gold/20 pb-3 lg:w-[200px] lg:border-l lg:pl-7">
            <div className="font-display text-[9.5px] font-semibold tracking-[2.5px] uppercase text-gold/75">
              {HERO.railLabel}
            </div>
            <ul className="m-0 list-none p-0 text-sm leading-[2.1] text-body">
              {HERO.practiceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
