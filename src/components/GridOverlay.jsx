export default function GridOverlay({ direction = '170deg' }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: 'linear-gradient(to right, oklch(55% 0.14 285 / 0.1) 1px, transparent 1px), linear-gradient(to bottom, oklch(55% 0.14 285 / 0.1) 1px, transparent 1px)',
        backgroundSize: '44px 44px',
        WebkitMaskImage: `linear-gradient(${direction}, black 0%, rgba(0,0,0,0.4) 50%, transparent 88%)`,
        maskImage: `linear-gradient(${direction}, black 0%, rgba(0,0,0,0.4) 50%, transparent 88%)`,
      }}
    />
  )
}
