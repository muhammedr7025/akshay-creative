import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

const configured = !!projectId && projectId !== 'your_project_id' && projectId !== ''

export const client = configured
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: true,
    })
  : null

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const builder = configured && client ? imageUrlBuilder(client as any) : null

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  if (!builder) {
    throw new Error('Sanity client not configured')
  }
  return builder.image(source)
}

export function isSanityConfigured(): boolean {
  return configured
}
