import { motion } from 'framer-motion'
import { SearchCheck, DraftingCompass, Wrench } from 'lucide-react'

const steps = [
  {
    icon: SearchCheck,
    num: '01',
    title: 'Analyse vor Ort',
    desc: 'Wir prüfen Ihr Objekt, Ihre IT und Ihre Abläufe — kostenlos und ohne Verkaufsdruck. Am Ende kennen wir jede Schwachstelle.',
  },
  {
    icon: DraftingCompass,
    num: '02',
    title: 'Konzept & Festpreis',
    desc: 'Sie erhalten einen Schutzplan mit klaren Komponenten, klarem Preis und klarer Zeitachse. Keine versteckten Positionen.',
  },
  {
    icon: Wrench,
    num: '03',
    title: 'Installation & Wacht',
    desc: 'Zertifizierte Techniker installieren in wenigen Tagen. Danach überwacht unsere Leitstelle Ihr System — rund um die Uhr.',
  },
]

const ease = [0.22, 1, 0.36, 1] as const

export default function Process() {
  return (
    <section id="ablauf" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
      <div className="pointer-events-none absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-cyan-500/[0.05] blur-[120px]" />

      <div className="mb-16 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-4 inline-block rounded-full border border-cyan-300/20 bg-cyan-400/5 px-3.5 py-1.5 text-xs font-semibold tracking-widest text-cyan-300"
        >
          ABLAUF
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="font-display text-3xl font-bold leading-tight text-slate-50 sm:text-4xl lg:text-5xl"
        >
          In drei Schritten
          <br />
          <span className="text-gradient">zum ruhigen Schlaf.</span>
        </motion.h2>
      </div>

      <div className="relative grid gap-6 md:grid-cols-3">
        {/* Verbindungslinie */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.4, delay: 0.3, ease }}
          className="absolute left-[16%] right-[16%] top-14 hidden h-px origin-left bg-gradient-to-r from-cyan-400/0 via-cyan-300/40 to-cyan-400/0 md:block"
        />

        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15 + i * 0.15, ease }}
            className="group relative rounded-3xl glass p-8 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-300/30"
          >
            <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-sky-500/5 ring-1 ring-cyan-300/25 transition-all duration-500 group-hover:ring-cyan-300/60 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]">
              <s.icon className="h-7 w-7 text-cyan-300" strokeWidth={1.5} />
              <span className="absolute -right-2 -top-2 rounded-full bg-cyan-400 px-2 py-0.5 font-display text-[10px] font-bold text-slate-950">
                {s.num}
              </span>
            </div>
            <h3 className="font-display mb-3 text-xl font-semibold text-slate-50">{s.title}</h3>
            <p className="text-sm leading-relaxed text-slate-400">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
