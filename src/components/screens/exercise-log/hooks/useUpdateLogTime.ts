import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

import { useCompleteLog } from './useCompleteLog'
import { ITimes } from '@/interfaces/exercise.interface'
import { ITimesReq } from '@/interfaces/logs/exercise-log.interface'
import ExerciseLogService from '@/services/exercise/exercise-log.service'

export const useUpdateLogTime = (times: any) => {
	const { query } = useRouter()

	const queryClient = useQueryClient()

	const { completeLog, errorCompleted } = useCompleteLog()

	const { mutate, error: errorChange } = useMutation(
		['update log time'],
		({ timeId, body }: ITimesReq) =>
			ExerciseLogService.updateTime(timeId, body),
		{
			onSuccess: () => {
				queryClient
					.invalidateQueries(['get exercise log', query.id])
					.then(() => {
						const filteredTimes = times.filter(
							(time: ITimes) => time.isCompleted
						)
						if (filteredTimes.length === times.length - 1) {
							const id = Number(query.id)
							completeLog({ exerciseLogId: id, isCompleted: true })
						}
					})
			}
		}
	)

	return useMemo(
		() => ({
			updateTime: mutate,
			error: errorChange || errorCompleted
		}),
		[]
	)
}
