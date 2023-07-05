import cn from 'clsx'
import Link from 'next/link'
import { FC } from 'react'

import styles from './Hamburger.module.scss'
import { menu } from './menu.data'

interface IMenuProps {
	isShow: boolean
}

const Menu: FC<IMenuProps> = ({ isShow }) => {
	const logoutHandler = () => {}
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
