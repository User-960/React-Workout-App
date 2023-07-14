import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'

import Header from '@/components/layout/header/Header'

import { SERVER_URL } from '../../../../const'
import stylesLayout from '../../layout/Layout.module.scss'

import styles from './ExerciseLog.module.scss'
import HeaderExerciseLog from './HeaderExerciseLog'
import { IExerciseLog } from '@/interfaces/logs/exercise-log.interface'
import ExerciseLogService from '@/services/exercise/exercise-log.service'

const ExerciseLog: FC = () => {
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

	return (
		<>
			<HeaderExerciseLog exerciseLog={exerciseLog} isSuccess={isSuccess} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			></div>
		</>
	)
}

export default ExerciseLog
