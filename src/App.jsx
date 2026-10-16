import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Approach from './components/Approach.jsx'
import WhoItsFor from './components/WhoItsFor.jsx'
import CallToAction from './components/CallToAction.jsx'
import Footer from './components/Footer.jsx'
import { MOTION } from './content.js'

export default function App() {
  return (
    <div className={`relative overflow-x-hidden bg-navy ${MOTION ? '' : 'no-motion'}`}>
      {/* The brand's gold left edge, running the whole page height. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 bottom-0 left-0 z-30 w-[5px] bg-gold"
      />

      <Nav />

      <main>
        <Hero />
        <Marquee />
        <Approach />
        <WhoItsFor />
        <CallToAction />
      </main>

      <Footer />
    </div>
  )
}
