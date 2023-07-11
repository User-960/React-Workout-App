import { $axios } from '@/api/api'

const USERS = '/users'

class UserService {
	async getProfile() {
		return $axios.post<any>(`${USERS}/profile`)
	}
}

export default new UserService()
