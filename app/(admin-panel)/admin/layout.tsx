import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


// This is to remove the header and footer from the admin panel
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang='en'>
        <body className='overflow-x-hidden'>
          <main className={`${inter.className} overflow-x-hidden`}>
            {children}
          </main>
        </body>
      </html>
  )
}