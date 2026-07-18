import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function Counter({ target, suffix = '', decimals = 0 }: { target: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 4)
      setValue(target * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target])

  return (
    <span ref={ref} className="tabular-nums">
      {value.toFixed(decimals).replace('.', ',')}
      {suffix}
    </span>
  )
}

const stats = [
  { value: 850, suffix: '+', label: 'Installationen deutschlandweit' },
  { value: 99, suffix: ',98 %', label: 'Backup-Wiederherstellungsquote', decimals: 0 },
  { value: 4, suffix: ' Min.', label: 'Ø Reaktionszeit der Leitstelle' },
  { value: 18, suffix: ' Jahre', label: 'Erfahrung in Sicherheitstechnik' },
]

export default function Stats() {
  return (
    <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="glass-strong grid grid-cols-2 gap-px overflow-hidden rounded-3xl lg:grid-cols-4"
      >
        {stats.map((s, i) => (
          <div
            key={i}
            className="group relative flex flex-col items-center gap-2 px-6 py-9 text-center transition-colors duration-500 hover:bg-cyan-400/[0.04]"
          >
            <span className="font-display text-3xl font-bold text-slate-50 sm:text-4xl">
              <Counter target={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
            </span>
            <span className="text-xs leading-snug text-slate-500 sm:text-sm">{s.label}</span>
            <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300 to-transparent transition-all duration-500 group-hover:w-3/4" />
          </div>
        ))}
      </motion.div>
    </section>
  )
}
