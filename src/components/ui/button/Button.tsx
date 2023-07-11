import cn from 'clsx'
import { FC, ReactNode } from 'react'

import styles from './Button.module.scss'

interface IButtonProps {
	clickHandler?: any
	size?: string
	children?: ReactNode
}

const Button: FC<IButtonProps> = ({
	clickHandler = null,
	size = '',
	children
}) => {
	return (
		<div className={styles.wrapper}>
			<button
				className={cn(styles.button, styles[size])}
				onClick={clickHandler}
			>
				{children}
			</button>
		</div>
	)
}

export default Button
