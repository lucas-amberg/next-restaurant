import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Diphylleia } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const diphylleia = Diphylleia( { subsets: ['latin'], weight: '400'} )

import Navbar from '@/app/ui/layout/Navbar'


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={diphylleia.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
