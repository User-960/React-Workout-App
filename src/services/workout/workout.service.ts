import { $axios } from '@/api/api'
import { IWorkout } from '@/interfaces/workout.interface'

export const WORKOUTS: string = '/workouts'

class WorkoutService {
	async getAll() {
		const { data } = await $axios.get<IWorkout[]>(WORKOUTS)
		return data

		// const { data } = await $axios.get<IWorkout[]>(WORKOUTS)
		// return data
	}

	async getById(id: string) {
		// return $axios.get<IWorkout, any>(`${WORKOUTS}/${id}`)

		const { data } = await $axios.get<IWorkout[]>(`${WORKOUTS}`, {
			params: {
				id
			}
		})
		return data[0]
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
