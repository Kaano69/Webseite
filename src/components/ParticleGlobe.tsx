import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/** Erzeugt eine weiche, runde Punkt-Textur (Glow-Dot) per Canvas */
function makeDotTexture(): THREE.Texture {
  const size = 64
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  g.addColorStop(0, 'rgba(255,255,255,1)')
  g.addColorStop(0.35, 'rgba(255,255,255,0.8)')
  g.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, size, size)
  const tex = new THREE.CanvasTexture(canvas)
  tex.needsUpdate = true
  return tex
}

/** Erzeugt einen grossen, weichen Glow-Sprite fuer den Halo hinter dem Globus */
function makeGlowTexture(): THREE.Texture {
  const size = 256
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  g.addColorStop(0, 'rgba(56,189,248,0.55)')
  g.addColorStop(0.4, 'rgba(34,211,238,0.22)')
  g.addColorStop(1, 'rgba(34,211,238,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, size, size)
  const tex = new THREE.CanvasTexture(canvas)
  tex.needsUpdate = true
  return tex
}

function randomInRange(min: number, max: number) {
  return min + Math.random() * (max - min)
}

function pickContinentalRegion() {
  const regions = [
    { latMin: 5, latMax: 72, lonMin: -170, lonMax: -50 },
    { latMin: -60, latMax: 15, lonMin: -95, lonMax: -30 },
    { latMin: 35, latMax: 72, lonMin: -20, lonMax: 40 },
    { latMin: -35, latMax: 35, lonMin: -20, lonMax: 50 },
    { latMin: 10, latMax: 60, lonMin: 35, lonMax: 95 },
    { latMin: -10, latMax: 65, lonMin: 60, lonMax: 150 },
    { latMin: -45, latMax: -10, lonMin: 110, lonMax: 155 },
    { latMin: 60, latMax: 85, lonMin: -80, lonMax: -10 },
  ]
  return regions[Math.floor(Math.random() * regions.length)]
}

export default function ParticleGlobe({ className = '' }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 100)
    camera.position.set(0, 0, 7.2)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    mount.appendChild(renderer.domElement)

    const group = new THREE.Group()
    scene.add(group)

    const dotTex = makeDotTexture()
    const glowTex = makeGlowTexture()

    // ---- Globus: Fibonacci-Kugel aus Partikeln ----
    const COUNT = 2200
    const R = 2.15
    const positions = new Float32Array(COUNT * 3)
    const colors = new Float32Array(COUNT * 3)
    const cA = new THREE.Color('#67e8f9') // cyan-300
    const cB = new THREE.Color('#38bdf8') // sky-400
    const cC = new THREE.Color('#818cf8') // indigo-400
    const golden = Math.PI * (3 - Math.sqrt(5))

    for (let i = 0; i < COUNT; i++) {
      const y = 1 - (i / (COUNT - 1)) * 2
      const radiusAtY = Math.sqrt(1 - y * y)
      const theta = golden * i
      positions[i * 3] = Math.cos(theta) * radiusAtY * R
      positions[i * 3 + 1] = y * R
      positions[i * 3 + 2] = Math.sin(theta) * radiusAtY * R

      const mix = Math.random()
      const c = mix < 0.55 ? cA : mix < 0.85 ? cB : cC
      const shade = 0.55 + Math.random() * 0.45
      colors[i * 3] = c.r * shade
      colors[i * 3 + 1] = c.g * shade
      colors[i * 3 + 2] = c.b * shade
    }

    const globeGeo = new THREE.BufferGeometry()
    globeGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    globeGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    const globeMat = new THREE.PointsMaterial({
      size: 0.045,
      map: dotTex,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    const globe = new THREE.Points(globeGeo, globeMat)
    group.add(globe)

    // ---- Kontinente auf dem Globus ----
    const landCount = 780
    const landPositions = new Float32Array(landCount * 3)
    const landColors = new Float32Array(landCount * 3)
    for (let i = 0; i < landCount; i++) {
      const region = pickContinentalRegion()
      const lat = randomInRange(region.latMin, region.latMax)
      const lon = randomInRange(region.lonMin, region.lonMax)
      const theta = ((lon + 180) / 360) * Math.PI * 2
      const phi = ((90 - lat) / 180) * Math.PI
      const x = Math.sin(phi) * Math.cos(theta) * R
      const y = Math.cos(phi) * R
      const z = Math.sin(phi) * Math.sin(theta) * R
      landPositions[i * 3] = x
      landPositions[i * 3 + 1] = y
      landPositions[i * 3 + 2] = z

      const shade = 0.6 + Math.random() * 0.3
      landColors[i * 3] = 0.56 * shade
      landColors[i * 3 + 1] = 0.82 * shade
      landColors[i * 3 + 2] = 0.96 * shade
    }
    const landGeo = new THREE.BufferGeometry()
    landGeo.setAttribute('position', new THREE.BufferAttribute(landPositions, 3))
    landGeo.setAttribute('color', new THREE.BufferAttribute(landColors, 3))
    const landMat = new THREE.PointsMaterial({
      size: 0.07,
      map: dotTex,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    const land = new THREE.Points(landGeo, landMat)
    group.add(land)

    // ---- Kern-Glow hinter dem Globus ----
    const glowMat = new THREE.SpriteMaterial({
      map: glowTex,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    const glow = new THREE.Sprite(glowMat)
    glow.scale.set(9.5, 9.5, 1)
    glow.position.z = -1.5
    group.add(glow)

    // ---- Orbit-Ringe ----
    const rings: THREE.Line[] = []
    const ringConfigs = [
      { r: 3.0, tilt: 0.5, color: '#22d3ee', opacity: 0.28 },
      { r: 3.45, tilt: -0.35, color: '#38bdf8', opacity: 0.16 },
      { r: 2.7, tilt: 1.1, color: '#818cf8', opacity: 0.14 },
    ]
    ringConfigs.forEach((cfg) => {
      const pts: THREE.Vector3[] = []
      const seg = 128
      for (let i = 0; i <= seg; i++) {
        const a = (i / seg) * Math.PI * 2
        pts.push(new THREE.Vector3(Math.cos(a) * cfg.r, 0, Math.sin(a) * cfg.r))
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts)
      const mat = new THREE.LineBasicMaterial({
        color: cfg.color,
        transparent: true,
        opacity: cfg.opacity,
        blending: THREE.AdditiveBlending,
      })
      const ring = new THREE.Line(geo, mat)
      ring.rotation.x = cfg.tilt
      ring.rotation.z = cfg.tilt * 0.6
      rings.push(ring)
      group.add(ring)
    })

    // ---- Schweif-Partikel (Atmosphaere) ----
    const DUST = 260
    const dustPos = new Float32Array(DUST * 3)
    for (let i = 0; i < DUST; i++) {
      const r = 3 + Math.random() * 3.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      dustPos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      dustPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      dustPos[i * 3 + 2] = r * Math.cos(phi)
    }
    const dustGeo = new THREE.BufferGeometry()
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3))
    const dustMat = new THREE.PointsMaterial({
      size: 0.05,
      map: dotTex,
      color: '#7dd3fc',
      transparent: true,
      opacity: 0.4,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    const dust = new THREE.Points(dustGeo, dustMat)
    group.add(dust)

    // ---- Interaktion & Animation ----
    const mouse = { x: 0, y: 0 }
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', onMouseMove)

    const clock = new THREE.Clock()
    let raf = 0
    const animate = () => {
      raf = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      globe.rotation.y = t * 0.12
      dust.rotation.y = -t * 0.03
      rings.forEach((ring, i) => {
        ring.rotation.y = t * (0.1 + i * 0.05)
      })
      glow.material.opacity = 0.7 + Math.sin(t * 1.4) * 0.12

      // sanfter Parallax-Effekt Richtung Maus
      group.rotation.y += (mouse.x * 0.35 - group.rotation.y) * 0.04
      group.rotation.x += (-mouse.y * 0.22 - group.rotation.x) * 0.04

      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      if (!mount) return
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      mount.removeChild(renderer.domElement)
      globeGeo.dispose()
      globeMat.dispose()
      landGeo.dispose()
      landMat.dispose()
      dustGeo.dispose()
      dustMat.dispose()
      glowMat.dispose()
      rings.forEach((r) => {
        r.geometry.dispose()
        ;(r.material as THREE.Material).dispose()
      })
      dotTex.dispose()
      glowTex.dispose()
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className={className} aria-hidden="true" />
}
