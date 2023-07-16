import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'

import { useUpdateLogTime } from './useUpdateLogTime'
import { ITimes } from '@/interfaces/exercise.interface'
import { IExerciseLog } from '@/interfaces/logs/exercise-log.interface'
import ExerciseLogService from '@/services/exercise/exercise-log.service'

export const useExerciseLog = () => {
	const { query } = useRouter()

	const [times, setTimes] = useState<ITimes[]>([
		{
			id: 101,
			createdAt: '2023-07-16T20:20:04.867Z',
			updatedAt: '2023-07-16T20:26:24.695Z',
			weight: 0,
			repeat: 0,
			isCompleted: true,
			exerciseLogId: 21,
			prevWeight: 0,
			prevRepeat: 0
		}
	])

	const { updateTime, error } = useUpdateLogTime(times)

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

	useEffect(() => {
		console.log(times)
	}, [times])

	/* TODO: Project have been written on Next 
    and times all the time is [] because we have SSR
    Decision is try to change SSR to SSG or ISR
  */

	const onChangeState = (timeId: number, key: string, value: string) => {
		if (times?.length) {
			const newTimes = times.map(time => {
				if (time.id === timeId) {
					return { ...time, [key]: value }
				}

				return time
			})

			setTimes(newTimes)
		}
	}

	const getTime = (timeId: number) => {
		if (times?.length) {
			return times.find(time => time.id === timeId)
		}
	}

	const getState: any = (timeId: number, key: string) => {
		const time = getTime(timeId)
		if (key === 'weight' || key === 'repeat' || key === 'isCompleted') {
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
			error
		}),
		[isSuccess, isLoading]
	)
}
