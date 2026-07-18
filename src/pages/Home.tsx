import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import Stats from '../sections/Stats'
import Services from '../sections/Services'
import Feature from '../sections/Feature'
import Process from '../sections/Process'
import Testimonials from '../sections/Testimonials'
import CTA from '../sections/CTA'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#04070f] text-slate-100">
      {/* Film-Noise-Overlay */}
      <div className="bg-noise pointer-events-none fixed inset-0 z-[60] opacity-[0.05]" />

      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Feature />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
