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

export interface ITimesReq {
	timeId: number
	body: ITimesReqData
}

export interface ITimesReqData {
	weight: number
	repeat: number
	isCompleted: boolean
}

export interface ICompleteReq {
	exerciseLogId: number
	isCompleted: boolean
}
