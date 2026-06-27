import { client, isSanityConfigured } from './sanity'
import { fallbackPortfolio } from '@/data/portfolio'
import { fallbackServices } from '@/data/services'
import { fallbackOpportunities } from '@/data/opportunities'
import { fallbackCommunity } from '@/data/community'
import type { PortfolioItem, Service, Opportunity, CommunityMember, SiteSettings, PortfolioCategory, OpportunityType } from '@/types'

const defaultSettings: SiteSettings = {
  whatsappNumber: '+919999999999',
  heroHeadline: 'Create.\nCollaborate.\nInspire.',
  heroSubtext: 'A creative platform where photographers, models, videographers, and editors come together to create iconic visual stories.',
  instagramUrl: 'https://instagram.com/akshaycreative',
  footerTagline: 'More than a photography studio — a creative community where ideas become collaborations, collaborations become opportunities, and opportunities become lasting careers.',
}

async function safeFetch<T>(query: string, params?: Record<string, string>): Promise<T | null> {
  if (!isSanityConfigured() || !client) return null
  try {
    if (params) {
      return await client.fetch<T>(query, params)
    }
    return await client.fetch<T>(query)
  } catch {
    return null
  }
}

export async function getAllPortfolioItems(): Promise<PortfolioItem[]> {
  const data = await safeFetch<PortfolioItem[]>(
    `*[_type == "portfolioItem"] | order(order asc) { _id, title, category, image, caption, featured, order }`
  )
  return data && data.length > 0 ? data : fallbackPortfolio
}

export async function getPortfolioByCategory(category: PortfolioCategory): Promise<PortfolioItem[]> {
  const data = await safeFetch<PortfolioItem[]>(
    `*[_type == "portfolioItem" && category == $category] | order(order asc) { _id, title, category, image, caption, featured, order }`,
    { category }
  )
  return data && data.length > 0 ? data : fallbackPortfolio.filter(p => p.category === category)
}

export async function getFeaturedPortfolio(): Promise<PortfolioItem[]> {
  const data = await safeFetch<PortfolioItem[]>(
    `*[_type == "portfolioItem" && featured == true] | order(order asc) { _id, title, category, image, caption, featured, order }`
  )
  return data && data.length > 0 ? data : fallbackPortfolio.filter(p => p.featured)
}

export async function getAllServices(): Promise<Service[]> {
  const data = await safeFetch<Service[]>(
    `*[_type == "service"] | order(order asc) { _id, name, slug, tagline, description, priceFrom, duration, includes, image, whatsappMessage, order }`
  )
  return data && data.length > 0 ? data : fallbackServices
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const data = await safeFetch<Service>(
    `*[_type == "service" && slug.current == $slug][0] { _id, name, slug, tagline, description, priceFrom, duration, includes, image, whatsappMessage, order }`,
    { slug }
  )
  return data || fallbackServices.find(s => s.slug.current === slug) || null
}

export async function getAllOpportunities(): Promise<Opportunity[]> {
  const data = await safeFetch<Opportunity[]>(
    `*[_type == "opportunity" && isActive == true] | order(deadline asc) { _id, title, type, description, rolesNeeded, compensation, location, deadline, isActive }`
  )
  return data && data.length > 0 ? data : fallbackOpportunities
}

export async function getOpportunitiesByType(type: OpportunityType): Promise<Opportunity[]> {
  const data = await safeFetch<Opportunity[]>(
    `*[_type == "opportunity" && isActive == true && type == $type] | order(deadline asc) { _id, title, type, description, rolesNeeded, compensation, location, deadline, isActive }`,
    { type }
  )
  return data && data.length > 0 ? data : fallbackOpportunities.filter(o => o.type === type)
}

export async function getAllCommunityMembers(): Promise<CommunityMember[]> {
  const data = await safeFetch<CommunityMember[]>(
    `*[_type == "communityMember"] | order(role asc, name asc) { _id, name, slug, role, bio, photo, location, tags, instagram, featured }`
  )
  return data && data.length > 0 ? data : fallbackCommunity
}

export async function getFeaturedMembers(): Promise<CommunityMember[]> {
  const data = await safeFetch<CommunityMember[]>(
    `*[_type == "communityMember" && featured == true] | order(role asc, name asc) { _id, name, slug, role, bio, photo, location, tags, instagram, featured }`
  )
  return data && data.length > 0 ? data : fallbackCommunity.filter(m => m.featured)
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const data = await safeFetch<SiteSettings>(
    `*[_type == "siteSettings"][0] { whatsappNumber, heroHeadline, heroSubtext, instagramUrl, footerTagline }`
  )
  return data || defaultSettings
}
