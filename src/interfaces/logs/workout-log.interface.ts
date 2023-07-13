import { IWorkout } from '../workout.interface'

import { IExerciseLog } from './exercise-log.interface'

export interface IWorkoutLog {
	id: number
	createdAt: string
	updatedAt: string
	isCompleted: boolean
	workoutId: number
	userId: number
	workout: IWorkout
	exerciseLogs: IExerciseLog[]
	minutes: number
}
