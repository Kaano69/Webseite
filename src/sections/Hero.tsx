import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle, Radio } from 'lucide-react'
import ParticleGlobe from '../components/ParticleGlobe'

const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Hintergrund: Grid + Vignette */}
      <div className="bg-grid mask-fade-b absolute inset-0 opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#04070f_78%)]" />

      {/* 3D-Globus */}
      <ParticleGlobe className="absolute inset-0 h-full w-full" />

      {/* Lesbarkeits-Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(4,7,15,0.55)_0%,transparent_45%,rgba(4,7,15,0.9)_100%)]" />

      <div className="pointer-events-none relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="pointer-events-auto mx-auto mb-7 inline-flex items-center gap-2.5 rounded-full glass px-4 py-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping-ring absolute inline-flex h-full w-full rounded-full bg-cyan-400" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
          </span>
          <span className="text-xs font-medium tracking-wide text-cyan-100/90">
            24/7 Leitstelle · VdS-zertifiziert · Made in Germany
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="font-display text-5xl font-bold leading-[1.04] tracking-tight text-slate-50 sm:text-6xl lg:text-7xl"
        >
          Sicherheit, die man
          <br />
          <span className="text-gradient">nicht erst spüren muss.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
        >
          AEGIS verbindet Videoüberwachung, Zutrittskontrolle und ausfallsichere
          Backups zu einem System — geplant, installiert und überwacht aus einer Hand.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.68, ease }}
          className="pointer-events-auto mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-2.5 rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_36px_rgba(34,211,238,0.5)]"
          >
            Kostenlose Sicherheitsanalyse
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#leistungen"
            className="group inline-flex items-center gap-2.5 rounded-full glass px-7 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-cyan-300/40 hover:text-cyan-100"
          >
            <PlayCircle className="h-4.5 w-4.5 text-cyan-300" />
            Leistungen entdecken
          </a>
        </motion.div>
      </div>

      {/* Scroll-Hinweis */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-slate-500">
          <Radio className="h-4 w-4 text-cyan-400/70" />
          <div className="h-10 w-px overflow-hidden bg-slate-700/60">
            <motion.div
              animate={{ y: [-40, 40] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="h-4 w-px bg-cyan-300"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
