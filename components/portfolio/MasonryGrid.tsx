'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { PortfolioItem } from '@/types'

interface MasonryGridProps {
  items: PortfolioItem[]
  onItemClick: (index: number) => void
}

export default function MasonryGrid({ items, onItemClick }: MasonryGridProps) {
  return (
    <div className="masonry-grid">
      {items.map((item, index) => (
        <motion.div
          key={item._id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="masonry-grid-item"
        >
          <button
            onClick={() => onItemClick(index)}
            className="relative w-full overflow-hidden group cursor-pointer block rounded-[4px]"
          >
            <Image
              src={typeof item.image === 'string' ? item.image : ''}
              alt={item.title}
              width={800}
              height={600}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
              <span className="font-label text-[10px] uppercase tracking-[0.15em] text-blaze mb-1">
                {item.category}
              </span>
              <p className="text-text-primary text-sm font-sans">
                {item.caption || item.title}
              </p>
            </div>
          </button>
        </motion.div>
      ))}
    </div>
  )
}
