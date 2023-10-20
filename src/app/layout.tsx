import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.scss'
import AuthProvider from '@/Hooks/AuthProvider'
import { Box, ChakraProvider } from '@chakra-ui/react'
import Sidebar from '@/components/Sidebar/Sidebar'
import { getServerSession } from 'next-auth'
import Login from '@/components/Login/Login'


const cairo = Cairo({ subsets: ['latin'], weight: ['200', '400', '600', '800'] })

export const metadata: Metadata = {
  title: 'To Do',
  description: 'Manage your daily tasks',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={cairo.className}>
        <AuthProvider>
          <ChakraProvider>
            {
              session?.user && session ?
                <>
                  <Sidebar />
                  <Box ml={{ base: 0, md: 60 }} p="4" minH={"100vh"} bg="#F6F1EE">
                    {children}
                  </Box>
                </>
                :
                <Login />
            }
          </ChakraProvider>
        </AuthProvider>
      </body>
    </html >
  )
}
