import { $axios } from '@/api/api'
import { IExercise } from '@/interfaces/exercise.interface'

const EXERCISES: string = '/exercises'

class ExerciseService {
	async getAll() {
		return $axios.get<IExercise[]>(EXERCISES)
	}

	async create(name: string, times: number, iconPath: string) {
		return $axios.post<IExercise>(EXERCISES, {
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
