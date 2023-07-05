import Layout from '@/components/layout/Layout'
import { FC } from 'react'
import styles from './Home.module.scss'

const Home: FC = () => {
  return (
    <Layout>
      <h1 className={styles.title}>Home</h1>
    </Layout>
  )
}

export default Home