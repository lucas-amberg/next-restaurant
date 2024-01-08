import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })



export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <main className={`${inter.className} overflow-x-hidden`}>
        {children}
      </main>
  )
}