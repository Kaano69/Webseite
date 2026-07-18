import { motion } from 'framer-motion'
import { CheckCircle2, Activity, Lock, Eye } from 'lucide-react'
import DashboardMock from '../components/DashboardMock'
import CameraFeedMock from '../components/CameraFeedMock'

const ease = [0.22, 1, 0.36, 1] as const

const points = [
  'Alle Systeme in einer App: Kameras, Zutritt, Backup-Status',
  'Verschlüsselte Übertragung nach AES-256 — Serverstandort Deutschland',
  'DSGVO-konforme Videoaufzeichnung inklusive Löschkonzept',
  'Automatische Selbsttests melden Störungen, bevor Sie sie bemerken',
]

export default function Feature() {
  return (
    <section id="technologie" className="relative overflow-hidden py-28 lg:py-36">
      <div className="pointer-events-none absolute right-0 top-1/3 h-[480px] w-[480px] rounded-full bg-sky-500/[0.07] blur-[130px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Text-Seite */}
        <div className="relative order-2 lg:order-1">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-4 inline-block rounded-full border border-cyan-300/20 bg-cyan-400/5 px-3.5 py-1.5 text-xs font-semibold tracking-widest text-cyan-300"
          >
            TECHNOLOGIE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="font-display text-3xl font-bold leading-tight text-slate-50 sm:text-4xl lg:text-5xl"
          >
            Ihre Leitstelle
            <br />
            <span className="text-gradient">passt in Ihre Tasche.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-5 max-w-lg text-sm leading-relaxed text-slate-400 sm:text-base"
          >
            Ob Büro, Lagerhalle oder Praxis: Mit AEGIS Control sehen Sie jeden
            Kamerastream, jeden Zutritt und jeden Backup-Status in Echtzeit —
            und unsere Leitstelle wacht zusätzlich darüber.
          </motion.p>

          <ul className="mt-8 space-y-4">
            {points.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.1, ease }}
                className="flex items-start gap-3 text-sm text-slate-300"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" strokeWidth={1.8} />
                {p}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Bild-Seite */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 32 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease }}
          className="relative order-1 lg:order-2"
        >
          <div className="relative rounded-3xl glass-strong p-2.5">
            <DashboardMock />

            {/* Schwebende Status-Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="glass-strong absolute -left-4 top-8 flex items-center gap-3 rounded-2xl px-4 py-3 sm:-left-8"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/10 ring-1 ring-emerald-300/30">
                <Activity className="h-4.5 w-4.5 text-emerald-300" />
              </span>
              <div>
                <p className="text-xs font-semibold text-slate-100">Alle Systeme aktiv</p>
                <p className="text-[11px] text-slate-500">128 Sensoren online</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="glass-strong absolute -right-3 bottom-10 flex items-center gap-3 rounded-2xl px-4 py-3 sm:-right-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-300/30">
                <Lock className="h-4.5 w-4.5 text-cyan-300" />
              </span>
              <div>
                <p className="text-xs font-semibold text-slate-100">Backup abgeschlossen</p>
                <p className="text-[11px] text-slate-500">vor 12 Minuten · 2,4 TB</p>
              </div>
            </motion.div>
          </div>

          {/* Eck-Deko */}
          <div className="pointer-events-none absolute -bottom-6 -left-6 -z-10 h-40 w-40 rounded-full bg-cyan-500/20 blur-[80px]" />
          <div className="pointer-events-none absolute -right-8 -top-8 -z-10 h-40 w-40 rounded-full bg-indigo-500/15 blur-[80px]" />
        </motion.div>
      </div>

      {/* Zweiter Feature-Block: Kamera */}
      <div className="mx-auto mt-24 grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 32 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease }}
          className="relative"
        >
          <div className="relative rounded-3xl glass-strong p-2.5">
            <CameraFeedMock />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="glass-strong absolute -right-3 top-8 flex items-center gap-3 rounded-2xl px-4 py-3 sm:-right-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-300/30">
                <Eye className="h-4.5 w-4.5 text-cyan-300" />
              </span>
              <div>
                <p className="text-xs font-semibold text-slate-100">KI-Personenerkennung</p>
                <p className="text-[11px] text-slate-500">Fehlalarme −92 %</p>
              </div>
            </motion.div>
          </div>
          <div className="pointer-events-none absolute -left-8 -top-8 -z-10 h-40 w-40 rounded-full bg-cyan-500/15 blur-[80px]" />
        </motion.div>

        <div className="relative">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-4 inline-block rounded-full border border-cyan-300/20 bg-cyan-400/5 px-3.5 py-1.5 text-xs font-semibold tracking-widest text-cyan-300"
          >
            HARDWARE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="font-display text-3xl font-bold leading-tight text-slate-50 sm:text-4xl lg:text-5xl"
          >
            Kameras, die nachts
            <br />
            <span className="text-gradient">besser sehen als Sie.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-5 max-w-lg text-sm leading-relaxed text-slate-400 sm:text-base"
          >
            Unsere 4K-Systeme erkennen Personen, Fahrzeuge und Kennzeichen —
            und unterscheiden zuverlässig zwischen Einbrecher, Lieferant und
            Katze. So bleibt Ihr Postfach frei von Fehlalarmen.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="mt-8 grid grid-cols-3 gap-4"
          >
            {[
              { v: '4K', l: 'Auflösung' },
              { v: '60 m', l: 'Nachtsicht' },
              { v: '−40 °C', l: 'Einsatzbereit' },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl glass px-4 py-4 text-center">
                <p className="font-display text-xl font-bold text-cyan-200">{s.v}</p>
                <p className="mt-1 text-[11px] text-slate-500">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
