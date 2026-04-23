import { useId } from 'react'

export default function GrainOverlay({ opacity = 0.25, fadeDirection = 'to bottom' }) {
  const uid = useId().replace(/:/g, '')
  const mask = `linear-gradient(${fadeDirection}, black 0%, black 40%, transparent 100%)`
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity, mixBlendMode: 'multiply', WebkitMaskImage: mask, maskImage: mask }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id={`grain-${uid}`}>
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
          numOctaves="3"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter={`url(#grain-${uid})`} />
    </svg>
  )
}
