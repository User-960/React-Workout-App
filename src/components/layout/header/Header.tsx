import { FC } from 'react'
import { FiArrowLeft } from 'react-icons/fi'

import { useAuth } from '@/components/hooks/useAuth'

import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'

const Header: FC = () => {
	const { isAuth } = useAuth()
	return (
		<header className={styles.header}>
			<button onClick={() => {}}>
				<FiArrowLeft />
			</button>

			<Hamburger />
		</header>
	)
}

export default Header
