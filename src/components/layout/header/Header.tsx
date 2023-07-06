import { useRouter } from 'next/router'
import { FC } from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import { SlUser } from 'react-icons/sl'

import { useAuth } from '@/components/hooks/useAuth'

import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'

interface IPropsHeader {
	backLink: string
}

const Header: FC<IPropsHeader> = ({ backLink }) => {
	const { isAuth } = useAuth()

	const { pathname, push } = useRouter()
	return (
		<header className={styles.header}>
			{pathname !== '/' ? (
				<button
					onClick={() => {
						push(backLink || '/')
					}}
				>
					<IoMdArrowBack fill='#fff' fontSize={30} />
				</button>
			) : (
				<button
					onClick={() => {
						push('/profile')
					}}
				>
					<SlUser fill='#fff' fontSize={30} />
				</button>
			)}

			<Hamburger />
		</header>
	)
}

export default Header
