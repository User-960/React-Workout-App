import { EXERCISES } from './exercise.service'
import { $axios } from '@/api/api'
import {
	ITimesReq,
	ITimesReqData
} from '@/interfaces/logs/exercise-log.interface'

const LOG = `${EXERCISES}/log`

class ExerciseLogService {
	async getById(id: number) {
		return await $axios.get<any>(`${LOG}/${id}`)
	}

	async create(exerciseId: number) {
		return $axios.post<any>(`${LOG}/${exerciseId}`)
	}

	async updateTime(timeId: number, body: ITimesReqData) {
		return $axios.put<any>(`${LOG}/time/${timeId}`, body)
	}

	async complete(exerciseLogId: number, isCompleted: boolean) {
		return $axios.patch<any>(`${LOG}/complete/${exerciseLogId}`, {
			isCompleted
		})
	}
}

export default new ExerciseLogService()
