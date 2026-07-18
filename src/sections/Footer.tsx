import { ShieldCheck, MapPin, Phone, Mail } from 'lucide-react'

const cols = [
  {
    title: 'Leistungen',
    items: ['Videoüberwachung', 'Backup & Datensicherung', 'Zutrittskontrolle', 'Alarmanlagen', 'IT-Security'],
  },
  {
    title: 'Unternehmen',
    items: ['Über AEGIS', 'Karriere', 'Partnerprogramm', 'Presse'],
  },
  {
    title: 'Rechtliches',
    items: ['Impressum', 'Datenschutz', 'AGB', 'Widerruf'],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#03060c]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-300/30">
                <ShieldCheck className="h-5 w-5 text-cyan-300" strokeWidth={1.8} />
              </span>
              <span className="font-display text-lg font-bold tracking-wide text-slate-50">
                AEGIS<span className="text-cyan-300">.</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-500">
              Sicherheitstechnik aus einer Hand — Videoüberwachung, Backups,
              Zutritt und Leitstelle für Unternehmen in ganz Deutschland.
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-slate-500">
              <p className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-cyan-400/60" /> Wachsamer Weg 12, 10115 Berlin
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-cyan-400/60" /> 0800 / 123 45 67
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-cyan-400/60" /> beratung@aegis-security.de
              </p>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-display mb-4 text-sm font-semibold tracking-wide text-slate-200">
                {c.title}
              </h4>
              <ul className="space-y-2.5">
                {c.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 transition-colors duration-300 hover:text-cyan-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} AEGIS Sicherheitstechnik GmbH. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-slate-600">
            VdS-zertifiziert · DIN EN 50518 · Serverstandort Deutschland
          </p>
        </div>
      </div>
    </footer>
  )
}
