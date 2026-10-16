# sinfra.io — landing page

React + Vite + Tailwind CSS v4. One page, no router, no backend.

---

## Deploy to Cloudflare Pages

### Option A — drag and drop (fastest)

`dist/` is already built and included. In the Cloudflare dashboard:

**Workers & Pages → Create → Pages → Upload assets**, then drag the **`dist`
folder** in. That's the whole deploy — the site is live on a
`*.pages.dev` URL in under a minute.

Drag the **contents** of `dist`, or the folder itself — both work. Don't drag
the project root; Cloudflare would serve the source instead of the build.

### Option B — connect a Git repo (better long-term)

Push this folder to GitHub, then **Workers & Pages → Create → Pages → Connect
to Git** and use:

| Setting | Value |
| --- | --- |
| Framework preset | Vite |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | 18 or newer |

Every push then rebuilds and redeploys automatically. Worth the extra ten
minutes once the copy starts changing often.

### Custom domain

After the first deploy: **your project → Custom domains → Set up a domain →
`sinfra.io`**. If the domain is already in your Cloudflare account the DNS
record is created for you; otherwise point the nameservers at Cloudflare first.

---

## Working on it locally

```bash
npm install
npm run dev      # http://localhost:5173, hot reload
npm run build    # writes dist/
npm run preview  # serves the built dist/ to check it before deploying
```

Node 18+.

---

## Where things are

```
src/
  content.js              ← all the words live here
  App.jsx                 ← section order, gold left bar, motion switch
  index.css               ← brand colors, fonts, keyframes, hover states
  components/
    Container.jsx         ← the page's horizontal rhythm (gutters + max width)
    Nav.jsx  Hero.jsx  Marquee.jsx
    Approach.jsx  WhoItsFor.jsx  CallToAction.jsx  Footer.jsx
    Eyebrow.jsx  Wordmark.jsx  Reveal.jsx
public/
  _headers                ← Cloudflare security + caching headers
```

**To change wording, edit `src/content.js` only.** Headline, the cycling
words, the practice-areas list, all three phases, the three audience cards,
the CTA, your email and Calendly link.

**To change colors, edit the `@theme` block at the top of `src/index.css`.**
Those variables generate the Tailwind utilities, so `--color-gold` changes
every gold on the page at once.

---

## Things worth knowing before you change them

**The cycling headline word.** `HERO.cycle` in `content.js` drives it. The
animation keyframes and the loop duration are generated from that list in
`Hero.jsx`, so adding or removing a word just works — the translate steps
recalculate. (In the mockup these were hard-coded, which is how the stack
drifted out of its mask.) Each word must fit on one line; the list is set to
`white-space: nowrap`.

**The marquee speed** is derived from the number of items, so the band keeps a
steady pace as the list grows or shrinks. `SECONDS_PER_ITEM` in `Marquee.jsx`
sets it.

**The phase rows** use a fixed 240px column for Assess / Build / Handoff with
no shrink, so all three descriptions start at the same x. That shared left
edge is what makes the three rows read as one table. If you let that column
flex, the rows drift apart by word length.

**Full-bleed vs capped width.** The hero passes `bleed` to `Container` and
runs the whole window width; the lower sections are capped at 1280px and
centred. They line up exactly at a 1440px window and separate above it. To
make the whole page full-bleed, pass `bleed` to the other sections too — or
change the default in `Container.jsx` and remove it from the hero.

**Motion.** Set `MOTION = false` in `content.js` to freeze everything.
Visitors with "reduce motion" enabled in their OS already get a still page.

**Scroll reveals** are deliberately progressive: the class that hides content
is added by JavaScript, so if a script fails the page renders visible rather
than blank.

---

## Not done yet

- **No analytics.** Cloudflare Web Analytics is free and needs one script tag.
- **No social preview image.** Add an `og:image` meta tag and a 1200×630 image
  in `public/` before this gets shared in Slack or LinkedIn.
- **No favicon.** Drop one in `public/` and link it in `index.html`.
- **The email is in plain text** and will be harvested by scrapers eventually.
  A contact form or a rotatable alias is the usual answer.
- **The Work / case studies section was removed** and is waiting on real
  projects. It was a two-up card grid on a parchment background — which also
  means the page currently has no light band to break up the navy.
