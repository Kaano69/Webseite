import { motion } from 'framer-motion'
import { ArrowRight, PhoneCall, Mail } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

export default function CTA() {
  return (
    <section id="kontakt" className="relative mx-auto max-w-7xl px-6 pb-28 lg:px-10 lg:pb-36">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease }}
        className="relative overflow-hidden rounded-[2.5rem] glass-strong px-6 py-20 text-center sm:px-12 lg:py-28"
      >
        {/* Glow-Orb */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/15 blur-[100px]" />
        <div className="bg-grid absolute inset-0 opacity-40" />

        <div className="relative">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="font-display mx-auto max-w-3xl text-3xl font-bold leading-tight text-slate-50 sm:text-4xl lg:text-6xl"
          >
            Der beste Zeitpunkt für Sicherheit
            <br />
            <span className="text-gradient">ist vor dem ersten Vorfall.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base"
          >
            Fordern Sie Ihre kostenlose Sicherheitsanalyse an — wir melden uns
            innerhalb von 24 Stunden mit einem Terminvorschlag.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="mailto:beratung@aegis-security.de"
              className="group inline-flex items-center gap-2.5 rounded-full bg-cyan-400 px-8 py-4 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]"
            >
              Jetzt Analyse anfordern
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+498001234567"
              className="inline-flex items-center gap-2.5 rounded-full glass px-8 py-4 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-cyan-300/40 hover:text-cyan-100"
            >
              <PhoneCall className="h-4 w-4 text-cyan-300" />
              0800 / 123 45 67
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 inline-flex items-center gap-2 text-xs text-slate-500"
          >
            <Mail className="h-3.5 w-3.5" />
            beratung@aegis-security.de · Notfall-Hotline rund um die Uhr
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
