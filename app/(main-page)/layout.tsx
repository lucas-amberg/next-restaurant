import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Diphylleia } from 'next/font/google'
import '@/app/globals.css'

import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })
const diphylleia = Diphylleia( { subsets: ['latin'], weight: '400'} )

import Navbar from '@/app/ui/layout/Navbar'
import Footer from '@/app/ui/layout/footer/Footer'


export const metadata: Metadata = {
  title: {
    template: '%s | Dal',
    default: 'Dal'
  },
  description: 'Dal is a premium sushi restaurant located in Costa Mesa, CA',
  metadataBase: new URL("https://https://next-restaurant-weld.vercel.app"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${diphylleia.className} overflow-x-hidden`}>
        <Navbar/>
        <Suspense>{children}</Suspense>
        <Footer/>
      </body>
    </html>
  )
}
