import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'

import { useUpdateLogTime } from './useUpdateLogTime'
import { ITimes } from '@/interfaces/exercise.interface'
import {
	IExerciseLog,
	ITimesReq
} from '@/interfaces/logs/exercise-log.interface'
import ExerciseLogService from '@/services/exercise/exercise-log.service'

export const useExerciseLog = () => {
	const { query } = useRouter()

	const { updateTime, errorChange } = useUpdateLogTime()

	const [times, setTimes] = useState<ITimes[]>([])

	const {
		data: exerciseLog,
		isSuccess,
		isLoading
	} = useQuery(
		['get exercise log', query.id],
		() => ExerciseLogService.getById(Number(query.id)),
		{
			select: ({ data }): IExerciseLog => data,
			onSuccess: data => {
				if (data?.times?.length) {
					setTimes(data.times)
				}
			}
		}
	)

	const onChangeState = (timeId: number, key: string, value: string): void => {
		const newTimes = times.map((time: ITimes) => {
			if (time.id === timeId) {
				return { ...time, [key]: value }
			}

			return time
		})

		setTimes(newTimes)
	}

	const getTime = (timeId: number) => {
		return times.find(time => time.id === timeId)
	}

	const getState = (timeId: number, key: string): any => {
		if (key === 'weight' || key === 'repeat' || key === 'isCompleted') {
			const time = getTime(timeId)
			return time ? time[key] : key === 'isCompleted' ? false : 0
		}
	}

	const toggleTime = (timeId: number, isCompleted: boolean) => {
		const time = getTime(timeId)
		updateTime({
			timeId,
			body: {
				isCompleted,
				repeat: time ? +time.repeat : 0,
				weight: time ? +time.weight : 0
			}
		})
	}

	return useMemo(
		() => ({
			exerciseLog,
			isSuccess,
			isLoading,
			onChangeState,
			getState,
			toggleTime,
			errorChange
		}),
		[isSuccess, isLoading]
	)
}
