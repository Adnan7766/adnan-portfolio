import './globals.css'
import type { Metadata } from 'next'
import { Viewport } from 'next'
import Navbar from './components/Navbar'

export const metadata: Metadata = {
  title: 'Adnan Rajab - Full Stack Developer',
  description: 'Portfolio of Adnan Rajab - MERN Stack Developer & Full Stack Engineer based in Islamabad, Pakistan',
  keywords: 'Full Stack Developer, MERN Stack, React, Next.js, Node.js, Python, Portfolio',
  authors: [{ name: 'Adnan Rajab' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-[#0f172a] text-white antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}