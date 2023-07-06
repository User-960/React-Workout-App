import { useRouter } from 'next/router'
import { FC } from 'react'

import Button from '@/components/ui/button/Button'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import styles from './Home.module.scss'

const Home: FC = () => {
	const { pathname, push } = useRouter()

	const meta: IMeta = {
		title: 'Home',
		description: 'Sport is a life'
	}

	return (
		<Layout meta={meta} bgImage='/images/home-bg.jpg'>
			<Button
				clickHandler={() => {
					push('/new-workout')
				}}
			>
				New
			</Button>
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
		</Layout>
	)
}

export default Home
