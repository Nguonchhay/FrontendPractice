import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>Different types of API request</h1>
        <ul>
          <li>
            <Link href="/">1. Server component</Link>
          </li>
          <li>
            <Link href="/clients">2. Client component</Link>
          </li>
          <li>
            <Link href="/clients/actions">3. Client component with actions.ts</Link>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}
