import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://w3pk.w3hc.org'),

  title: 'W3HC Website',
  description: "Web3 Hackers Collective's website",

  keywords: ['w3pk', 'WebAuthn', 'Next.js', 'Web3', 'Ethereum'],
  authors: [{ name: 'W3HC', url: 'https://github.com/w3hc' }],

  openGraph: {
    title: 'W3HC Website',
    description: "Web3 Hackers Collective's website",
    siteName: 'W3HC Website',
    images: [
      {
        url: '/huangshan.png',
        width: 1200,
        height: 630,
        alt: 'Next.js Web3 starter with passkey auth',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'W3HC Website',
    description: "Web3 Hackers Collective's website",
    images: ['/huangshan.png'],
    creator: '@julienbrg',
  },

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

  verification: {
    google: 'your-google-site-verification',
  },
}
