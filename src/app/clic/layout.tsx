import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clic | w3pk',
  description: 'Entraînement spécial !',

  openGraph: {
    title: 'Clic | w3pk',
    description: 'Entraînement spécial !',
    siteName: 'W3HC Website',
    images: [
      {
        url: '/huangshan.png',
        width: 1200,
        height: 630,
        alt: 'Entraînement spécial !',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Clic | W3HC Website',
    description: 'Entraînement spécial !',
    images: ['/huangshan.png'],
    creator: '@julienbrg',
  },
}

export default function ClicLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
