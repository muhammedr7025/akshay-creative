import type { Metadata } from 'next'
import { getAllCommunityMembers } from '@/lib/queries'
import CommunityClient from '@/components/community/CommunityClient'

export const metadata: Metadata = {
  title: 'Community',
  description: 'Meet the creative community — models, photographers, videographers, and editors collaborating on Akshay\'s Creative Platform.',
}

export default async function CommunityPage() {
  const members = await getAllCommunityMembers()

  return <CommunityClient members={members} />
}
