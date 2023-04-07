import styles from '@/styles/Home.module.css'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import Router from 'next/router';


export default function catPage({ cats }: any) {
  return (
    <>
      <Head>
        <title>I love cats</title>
        <meta name="description" content="Cats.." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className={styles.text}>
        <p>
            Cat 🤑
          </p>
        </div>
        <div>
          <img src={cats[0]['url']}/>
        </div>
        <div className={styles.button}>
          <Link href='/cat'>Get a new cat</Link>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search")
  const results = await res.json();
  return {
    props: {
      cats: results
    }
  }
}