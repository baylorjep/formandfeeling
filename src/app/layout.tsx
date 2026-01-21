import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { SEO, BRAND } from '@/data/brand'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: SEO.home.title,
    template: `%s | ${BRAND.name}`,
  },
  description: SEO.home.description,
  keywords: [
    'interior design consulting',
    'design direction',
    'Nicole Harker',
    'Form and Feeling',
    'space planning',
    'design guidance',
    'home design consulting',
    'San Francisco interior design',
  ],
  authors: [{ name: BRAND.founder }],
  creator: BRAND.name,
  publisher: BRAND.name,
  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: SEO.home.title,
    description: SEO.home.description,
    type: 'website',
    locale: 'en_US',
    siteName: BRAND.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO.home.title,
    description: SEO.home.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-ivory text-ink antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
