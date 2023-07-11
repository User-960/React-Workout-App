export interface IAuthFields {
	email: string
	password: string
}

export interface IExerciseFields {
	name: string
	times: number
	iconPath: string
}

export interface IFields {
	auth: IAuthFields
	exercise: IExerciseFields
}
