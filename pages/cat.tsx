import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

function randomIntFromInterval(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default function catPage() {
  const cat = require(`../public/cats/${randomIntFromInterval(1, 2023)}.png`);
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
          <Image
            src={cat}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.button}>
          <Link href='/cat'>Get a new cat</Link>
        </div>
      </main>
    </>
  )
}