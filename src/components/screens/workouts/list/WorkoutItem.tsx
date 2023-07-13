import { UseMutateFunction } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { FC } from 'react'

import styles from '../detail/Workout.module.scss'

import { IWorkout } from '@/interfaces/workout.interface'

interface IWorkoutItemProps {
	workout: IWorkout
	mutate: UseMutateFunction<AxiosResponse<any, any>, unknown, number, unknown>
}

const WorkoutItem: FC<IWorkoutItemProps> = ({ workout, mutate }) => {
	return (
		<div className={styles.item}>
			<button
				aria-label='Create new workout'
				onClick={() => mutate(workout.id)}
			>
				<span>{workout.name}</span>
			</button>
		</div>
	)
}

export default WorkoutItem
