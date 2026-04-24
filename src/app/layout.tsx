import type { Metadata } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'
import './globals.css'
import AOSInit from '@/components/AOSInit'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { getLodgingSchema, getFaqSchema } from '@/lib/schema'

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Wellnesslodge Veluwe | Privé sauna & hottub bij Edese bos',
  description: 'Ontspan in onze luxe wellness lodge op de Veluwe. Privé sauna, hottub en ruime tuin. Op 100m van het Edese bos. Direct boeken.',
  keywords: ['wellness lodge Veluwe', 'privé sauna Veluwe', 'hottub Veluwe', 'wellness huisje Ede', 'vakantiehuisje sauna Veluwe'],
  openGraph: {
    title: 'Wellnesslodge Veluwe | Privé sauna & hottub',
    description: 'Ontspan in onze luxe wellness lodge op de Veluwe. Privé sauna, hottub en ruime tuin.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'nl_NL',
    type: 'website',
  },
  alternates: { canonical: 'https://wellnesslodge-veluwe.nl' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${dmSerif.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getLodgingSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqSchema()) }}
        />
      </head>
      <body className="font-sans bg-sand text-stone antialiased">
        <AOSInit />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
