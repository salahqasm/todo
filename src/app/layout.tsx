import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.scss'
import AuthProvider from '@/Hooks/AuthProvider'


const cairo = Cairo({ subsets: ['latin'], weight: ['200', '400', '600', '800'] })

export const metadata: Metadata = {
  title: 'To do',
  description: 'Manage your daily tasks',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cairo.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
