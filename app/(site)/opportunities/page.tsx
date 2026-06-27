import type { Metadata } from 'next'
import { getAllOpportunities } from '@/lib/queries'
import OpportunitiesClient from '@/components/opportunities/OpportunitiesClient'

export const metadata: Metadata = {
  title: 'Opportunities',
  description: 'Find creative opportunities — casting calls, paid projects, theme shoots, and urgent hires for models, photographers, videographers, and editors.',
}

export default async function OpportunitiesPage() {
  const opportunities = await getAllOpportunities()

  return <OpportunitiesClient opportunities={opportunities} />
}
