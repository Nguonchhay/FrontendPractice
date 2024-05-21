"use client"

import { ThemeProvider } from 'next-themes'

interface ProvidersProps {
    children: Array<any>
}

export default function Providers({
    children
} : ProvidersProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-gray-700 dark:text-gray-200 text-gray-700 transitions duration-300 min-h-screen">
        {children}
      </div>
    </ThemeProvider>
  )
}
