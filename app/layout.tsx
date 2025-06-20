import type { Metadata } from 'next'
import { Cormorant } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-cormorant'
})

export const metadata: Metadata = {
  title: 'Hodder Construction - Kamloops Custom Home Building and Renovations',
  description: 'We are professional builders specializing in custom home building, renovations and commercial development, serving Kamloops and Thompson Okanagan area.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cormorant.variable}>
      <body className={`${cormorant.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}