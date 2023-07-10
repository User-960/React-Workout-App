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

const Header: FC<IPropsHeader> = ({ backLink = '' }) => {
	const { pathname, push } = useRouter()

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{isAuth && (
				<>
					{pathname === '/' && isAuth ? (
						<button
							onClick={() => {
								push('/profile')
							}}
						>
							<SlUser fill='#fff' fontSize={30} />
						</button>
					) : (
						<button
							onClick={() => {
								push(isAuth ? backLink : '/auth')
							}}
						>
							<IoMdArrowBack fill='#fff' fontSize={30} />
						</button>
					)}
					<Hamburger />
				</>
			)}
		</header>
	)
}

export default Header
