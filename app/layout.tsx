import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  variable: '--font-montserrat',
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
    'theme-color': '#0F1432', // Crows Navy
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body className="font-sans antialiased bg-void text-text-primary uppercase font-light">
        {children}
      </body>
    </html>
  )
}
