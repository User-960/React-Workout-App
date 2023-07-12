export interface IAuthFields {
	email: string
	password: string
}

export interface IExerciseFields {
	name: string
	times: number
	iconPath: string
}

export interface IWorkoutFields {
	name: string
	exerciseIds: number[]
}

export interface IWorkoutFieldsSelect {
	name: string
	exerciseIds: IWorkoutOption[]
}

export interface IWorkoutOption {
	value: number
	label: string
}
