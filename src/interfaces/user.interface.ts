export interface IUser {
	id: number
	token: string
	name: string
	password: string
	email: string
	createdAt: string
	updatedAt: string
	image: string[]
}

export interface IUserResponse {
	token: string
	user: IUser
}

export type TypeUser = IUser | null
