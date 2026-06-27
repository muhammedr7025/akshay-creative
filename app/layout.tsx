import type { Metadata } from 'next'
import { Playfair_Display, Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "Akshay's Creative Platform | Create. Collaborate. Inspire.",
    template: '%s | Akshay Creative',
  },
  description:
    'A creative platform where photographers, models, videographers, and editors come together to create iconic visual stories. Book shoots, join the community, find opportunities.',
  openGraph: {
    title: "Akshay's Creative Platform",
    description: 'Create. Collaborate. Inspire. — Photography, fashion, and creative community.',
    images: ['/og-image.jpg'],
    type: 'website',
  },
  other: {
    'theme-color': '#FF002F',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-void text-text-primary">
        {children}
      </body>
    </html>
  )
}
