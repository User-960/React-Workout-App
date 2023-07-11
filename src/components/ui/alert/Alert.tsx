import cn from 'clsx'
import { FC } from 'react'

import styles from './Alert.module.scss'

interface IAlertProps {
	type?: string
	text: string
}

const Alert: FC<IAlertProps> = ({ type = 'success', text }) => {
	return <div className={cn(styles.alert, styles[type])}>{text}</div>
}

export default Alert
