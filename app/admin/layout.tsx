import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })



export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}