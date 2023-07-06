import { FC } from 'react'
import { IoMdArrowBack } from 'react-icons/io'

import { useAuth } from '@/components/hooks/useAuth'

import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'

interface IPropsHeader {
	backLink: string
}

const Header: FC<IPropsHeader> = ({ backLink }) => {
	const { isAuth } = useAuth()
	return (
		<header className={styles.header}>
			<button onClick={() => {}}>
				<IoMdArrowBack fill='#fff' fontSize={30} />
			</button>

			<Hamburger />
		</header>
	)
}

export default Header
