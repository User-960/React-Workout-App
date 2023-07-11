import { $axios } from '@/api/api'

const EXERCISES: string = '/exercises'

class ExerciseService {
	async getAll() {
		return $axios.get(EXERCISES)
	}

	async create(name: string, times: number, iconPath: string) {
		return $axios.post<any>(EXERCISES, {
			name,
			times,
			iconPath
		})
	}

	async update(id: number, name: string) {
		return $axios.put<any>(`${EXERCISES}/${id}`, {
			name
		})
	}

	async delete(id: number) {
		return $axios.delete<any>(`${EXERCISES}/${id}`)
	}
}

export default new ExerciseService()
