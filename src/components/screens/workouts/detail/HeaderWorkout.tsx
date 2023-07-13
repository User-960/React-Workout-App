import cn from 'clsx'
import { FC } from 'react'

import Header from '@/components/layout/header/Header'

import stylesLayout from '../../../layout/Layout.module.scss'

import styles from './Workout.module.scss'
import { IWorkoutLog } from '@/interfaces/logs/workout-log.interface'

interface IHeaderWorkoutProps {
	isSuccess: boolean
	workoutLog: IWorkoutLog | undefined
}

const HeaderWorkout: FC<IHeaderWorkoutProps> = ({ isSuccess, workoutLog }) => {
	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{
				backgroundImage: `url('/images/workout-bg.jpg')`,
				height: 356
			}}
		>
			<Header backLink='/workouts' />
			{isSuccess && (
				<div>
					<time className={styles.time}>{workoutLog?.minutes + ' min'}</time>
					<h1 className={styles.heading}>{workoutLog?.workout.name}</h1>
				</div>
			)}
		</div>
	)
}

export default HeaderWorkout
