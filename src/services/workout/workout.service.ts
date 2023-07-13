import { $axios } from '@/api/api'
import { IWorkout } from '@/interfaces/workout.interface'

export const WORKOUTS: string = '/workouts'

class WorkoutService {
	async getAll() {
		return $axios.get<any>(WORKOUTS)
	}

	async getById(id: number) {
		return $axios.get<any>(`${WORKOUTS}/${id}`)
	}

	async create(name: string, exerciseIds: number[]) {
		return $axios.post<IWorkout>(WORKOUTS, {
			name,
			exerciseIds
		})
	}

	async update(id: number, exerciseIds: number[]) {
		return $axios.put<any>(`${WORKOUTS}/${id}`, {
			exerciseIds
		})
	}

	async delete(id: number) {
		return $axios.delete<any>(`${WORKOUTS}/${id}`)
	}
}

export default new WorkoutService()
