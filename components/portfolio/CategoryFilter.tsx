'use client'

import { cn } from '@/lib/utils'
import type { PortfolioCategory } from '@/types'

const categories: (PortfolioCategory | 'All')[] = [
  'All', 'Portrait', 'Fashion', 'Boudoir', 'Concept', 'Commercial', 'Film'
]

interface CategoryFilterProps {
  active: PortfolioCategory | 'All'
  onChange: (category: PortfolioCategory | 'All') => void
}

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-12">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={cn(
            'font-label text-[11px] uppercase tracking-[0.15em] px-5 py-2.5 transition-all duration-300 rounded-none',
            active === cat
              ? 'bg-blaze text-void'
              : 'bg-transparent border border-blaze/50 text-blaze hover:bg-blaze hover:text-void'
          )}
        >
          {cat === 'All' ? 'All' : cat}
        </button>
      ))}
    </div>
  )
}
