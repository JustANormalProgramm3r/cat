import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>:)</title>
        <meta name="description" content="free robux!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.middle}>
          <h1>
            Hello :)
          </h1>
        </div>
        <div className={styles.test2}>
          <Link href='/cat'>
            secret (click)
          </Link>
        </div>
      </main>
    </>
  )
}
