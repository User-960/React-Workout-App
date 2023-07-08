import Cookies from 'js-cookie'

import { $axios } from '@/api/api'

class AuthService {
	async main(type: 'login' | 'reg') {
		try {
			const { data } = await $axios.post(`/users/${type}`)

			if (data.token) Cookies.set('red', data.token)

			return data
		} catch (error: any) {
			throw new Error(error)
		}
	}
}

export default new AuthService()
