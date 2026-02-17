'use client'

import { cn } from '@/lib/utils'

export function Spotlight({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        `
        pointer-events-none absolute inset-0 opacity-0
        transition-opacity duration-300
        group-hover:opacity-100
        `,
        className
      )}
    >
      <div
        className="
        absolute inset-0
        bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35),transparent_70%)]
        blur-2xl
        "
      />
    </div>
  )
}
