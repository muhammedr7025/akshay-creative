export type PortfolioCategory = 'Portrait' | 'Fashion' | 'Boudoir' | 'Concept' | 'Commercial' | 'Film'
export type UserRole = 'Model' | 'Photographer' | 'Videographer' | 'Editor'
export type OpportunityType = 'Theme Shoot' | 'Casting Call' | 'Urgent Hire' | 'Paid Project'

export interface PortfolioItem {
  _id: string
  title: string
  category: PortfolioCategory
  image: string | { asset: { _ref: string } }
  caption?: string
  featured: boolean
  order: number
}

export interface Service {
  _id: string
  name: string
  slug: { current: string }
  tagline: string
  description: string
  priceFrom: string
  duration: string
  includes: string[]
  image: string | { asset: { _ref: string } }
  whatsappMessage?: string
  order: number
}

export interface Opportunity {
  _id: string
  title: string
  type: OpportunityType
  description: string
  rolesNeeded: UserRole[]
  compensation?: string
  location?: string
  deadline?: string
  isActive: boolean
}

export interface CommunityMember {
  _id: string
  name: string
  slug: { current: string }
  role: UserRole
  bio: string
  photo: string | { asset: { _ref: string } }
  location: string
  tags: string[]
  instagram?: string
  featured: boolean
}

export interface SiteSettings {
  whatsappNumber: string
  heroHeadline: string
  heroSubtext: string
  instagramUrl: string
  footerTagline: string
}
