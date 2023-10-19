import styles from './page.module.scss'
import Test from '@/components/Test'

export default async function Home() {

  return (
    <main className={styles.main}>
      
      <Test></Test>
    </main>
  )
}
