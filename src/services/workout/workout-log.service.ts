import { WORKOUTS } from './workout.service'
import { $axios } from '@/api/api'
import { IWorkoutLog } from '@/interfaces/logs/workout-log.interface'

const LOG = `${WORKOUTS}/log`

class WorkoutLogService {
	async getById(id: number) {
		return $axios.get<any>(`${LOG}/${id}`)

		// const { data } = await $axios.get<IWorkoutLog[]>(`${LOG}/${id}`)
		// return data[0]
	}

	async create(workoutId: number) {
		return $axios.post<any>(`${LOG}/${workoutId}`)
	}

	async complete(workoutLogId: number) {
		return $axios.patch<any>(`${LOG}/complete/${workoutLogId}`)
	}
}

export default new WorkoutLogService()
