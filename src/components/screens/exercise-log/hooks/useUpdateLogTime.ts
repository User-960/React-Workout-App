import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

import { ITimesReq } from '@/interfaces/logs/exercise-log.interface'
import ExerciseLogService from '@/services/exercise/exercise-log.service'

export const useUpdateLogTime = () => {
	const { query } = useRouter()

	const queryClient = useQueryClient()

	const { mutate, error: errorChange } = useMutation(
		['update log time'],
		({ timeId, weight, height, isCompleted }: ITimesReq) =>
			ExerciseLogService.updateTime(timeId, weight, height, isCompleted),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['get exercise log', query.id])
			}
		}
	)

	return useMemo(
		() => ({
			updateTime: mutate,
			errorChange
		}),
		[]
	)
}
