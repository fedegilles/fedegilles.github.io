'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <div className="flex flex-col items-start gap-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Image
              src="/avatar.jpg"
              alt="Federico Gilles"
              width={60}
              height={60}
              className="rounded-full"
              priority
            />

            <Link href="/" className="font-medium text-black dark:text-white">
            Federico Gilles
          </Link>
          </motion.div>
        </div>
        
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Product Designer
        </TextEffect>
      </div>
    </header>
  )
}
