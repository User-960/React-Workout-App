import { IExercise } from './exercise.interface'

export interface IWorkout {
	id: number
	name: string
	createdAt: string
	updatedAt: string
	exercises?: IExercise[]
}

export interface IWorkoutData {
	workouts: IWorkout[]
}

export interface IWorkoutDataSingle {
	workout: IWorkout
}
