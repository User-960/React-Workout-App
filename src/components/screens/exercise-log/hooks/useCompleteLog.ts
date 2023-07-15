import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

import { ICompleteReq } from '@/interfaces/logs/exercise-log.interface'
import ExerciseLogService from '@/services/exercise/exercise-log.service'

export const useCompleteLog = () => {
	const { push } = useRouter()

	const { mutate, error: errorCompleted } = useMutation(
		['complete log'],
		({ exerciseLogId, isCompleted }: ICompleteReq) =>
			ExerciseLogService.complete(exerciseLogId, isCompleted),
		{
			onSuccess: ({ data }) => {
				push(`/workout/${data.workoutLogId}`)
			}
		}
	)

	return useMemo(
		() => ({
			completeLog: mutate,
			errorCompleted
		}),
		[]
	)
}
