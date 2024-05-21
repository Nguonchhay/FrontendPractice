import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Banner from '@/components/Banner/Banner'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const onBannerClick = () => {

  }

  return (
    <>
      <Head>
        <title>Home - Coffee Shop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Banner buttonText="View stores nearby" onClick={onBannerClick} />
      </main>
    </>
  )
}
