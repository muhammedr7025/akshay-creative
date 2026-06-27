'use client'

import { useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { PortfolioItem } from '@/types'

interface LightboxProps {
  items: PortfolioItem[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ items, currentIndex, isOpen, onClose, onPrev, onNext }: LightboxProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'ArrowRight') onNext()
  }, [onClose, onPrev, onNext])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen || !items[currentIndex]) return null

  const item = items[currentIndex]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-[rgba(16,1,1,0.97)] flex items-center justify-center"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-text-primary hover:text-blaze transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>

          {/* Category badge */}
          <span className="absolute top-6 left-6 font-label text-[10px] uppercase tracking-[0.15em] text-blaze bg-blaze/10 px-3 py-1.5 z-10">
            {item.category}
          </span>

          {/* Prev button */}
          <button
            onClick={(e) => { e.stopPropagation(); onPrev() }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-text-primary hover:text-blaze transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={36} />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); onNext() }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-text-primary hover:text-blaze transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight size={36} />
          </button>

          {/* Image */}
          <motion.div
            key={item._id}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={typeof item.image === 'string' ? item.image : ''}
              alt={item.title}
              width={1200}
              height={900}
              className="max-h-[80vh] w-auto object-contain"
              sizes="90vw"
            />
            {/* Caption */}
            <p className="text-text-primary text-sm mt-4 text-center max-w-lg">
              {item.caption || item.title}
            </p>
            <p className="text-text-muted text-xs font-label tracking-wider mt-1">
              {currentIndex + 1} / {items.length}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
