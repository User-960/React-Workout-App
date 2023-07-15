import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'

import { ITimes } from '@/interfaces/exercise.interface'
import { IExerciseLog } from '@/interfaces/logs/exercise-log.interface'
import ExerciseLogService from '@/services/exercise/exercise-log.service'

export const useExerciseLog = () => {
	const { query } = useRouter()

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
			onSuccess: data => setTimes(data.times)
		}
	)

	const onChangeTime = (timeId: number, newTime: ITimes) => {
		const newTimes = times.map((time: ITimes) => {
			if (time.id === timeId) {
				return { ...time, ...newTime }
			}

			return time
		})

		setTimes(newTimes)
	}

	const getTimeValue = (timeId: number) => {
		const time = times.find(time => time.id === timeId)

		return time
	}

	return useMemo(
		() => ({
			exerciseLog,
			isSuccess,
			isLoading,
			onChangeTime,
			getTimeValue
		}),
		[isSuccess, isLoading]
	)
}
