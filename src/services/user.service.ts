import { $axios } from '@/api/api'
import { IUserResponse } from '@/interfaces/user.interface'

const USERS = '/users'

class UserService {
	async getProfile() {
		return await $axios.post<IUserResponse>(`${USERS}/profile`)
	}
}

export default new UserService()
