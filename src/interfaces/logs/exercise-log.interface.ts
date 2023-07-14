import { IExercise, ITimes } from '../exercise.interface'

export interface IExerciseLog {
	id: number
	createdAt: string
	updatedAt: string
	isCompleted: boolean
	userId: number
	workoutLogId: number
	exerciseId?: number
	exercise: IExercise
	times: ITimes[]
}
