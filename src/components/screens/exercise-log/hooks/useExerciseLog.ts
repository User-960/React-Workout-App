import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

import { IExerciseLog } from '@/interfaces/logs/exercise-log.interface'
import ExerciseLogService from '@/services/exercise/exercise-log.service'

export const useExerciseLog = () => {
	const { query } = useRouter()

	const {
		data: exerciseLog,
		isSuccess,
		isLoading
	} = useQuery(
		['get exercise log', query.id],
		() => ExerciseLogService.getById(Number(query.id)),
		{
			select: ({ data }): IExerciseLog => data
		}
	)

	return useMemo(
		() => ({ exerciseLog, isSuccess, isLoading }),
		[isSuccess, isLoading]
	)
}
