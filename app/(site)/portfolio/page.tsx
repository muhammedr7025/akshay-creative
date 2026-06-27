import type { Metadata } from 'next'
import { getAllPortfolioItems } from '@/lib/queries'
import PortfolioClient from '@/components/portfolio/PortfolioClient'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore our curated portfolio of portrait, fashion, boudoir, concept, commercial photography, and creative films.',
}

export default async function PortfolioPage() {
  const items = await getAllPortfolioItems()

  return <PortfolioClient items={items} />
}
