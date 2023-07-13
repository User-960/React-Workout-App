import { EXERCISES } from './exercise.service'
import { $axios } from '@/api/api'

const LOG = `${EXERCISES}/log`

class ExerciseLogService {
	async getById(id: number) {
		return $axios.get<any>(`${LOG}/${id}`)
	}

	async create(exerciseId: number) {
		return $axios.post<any>(`${LOG}/${exerciseId}`)
	}

	async updateTime(
		timeId: number,
		weight: number,
		height: number,
		isCompleted: boolean
	) {
		return $axios.put<any>(`${LOG}/time/${timeId}`, {
			weight,
			height,
			isCompleted
		})
	}

	async complete(exerciseLogId: number, isCompleted: boolean) {
		return $axios.patch<any>(`${LOG}/complete/${exerciseLogId}`, {
			isCompleted
		})
	}
}

export default new ExerciseLogService()
