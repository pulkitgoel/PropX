import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PropX - Find Your Perfect Home, Stress-Free',
  description: 'Discover verified homes with 100% legal assurance. Buy, sell, or invest with confidence. 10K+ happy customers, 5K+ homes sold.',
  generator: 'PropX',
  keywords: 'real estate, homes for sale, property investment, buy home, sell home',
  openGraph: {
    title: 'PropX - Find Your Perfect Home',
    description: 'Verified homes with 100% legal assurance',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
