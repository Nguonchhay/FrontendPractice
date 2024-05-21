import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';

import './globals.css'
import Navbar from './components/Navbar'

export const metadata: Metadata = {
  title: 'DOJO Help Desk',
  description: 'Online Help Desk Platform',
}

const rubik = Rubik({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />

        {children}
      </body>
    </html>
  )
}
