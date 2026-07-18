import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  Cctv,
  DatabaseBackup,
  Fingerprint,
  Siren,
  Radar,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react'

const services: {
  icon: LucideIcon
  title: string
  desc: ReactNode
  tag?: string
}[] = [
  {
    icon: Cctv,
    title: 'Physische Sicherheit & IoT-Härtung',
    desc: (
      <div className="space-y-2 text-sm leading-relaxed text-slate-400">
        <p>Smarte Zutrittskontrolle und Kamerasicherheit mit starken Schutzmaßnahmen.</p>
        <ul className="list-disc space-y-1 pl-4 text-slate-400">
          <li>Integration elektronischer Türschlösser/Keycards (z. B. Ubiquiti).</li>
          <li>Netzwerk-Segmentierung (VLAN) für Kamera- und IoT-Isolation.</li>
        </ul>
      </div>
    ),
    tag: 'Top-Service',
  },
  {
    icon: DatabaseBackup,
    title: 'Ransomware-Schutz & Business Continuity',
    desc: (
      <div className="space-y-2 text-sm leading-relaxed text-slate-400">
        <p>Schutz vor Erpressung und Ausfall mit automatisierten Backup-Standards.</p>
        <ul className="list-disc space-y-1 pl-4 text-slate-400">
          <li>3-2-1-1-0 Backup-Strategie: 3 Kopien, 2 Medien, 1x Cloud, 1x offline/immutable.</li>
          <li>Quartalsweise dokumentierte Wiederherstellungstests.</li>
        </ul>
      </div>
    ),
  },
  {
    icon: Radar,
    title: 'Sicheres Gäste- und Mitarbeiter-WLAN',
    desc: (
      <div className="space-y-2 text-sm leading-relaxed text-slate-400">
        <p>Getrennte Funknetze für Rechtssicherheit und maximale Sicherheit.</p>
        <ul className="list-disc space-y-1 pl-4 text-slate-400">
          <li>Installation professioneller Access Points.</li>
          <li>Strikte Trennung zwischen internem Netz und isoliertem Gäste-WLAN.</li>
        </ul>
      </div>
    ),
  },
  {
    icon: ShieldCheck,
    title: 'Password-Management als Service',
    desc: (
      <div className="space-y-2 text-sm leading-relaxed text-slate-400">
        <p>DSGVO-konforme Passwortverwaltung für Mitarbeiter und Teams.</p>
        <ul className="list-disc space-y-1 pl-4 text-slate-400">
          <li>Zentraler Passwortmanager (z. B. Bitwarden/Vaultwarden).</li>
          <li>Lizenzmanagement sowie kurze Mitarbeiterschulung.</li>
        </ul>
      </div>
    ),
  },
  {
    icon: Fingerprint,
    title: 'Mobile Device Management (MDM)',
    desc: (
      <div className="space-y-2 text-sm leading-relaxed text-slate-400">
        <p>Verwaltung, Verschlüsselung und Schutz für Dienst- und BYOD-Geräte.</p>
        <ul className="list-disc space-y-1 pl-4 text-slate-400">
          <li>Centralisierte Verwaltung von Smartphones & Tablets.</li>
          <li>Data Loss Prevention und Remote Wipe bei Geräteverlust.</li>
        </ul>
      </div>
    ),
  },
  {
    icon: Siren,
    title: 'Managed Infrastructure & Monitoring',
    desc: (
      <div className="space-y-2 text-sm leading-relaxed text-slate-400">
        <p>Full-Service für Website, E-Mail, Server und kontinuierliche Überwachung.</p>
        <ul className="list-disc space-y-1 pl-4 text-slate-400">
          <li>Updates, Sicherheit und Verfügbarkeit für lokale und Cloud-Systeme.</li>
          <li>24/7 Monitoring von Speicher, CPU und Sicherheitsupdates.</li>
        </ul>
      </div>
    ),
  },
]

const ease = [0.22, 1, 0.36, 1] as const

export default function Services() {
  return (
    <section id="leistungen" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
      {/* Hintergrund-Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-500/[0.06] blur-[120px]" />

      <div className="relative mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-4 inline-block rounded-full border border-cyan-300/20 bg-cyan-400/5 px-3.5 py-1.5 text-xs font-semibold tracking-widest text-cyan-300"
          >
            LEISTUNGEN
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="font-display text-3xl font-bold leading-tight text-slate-50 sm:text-4xl lg:text-5xl"
          >
            Ein System.
            <br />
            <span className="text-gradient">Jede Schicht geschützt.</span>
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="max-w-md text-sm leading-relaxed text-slate-400 sm:text-base"
        >
          Kein Flickenteppich aus Einzellösungen: Alle Komponenten sprechen
          miteinander — und im Ernstfall handeln sie als eines.
        </motion.p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.12, ease }}
            className="group relative overflow-hidden rounded-2xl glass p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-300/30 hover:shadow-[0_20px_60px_-20px_rgba(34,211,238,0.25)]"
          >
            {/* Hover-Glow */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/0 blur-3xl transition-all duration-700 group-hover:bg-cyan-400/15" />

            {s.tag && (
              <span className="absolute right-5 top-5 rounded-full bg-cyan-400/10 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-cyan-300 ring-1 ring-cyan-300/25">
                {s.tag}
              </span>
            )}

            <div className="mb-5 inline-flex rounded-xl bg-gradient-to-br from-cyan-400/15 to-sky-500/5 p-3 ring-1 ring-cyan-300/20 transition-all duration-500 group-hover:ring-cyan-300/50">
              <s.icon className="h-6 w-6 text-cyan-300" strokeWidth={1.6} />
            </div>

            <h3 className="font-display mb-2.5 text-lg font-semibold text-slate-50">
              {s.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">{s.desc}</p>

            <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300/80 opacity-0 transition-all duration-500 group-hover:opacity-100">
              Mehr erfahren
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
