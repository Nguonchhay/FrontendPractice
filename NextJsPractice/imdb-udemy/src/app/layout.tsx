
import './globals.css'
import type { Metadata } from 'next'
import Providers from './Providers'
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import SearchBox from '@/components/SearchBox'

export const metadata: Metadata = {
  title: 'IMDb Udemy',
  description: 'A movie website clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <NavBar />
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  )
}
