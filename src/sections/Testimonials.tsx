import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Nach zwei Einbrüchen in unserer Nachbarschaft war klar: Wir brauchen Profis. AEGIS hat in einer Woche alles installiert — seitdem: null Vorfälle.',
    name: 'Markus Drenkert',
    role: 'GF, Drenkert Logistik GmbH',
  },
  {
    quote:
      'Als uns der Server abgeraucht ist, hatten wir dank des AEGIS-Backups nach 40 Minuten alle Daten wieder. Das war der Moment, in dem sich alles bezahlt gemacht hat.',
    name: 'Dr. Sandra Wolff',
    role: 'Zahnarztpraxis Wolff & Kollegen',
  },
  {
    quote:
      'Endlich ein Ansprechpartner für Kameras, Alarm und IT. Und die App ist so einfach, dass selbst unsere ältesten Mitarbeiter damit klarkommen.',
    name: 'Ayse Yilmaz',
    role: 'Inhaberin, Yilmaz Frischemarkt',
  },
]

const ease = [0.22, 1, 0.36, 1] as const

export default function Testimonials() {
  return (
    <section id="referenzen" className="relative overflow-hidden py-28 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[680px] -translate-x-1/2 rounded-full bg-indigo-500/[0.06] blur-[130px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-4 inline-block rounded-full border border-cyan-300/20 bg-cyan-400/5 px-3.5 py-1.5 text-xs font-semibold tracking-widest text-cyan-300"
          >
            REFERENZEN
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="font-display text-3xl font-bold leading-tight text-slate-50 sm:text-4xl lg:text-5xl"
          >
            Was Kunden sagen,
            <br />
            <span className="text-gradient">wenn nichts mehr passiert.</span>
          </motion.h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease }}
              className="relative flex flex-col justify-between rounded-3xl glass p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-300/30"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-cyan-400/15" />
              <div>
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-cyan-300 text-cyan-300" />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed text-slate-300">
                  „{t.quote}"
                </blockquote>
              </div>
              <figcaption className="mt-7 border-t border-white/5 pt-5">
                <p className="font-display text-sm font-semibold text-slate-100">{t.name}</p>
                <p className="mt-0.5 text-xs text-slate-500">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
