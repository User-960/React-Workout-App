import { useQuery } from '@tanstack/react-query'

import { IUserProfile } from '@/interfaces/user.interface'
import UserService from '@/services/user.service'

export const useProfile = () => {
	return useQuery(
		['get profile'],
		({ data }: any) => UserService.getProfile(),
		{ select: ({ data }): IUserProfile => data }
	)
}
