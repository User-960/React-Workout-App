import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

import { IWorkout } from '@/interfaces/workout.interface'
import WorkoutLogService from '@/services/workout/workout-log.service'
import WorkoutService from '@/services/workout/workout.service'

export const useWorkouts = () => {
	const { data, isSuccess } = useQuery(
		['get workouts'],
		() => WorkoutService.getAll(),
		{
			select: ({ data }): IWorkout[] => data
		}
	)

	const { push } = useRouter()

	const {
		mutate: createWorkoutLog,
		isSuccess: isSuccessMutate,
		isLoading,
		error
	} = useMutation(
		['Create new workout log'],
		(workoutId: number) => WorkoutLogService.create(workoutId),
		{
			onSuccess: ({ data }) => push(`/workout/${data.id}`)
		}
	)

	return useMemo(
		() => ({
			data,
			isSuccess,
			isLoading,
			createWorkoutLog,
			isSuccessMutate,
			error
		}),
		[isLoading, error, isLoading]
	)
}
