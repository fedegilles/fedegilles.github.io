'use client'

import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export function Spotlight({
  className,
  size = 220,
}: {
  className?: string
  size?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    if (ref.current) {
      ref.current.style.background = `
        radial-gradient(${size}px circle at ${x}px ${y}px,
        rgba(255,255,255,0.35),
        transparent 70%)
      `
    }
  }

  return (
    <div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMove}
      className="absolute inset-0 overflow-hidden rounded-2xl"
    >
      <div
        ref={ref}
        className={cn(
          'pointer-events-none absolute inset-0 transition-opacity duration-300',
          visible ? 'opacity-100' : 'opacity-0',
          className
        )}
      />
    </div>
  )
}
