export interface IExercise {
	id: number
	name: string
	times: number
	iconPath: string
	createdAt: string
	updatedAt: string
	exerciseLogId: number
}

export interface ITimes {
	id: number
	createdAt: string
	updatedAt: string
	weight: number
	repeat: number
	isCompleted: boolean
	exerciseLogId: number
	prevWeight: number
	prevRepeat: number
}
