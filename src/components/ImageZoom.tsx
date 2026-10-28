import { useCallback, useRef, useState } from 'react'
import { ZoomIn, ZoomOut } from 'lucide-react'

interface ImageZoomProps {
  src: string
  alt: string
}

export default function ImageZoom({ src, alt }: ImageZoomProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [zooming, setZooming] = useState(false)
  const [origin, setOrigin] = useState({ x: 50, y: 50 })

  const updateOrigin = useCallback((clientX: number, clientY: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((clientX - rect.left) / rect.width) * 100
    const y = ((clientY - rect.top) / rect.height) * 100
    setOrigin({
      x: Math.min(100, Math.max(0, x)),
      y: Math.min(100, Math.max(0, y)),
    })
  }, [])

  return (
    <div className="relative w-full">
      <div
        ref={containerRef}
        className={`zoom-container relative flex w-full items-center justify-center overflow-hidden bg-surface ${zooming ? 'is-zooming' : ''}`}
        onClick={() => setZooming((z) => !z)}
        onMouseMove={(e) => {
          if (zooming) updateOrigin(e.clientX, e.clientY)
        }}
        onMouseLeave={() => setZooming(false)}
        role="button"
        tabIndex={0}
        aria-label={zooming ? 'Zoom out' : 'Zoom in on image'}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setZooming((z) => !z)
          }
        }}
      >
        <img
          src={src}
          alt={alt}
          className="max-h-[70vh] w-full object-contain transition-transform duration-300 ease-out select-none"
          style={
            zooming
              ? {
                  transform: 'scale(1.85)',
                  transformOrigin: `${origin.x}% ${origin.y}%`,
                }
              : { transform: 'scale(1)', transformOrigin: '50% 50%' }
          }
          draggable={false}
        />
      </div>
      <span className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1.5 bg-secondary/80 px-2.5 py-1.5 text-[11px] uppercase tracking-[0.12em] text-primary backdrop-blur-sm">
        {zooming ? (
          <>
            <ZoomOut className="h-3.5 w-3.5" /> Move to explore
          </>
        ) : (
          <>
            <ZoomIn className="h-3.5 w-3.5" /> Click to zoom
          </>
        )}
      </span>
    </div>
  )
}
