// ─────────────────────────────────────────────────────────────
//  All page copy lives here. Edit this file to change the site;
//  you shouldn't need to touch the components for wording changes.
// ─────────────────────────────────────────────────────────────

// Set to false to switch off all animation for everyone.
// (Visitors with "reduce motion" enabled already get a still page.)
export const MOTION = true

export const CONTACT = {
  email: 'joel@sinfra.io',
  calendly: 'https://calendly.com/sinfra/intro-call',
}

export const NAV_LINKS = [
  { label: 'Approach', href: '#approach' },
  { label: "Who it's for", href: '#who' },
]

export const HERO = {
  eyebrow: 'AI · Blockchain · Modernization',
  headline: 'Real systems for',
  // The cycling words. Add or remove freely — the animation timing and
  // the translate steps are generated from this list's length.
  cycle: ['startups', 'nonprofits', 'small business'],
  body: 'We find where your organization measurably loses time and leverage, then build the tools that take it back. Sprint-sized work, internal facing, and only if building is the right answer.',
  primaryCta: 'Start a conversation',
  secondaryCta: 'See how we work',
  railLabel: 'Practice areas',
  practiceAreas: [
    'AI integration',
    'Process automation',
    'Data cleanup',
    'Vendor evaluation',
    'Blockchain feasibility',
  ],
}

// The scrolling gold band. Built from the practice areas so the two
// can't drift out of sync.
export const MARQUEE_ITEMS = HERO.practiceAreas

export const APPROACH = {
  eyebrow: 'Approach',
  heading: ['Three phases.', 'No mystery.'],
  intro:
    "Every engagement runs the same shape, whether it's a six-week assessment or a year of build.",
  phases: [
    {
      num: '01',
      name: 'Assess',
      body: 'We map what you run today — systems, handoffs, bottlenecks, and the work people do around the software. No tooling decisions yet.',
    },
    {
      num: '02',
      name: 'Build',
      body: 'One narrow thing first, shipped to real users. AI or blockchain only where it removes work you can point at.',
    },
    {
      num: '03',
      name: 'Handoff',
      body: "Documentation, ownership, and a team that can run it without us. We're finished when you don't need the retainer. After that, we're a call away.",
    },
  ],
}

export const WHO = {
  eyebrow: "Who it's for",
  heading: 'Small teams carrying big systems.',
  cards: [
    {
      label: '01 — Startups',
      title: 'Build the thing you can defend in diligence.',
      body: 'Architecture that survives your Series A technical review, and an AI story that holds up to questions.',
    },
    {
      label: '02 — Nonprofits',
      title: 'More capacity without more headcount.',
      body: "Grant reporting, donor data, and program operations — automated where it's safe, left alone where it isn't.",
    },
    {
      label: '03 — Small business',
      title: 'Get off the spreadsheet stack.',
      body: 'Payments, records, and reporting on infrastructure that scales past the person who set it up.',
    },
  ],
}

export const CTA = {
  eyebrow: 'Next step',
  heading: "Tell us what's slow.",
  body: "A 30-minute call. We'll tell you whether this is a technology problem or an operations problem — and we'll say so if it isn't ours to solve.",
  button: 'Book a call',
}

export const FOOTER = {
  links: NAV_LINKS,
  wordmarkSuffix: 'sinfra.io',
}
