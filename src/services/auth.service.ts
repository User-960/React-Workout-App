import Cookies from 'js-cookie'

import { $axios } from '@/api/api'
import { ENUSER } from '@/config/app.constants'
import { IUserResponse } from '@/interfaces/user.interface'

class AuthService {
	async main(email: string, password: string, type: string) {
		try {
			const { data } = await $axios.post<IUserResponse>(`/auth/${type}`, {
				email,
				password
			})

			if (data.token) Cookies.set(ENUSER.TOKEN, data.token)

			return data
		} catch (error: any) {
			throw new Error(error)
		}
	}
}

export default new AuthService()
