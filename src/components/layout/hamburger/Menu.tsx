import cn from 'clsx'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dispatch, FC, SetStateAction } from 'react'

import { useAuth } from '@/components/hooks/useAuth'

import styles from './Hamburger.module.scss'
import { menu } from './menu.data'
import { ENUSER } from '@/config/app.constants'

interface IMenuProps {
	isShow: boolean
	setIsShow: Dispatch<SetStateAction<boolean>>
}

const Menu: FC<IMenuProps> = ({ isShow, setIsShow }) => {
	const { setIsAuth } = useAuth()
	const { push } = useRouter()

	const logoutHandler = () => {
		Cookies.remove(ENUSER.TOKEN)
		setIsAuth(false)
		setIsShow(false)
		push('/auth')
	}

	return (
		<nav className={cn(styles.menu, { [styles.show]: isShow })}>
			<ul>
				{menu.map((item, index) => (
					<li key={`_menu_${index}`}>
						<Link href={`${item.link}`}>{item.title}</Link>
					</li>
				))}
				<li>
					<button onClick={logoutHandler}>Log out</button>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
