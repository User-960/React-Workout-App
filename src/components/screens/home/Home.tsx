import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import styles from './Home.module.scss'

const Home: FC = () => {
	const meta: IMeta = {
		title: 'Home',
		description: 'Sport is a life'
	}

	return (
		<Layout meta={meta}>
			<h1 className={styles.title}>Home</h1>
		</Layout>
	)
}

export default Home
