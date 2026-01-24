import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
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
    'Utah interior design',
    'virtual design consulting',
  ],
  authors: [{ name: BRAND.founder }],
  creator: BRAND.name,
  publisher: BRAND.name,
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: SEO.home.title,
    description: SEO.home.description,
    type: 'website',
    locale: 'en_US',
    siteName: BRAND.name,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Form & Feeling - Interior Design Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO.home.title,
    description: SEO.home.description,
    images: ['/images/og-image.jpg'],
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
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-ink focus:text-ivory focus:outline-none"
        >
          Skip to main content
        </a>
        <Navigation />
        <div id="main-content">
          {children}
        </div>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
