import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CircleDot } from 'lucide-react'

/** Erkennungs-Rahmen mit Ecken + Label */
function DetectionBox({
  className,
  label,
  confidence,
  delay = 0,
}: {
  className: string
  label: string
  confidence: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.15 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={`absolute ${className}`}
    >
      <div className="relative h-full w-full">
        {['left-0 top-0 border-l-2 border-t-2', 'right-0 top-0 border-r-2 border-t-2', 'left-0 bottom-0 border-l-2 border-b-2', 'right-0 bottom-0 border-r-2 border-b-2'].map(
          (pos) => (
            <span key={pos} className={`absolute h-3.5 w-3.5 border-cyan-300 ${pos}`} />
          )
        )}
        <div className="absolute -top-6 left-0 flex items-center gap-1.5 whitespace-nowrap rounded bg-cyan-400/90 px-1.5 py-0.5">
          <span className="text-[9px] font-bold text-slate-950">{label}</span>
          <span className="text-[9px] font-semibold text-slate-800">{confidence}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function CameraFeedMock() {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#060c18] ring-1 ring-cyan-300/10">
      {/* Nacht-Szene */}
      <svg viewBox="0 0 640 400" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="night" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0b1729" />
            <stop offset="70%" stopColor="#071120" />
            <stop offset="100%" stopColor="#050c17" />
          </linearGradient>
          <linearGradient id="lightcone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#67e8f9" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width="640" height="400" fill="url(#night)" />
        {/* Sterne */}
        {Array.from({ length: 40 }).map((_, i) => (
          <circle
            key={i}
            cx={(i * 137) % 640}
            cy={(i * 61) % 140}
            r={i % 3 === 0 ? 1.2 : 0.7}
            fill="#bfe9ff"
            opacity={0.25 + (i % 5) * 0.08}
          />
        ))}

        {/* Boden */}
        <rect x="0" y="290" width="640" height="110" fill="#0a1526" />
        <line x1="0" y1="290" x2="640" y2="290" stroke="#16294a" strokeWidth="1.5" />

        {/* Gebaeude */}
        <rect x="380" y="150" width="240" height="140" fill="#0e1c33" stroke="#1a2f4d" strokeWidth="1.5" />
        <rect x="400" y="175" width="34" height="26" fill="#122540" />
        <rect x="450" y="175" width="34" height="26" fill="#0a1424" />
        <rect x="500" y="175" width="34" height="26" fill="#122540" />
        <rect x="400" y="220" width="34" height="26" fill="#0a1424" />
        <rect x="450" y="220" width="34" height="26" fill="#122540" />
        <rect x="555" y="230" width="42" height="60" fill="#0a1424" stroke="#1a2f4d" />
        <rect x="30" y="190" width="160" height="100" fill="#0d1a2e" stroke="#16294a" />

        {/* Zaun */}
        {Array.from({ length: 14 }).map((_, i) => (
          <line key={i} x1={200 + i * 14} y1="258" x2={200 + i * 14} y2="290" stroke="#16294a" strokeWidth="2" />
        ))}
        <line x1="195" y1="262" x2="395" y2="262" stroke="#1a2f4d" strokeWidth="2" />

        {/* Lichtmast + Kegel */}
        <rect x="296" y="120" width="5" height="170" fill="#1a2f4d" />
        <circle cx="298" cy="116" r="7" fill="#67e8f9" opacity="0.75" />
        <polygon points="298,122 230,290 366,290" fill="url(#lightcone)" />

        {/* Fahrzeug */}
        <g transform="translate(70,262)">
          <rect x="0" y="10" width="86" height="24" rx="8" fill="#14263f" />
          <rect x="14" y="0" width="52" height="18" rx="6" fill="#1a2f4d" />
          <rect x="18" y="3" width="20" height="12" rx="3" fill="#0a1424" />
          <rect x="42" y="3" width="20" height="12" rx="3" fill="#0a1424" />
          <circle cx="20" cy="36" r="7" fill="#060d18" stroke="#26456e" strokeWidth="2.5" />
          <circle cx="66" cy="36" r="7" fill="#060d18" stroke="#26456e" strokeWidth="2.5" />
        </g>

        {/* Person (gehende Silhouette) */}
        <g transform="translate(318,238)">
          <circle cx="0" cy="-26" r="7" fill="#0f1e35" stroke="#26456e" strokeWidth="1.5" />
          <path d="M0,-19 L0,4 M0,-12 L-9,-2 M0,-12 L9,-4 M0,4 L-8,26 M0,4 L8,24" stroke="#0f1e35" strokeWidth="6" strokeLinecap="round" fill="none" />
          <path d="M0,-19 L0,4 M0,-12 L-9,-2 M0,-12 L9,-4 M0,4 L-8,26 M0,4 L8,24" stroke="#2c4a75" strokeWidth="2" strokeLinecap="round" fill="none" />
        </g>

        {/* Scanlines */}
        {Array.from({ length: 25 }).map((_, i) => (
          <rect key={i} x="0" y={i * 16} width="640" height="1" fill="#000" opacity="0.22" />
        ))}
      </svg>

      {/* HUD */}
      <div className="absolute left-3 top-3 rounded bg-black/55 px-2 py-1 text-[10px] font-semibold tracking-wider text-cyan-100/90">
        CAM 03 · AUSSENGELÄNDE
      </div>
      <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded bg-black/55 px-2 py-1">
        <CircleDot className="h-3 w-3 animate-pulse text-red-400" />
        <span className="text-[10px] font-semibold text-red-300">REC</span>
      </div>
      <div className="absolute bottom-3 left-3 rounded bg-black/55 px-2 py-1 text-[10px] tabular-nums text-slate-300">
        {now.toLocaleDateString('de-DE')} · {now.toLocaleTimeString('de-DE')}
      </div>
      <div className="absolute bottom-3 right-3 rounded bg-cyan-400/10 px-2 py-1 text-[10px] font-semibold text-cyan-300 ring-1 ring-cyan-300/25">
        NACHTSICHT AKTIV · 60 m
      </div>

      {/* Erkennungen */}
      <DetectionBox className="left-[46%] top-[52%] h-[22%] w-[9%]" label="PERSON" confidence="98 %" delay={0.8} />
      <DetectionBox className="left-[9%] top-[63%] h-[16%] w-[16%]" label="FAHRZEUG" confidence="96 %" delay={1.4} />

      {/* wandernder Scan-Strahl */}
      <motion.div
        animate={{ y: ['-10%', '500%'] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-cyan-300/[0.08] to-transparent"
      />
    </div>
  )
}
