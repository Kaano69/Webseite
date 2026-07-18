import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CircleDot, CheckCircle2 } from 'lucide-react'

/** Prozedurale Kamera-Szene als SVG — 4 Varianten */
function FeedScene({ variant }: { variant: number }) {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`sky${variant}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1526" />
          <stop offset="100%" stopColor="#050b16" />
        </linearGradient>
        <linearGradient id={`cone${variant}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#67e8f9" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill={`url(#sky${variant})`} />

      {variant === 0 && (
        // Lagerhalle
        <g>
          <rect x="0" y="120" width="320" height="60" fill="#0d1a2e" />
          {[40, 110, 180, 250].map((x) => (
            <g key={x}>
              <rect x={x} y="45" width="8" height="75" fill="#14263f" />
              <rect x={x - 18} y="60" width="44" height="4" fill="#1a2f4d" />
              <rect x={x - 18} y="82" width="44" height="4" fill="#1a2f4d" />
              <rect x={x - 18} y="104" width="44" height="4" fill="#1a2f4d" />
              <rect x={x - 12} y="64" width="14" height="18" fill="#1e3557" />
              <rect x={x + 6} y="86" width="12" height="18" fill="#1e3557" />
            </g>
          ))}
          <polygon points="160,10 120,120 200,120" fill={`url(#cone${variant})`} />
          <ellipse cx="160" cy="12" rx="10" ry="4" fill="#67e8f9" opacity="0.5" />
        </g>
      )}

      {variant === 1 && (
        // Eingang
        <g>
          <rect x="0" y="130" width="320" height="50" fill="#0d1a2e" />
          <rect x="110" y="40" width="100" height="90" fill="#14263f" />
          <rect x="120" y="50" width="36" height="80" fill="#0a1424" />
          <rect x="164" y="50" width="36" height="80" fill="#0a1424" />
          <rect x="120" y="50" width="36" height="80" fill="#67e8f9" opacity="0.06" />
          <circle cx="152" cy="92" r="2" fill="#67e8f9" opacity="0.7" />
          <rect x="30" y="70" width="40" height="60" fill="#101f36" />
          <rect x="250" y="70" width="40" height="60" fill="#101f36" />
          <polygon points="50,20 20,130 80,130" fill={`url(#cone${variant})`} />
        </g>
      )}

      {variant === 2 && (
        // Parkplatz
        <g>
          <rect x="0" y="115" width="320" height="65" fill="#0c1828" />
          {[20, 90, 160, 230].map((x) => (
            <line key={x} x1={x} y1="115" x2={x + 25} y2="180" stroke="#1a2f4d" strokeWidth="2" />
          ))}
          <g transform="translate(60,88)">
            <rect x="0" y="12" width="64" height="18" rx="6" fill="#16294a" />
            <rect x="10" y="2" width="40" height="14" rx="5" fill="#1c3a05" opacity="0" />
            <rect x="10" y="2" width="40" height="14" rx="5" fill="#1c3355" />
            <circle cx="14" cy="32" r="5" fill="#0a1424" stroke="#26456e" strokeWidth="2" />
            <circle cx="50" cy="32" r="5" fill="#0a1424" stroke="#26456e" strokeWidth="2" />
          </g>
          <g transform="translate(190,95) scale(0.85)">
            <rect x="0" y="12" width="64" height="18" rx="6" fill="#132238" />
            <rect x="10" y="2" width="40" height="14" rx="5" fill="#182c49" />
            <circle cx="14" cy="32" r="5" fill="#0a1424" stroke="#26456e" strokeWidth="2" />
            <circle cx="50" cy="32" r="5" fill="#0a1424" stroke="#26456e" strokeWidth="2" />
          </g>
          <rect x="280" y="30" width="4" height="85" fill="#1a2f4d" />
          <circle cx="282" cy="28" r="6" fill="#67e8f9" opacity="0.6" />
          <polygon points="282,32 250,115 314,115" fill={`url(#cone${variant})`} />
        </g>
      )}

      {variant === 3 && (
        // Serverraum
        <g>
          <rect x="0" y="140" width="320" height="40" fill="#0c1828" />
          {[30, 110, 190, 270].map((x) => (
            <g key={x}>
              <rect x={x} y="30" width="56" height="110" rx="3" fill="#101f36" stroke="#1c3355" strokeWidth="1.5" />
              {[0, 1, 2, 3, 4, 5].map((r) => (
                <rect key={r} x={x + 6} y={40 + r * 17} width="44" height="11" rx="2" fill="#0e1c33" stroke="#1e3a5f" strokeWidth="1" />
              ))}
              {[0, 1, 2, 3, 4, 5].map((r) => (
                <circle key={r} cx={x + 12} cy={45.5 + r * 17} r="1.6" fill={r % 3 === 0 ? '#34d399' : '#22d3ee'} opacity="0.9" />
              ))}
            </g>
          ))}
        </g>
      )}

      {/* Scanlines */}
      {Array.from({ length: 12 }).map((_, i) => (
        <rect key={i} x="0" y={i * 15} width="320" height="1" fill="#000" opacity="0.25" />
      ))}
    </svg>
  )
}

