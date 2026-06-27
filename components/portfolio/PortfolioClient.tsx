'use client'

import { useState, useMemo } from 'react'
import PageHero from '@/components/shared/PageHero'
import CategoryFilter from '@/components/portfolio/CategoryFilter'
import MasonryGrid from '@/components/portfolio/MasonryGrid'
import Lightbox from '@/components/portfolio/Lightbox'
import AnimatedSection from '@/components/shared/AnimatedSection'
import type { PortfolioItem, PortfolioCategory } from '@/types'

interface PortfolioClientProps {
  items: PortfolioItem[]
}

export default function PortfolioClient({ items }: PortfolioClientProps) {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory | 'All'>('All')
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return items
    return items.filter((item) => item.category === activeCategory)
  }, [items, activeCategory])

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filtered.length - 1))
  }

  const handleNext = () => {
    setLightboxIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : 0))
  }

  return (
    <>
      <PageHero
        eyebrow="THE WORK"
        title="Portfolio"
        subtitle="A curated collection of portraits, fashion editorials, concept shoots, and cinematic projects."
      />

      <section className="py-16 px-6 md:px-12 lg:px-24 bg-void">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <CategoryFilter
              active={activeCategory}
              onChange={setActiveCategory}
            />
          </AnimatedSection>

          <MasonryGrid
            items={filtered}
            onItemClick={(index) => setLightboxIndex(index)}
          />
        </div>
      </section>

      <Lightbox
        items={filtered}
        currentIndex={lightboxIndex}
        isOpen={lightboxIndex >= 0}
        onClose={() => setLightboxIndex(-1)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  )
}
