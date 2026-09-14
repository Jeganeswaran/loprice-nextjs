import type { Metadata, Viewport } from 'next'
import './globals.css'

import { Inclusive_Sans } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'

const inclusive = Inclusive_Sans({
  subsets: ['latin'],
  variable: '--font-inclusive-sans',
  display: 'swap',
})

// It is highly recommended to set a metadataBase to resolve relative URLs for OG images
// Replace 'https://loprice.com' with your actual production domain
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://loprice.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'LoPrice.com — Travel More. Pay Less.',
    template: '%s | LoPrice.com', // This allows child pages to just set their title (e.g. "About Us")
  },
  description: 'Compare buses, discover low fares, and book bus tickets online with LoPrice.com.',
  keywords: ['bus tickets', 'travel', 'low fares', 'book bus online', 'LoPrice', 'cheap travel'],
  authors: [{ name: 'LoPrice Team' }],
  creator: 'LoPrice.com',
  publisher: 'LoPrice.com',
  
  // Favicon / Icons configuration
  // Next.js automatically detects /app/favicon.ico or /app/icon.png
  // But you can explicitly define them if you use different formats or remote URLs
    icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg', // You can change this later if you make a specific Apple touch icon
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp, etc.)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'LoPrice.com',
    title: 'LoPrice.com — Travel More. Pay Less.',
    description: 'Compare buses, discover low fares, and book bus tickets online with LoPrice.com.',
    images: [
      {
        url: '/og-image.png', // Create an image (1200x630px) and put it in your public/ folder
        width: 1200,
        height: 630,
        alt: 'LoPrice.com - Travel More. Pay Less.',
      },
    ],
  },

  // Twitter (X) Cards
  twitter: {
    card: 'summary_large_image',
    title: 'LoPrice.com — Travel More. Pay Less.',
    description: 'Compare buses, discover low fares, and book bus tickets online with LoPrice.com.',
    images: ['/og-image.png'], // Same image as OG, or a specific Twitter image
    creator: '@loprice', // Replace with your actual Twitter handle
  },

  // Search Engine Crawling rules
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// Viewport is now a separate export in newer Next.js versions to improve performance
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1b3d' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inclusive.className}>
        <Header />
        {children}
        <Footer />
        <BottomNav />
      </body>
    </html>
  )
}