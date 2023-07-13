import { GetServerSideProps } from 'next'
import { FC } from 'react'

import Workout from '../detail/Workout'

import { IWorkoutData } from '@/interfaces/workout.interface'

const ListWorkouts: FC = () => {
	return (
		<>
			<h2>List of Workouts</h2>
		</>
	)
}

export default ListWorkouts