const cams = [
  { label: 'CAM 01 · LAGER', variant: 0 },
  { label: 'CAM 02 · EINGANG', variant: 1 },
  { label: 'CAM 03 · PARKPLATZ', variant: 2 },
  { label: 'CAM 04 · SERVERRAUM', variant: 3 },
]

const events = [
  { time: '02:14:07', text: 'Zutritt Eingang Nord · M. Drenkert', ok: true },
  { time: '02:11:53', text: 'Backup-Prüfung abgeschlossen', ok: true },
  { time: '01:58:31', text: 'Bewegung Parkplatz · Fahrzeug erkannt', ok: true },
  { time: '01:44:12', text: 'Kamera 07 Selbsttest bestanden', ok: true },
]

function useClock() {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return now.toLocaleTimeString('de-DE')
}

export default function DashboardMock() {
  const time = useClock()

  return (
    <div className="overflow-hidden rounded-2xl bg-[#060c18] ring-1 ring-cyan-300/10">
      {/* Fensterleiste */}
      <div className="flex items-center gap-3 border-b border-white/5 bg-[#081020] px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-400/60" />
        </div>
        <span className="mx-auto rounded-md bg-white/5 px-3 py-1 text-[10px] tracking-wide text-slate-500">
          control.aegis-security.de
        </span>
        <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-300 ring-1 ring-emerald-300/25">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping-ring absolute h-full w-full rounded-full bg-emerald-400" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-300" />
          </span>
          LIVE
        </span>
      </div>

      <div className="grid gap-3 p-3 sm:grid-cols-[1.5fr_1fr]">
        {/* Kamera-Feeds */}
        <div className="grid grid-cols-2 gap-3">
          {cams.map((cam) => (
            <div key={cam.label} className="group relative overflow-hidden rounded-lg ring-1 ring-white/5">
              <FeedScene variant={cam.variant} />
              <div className="absolute bottom-2 left-2 rounded bg-black/55 px-1.5 py-0.5 text-[9px] font-semibold tracking-wider text-cyan-100/90">
                {cam.label}
              </div>
              <div className="absolute right-2 top-2 flex items-center gap-1 rounded bg-black/55 px-1.5 py-0.5">
                <CircleDot className="h-2.5 w-2.5 animate-pulse text-red-400" />
                <span className="text-[9px] font-semibold tabular-nums text-red-300">REC · {time}</span>
              </div>
              {/* Scan-Effekt */}
              <motion.div
                animate={{ y: ['-100%', '400%'] }}
                transition={{ duration: 4 + cam.variant, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-x-0 h-6 bg-gradient-to-b from-transparent via-cyan-300/10 to-transparent"
              />
            </div>
          ))}
        </div>

        {/* Status-Spalte */}
        <div className="flex flex-col gap-3">
          <div className="rounded-lg bg-white/[0.03] p-3.5 ring-1 ring-white/5">
            <p className="mb-3 text-[10px] font-semibold tracking-widest text-slate-500">SYSTEMSTATUS</p>
            {[
              { label: 'Kameras', value: '128 / 128 online' },
              { label: 'Backup', value: 'heute · 02:00 Uhr' },
              { label: 'Zutritt', value: 'scharf geschaltet' },
              { label: 'Alarmzentrale', value: 'bereit' },
            ].map((row) => (
              <div key={row.label} className="mb-2.5 flex items-center justify-between last:mb-0">
                <span className="text-[11px] text-slate-400">{row.label}</span>
                <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-300">
                  <CheckCircle2 className="h-3 w-3" />
                  {row.value}
                </span>
              </div>
            ))}
          </div>

          <div className="flex-1 rounded-lg bg-white/[0.03] p-3.5 ring-1 ring-white/5">
            <p className="mb-3 text-[10px] font-semibold tracking-widest text-slate-500">EREIGNISSE</p>
            <div className="space-y-2.5">
              {events.map((e, i) => (
                <motion.div
                  key={e.time}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.25, duration: 0.5 }}
                  className="flex items-start gap-2"
                >
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  <div>
                    <p className="text-[10px] tabular-nums text-slate-600">{e.time}</p>
                    <p className="text-[11px] leading-snug text-slate-300">{e.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
