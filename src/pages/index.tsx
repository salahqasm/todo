import Head from 'next/head'
import Image from 'next/image'
import { Cairo } from 'next/font/google'
import styles from '@/styles/Home.module.scss'

const font = Cairo({
  subsets: ['latin'],
  weight: ['300','400','700','900']
})

export default function Home() {
  return (
    <>
      <Head>
        <title>To Do</title>
        <meta name="description" content="To Do Application - Make a plan for your day" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${font.className}`}>
      <h1 className='Heading'>Welcome to My website</h1>
      <h1 className='SubHeading'>Welcome to My website</h1>
      <h1 className='Title'>Welcome to My website</h1>
      <h1 className='paragraph'>Welcome to My website</h1>

      </main>
    </>
  )
}
