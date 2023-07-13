import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './Workout.module.scss'

const Workout: FC = () => {
	const { asPath } = useRouter()
	const {} = useQuery(['get workout', asPath])

	return <div>Workout</div>
}

export default Workout
