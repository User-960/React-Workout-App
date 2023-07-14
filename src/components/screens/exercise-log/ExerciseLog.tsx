import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'

import Alert from '@/components/ui/alert/Alert'
import Loader from '@/components/ui/loader/Loader'

import styles from './ExerciseLog.module.scss'
import HeaderExerciseLog from './HeaderExerciseLog'
import { ITimes } from '@/interfaces/exercise.interface'
import { IExerciseLog } from '@/interfaces/logs/exercise-log.interface'
import ExerciseLogService from '@/services/exercise/exercise-log.service'

const rows: string[] = ['Previous', 'Repeat & Weight', 'Completed']

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
			>
				<div style={{ width: '90%', margin: '0 auto' }}>
					{/* {errorChange && <Alert type='error' text={errorChange} />}
					{errorCompleted && <Alert type='error' text={errorCompleted} />} */}
				</div>

				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						<div className={styles.row}>
							{rows.map((row: string) => (
								<div key={row}>
									<span>{row}</span>
								</div>
							))}
						</div>

						{exerciseLog?.times.map((item: ITimes, index) => (
							<div
								className={cn(styles.row, {
									[styles.completed]: exerciseLog.isCompleted
								})}
								key={`time ${index}`}
							>
								<div
									className={styles.opacity}
									key={`Prev ${index}/${item.prevWeight}`}
								>
									<input
										type='number'
										defaultValue={item.prevWeight}
										disabled
									/>
									<i>kg{item.isCompleted && ' '}</i>
									<input
										type='number'
										defaultValue={item.prevRepeat}
										disabled
									/>
								</div>

								<div key={`RepeatWeight ${index}/${item.prevRepeat}`}>
									<input
										type='tel'
										pattern='[0-9]*'
										defaultValue={item.weight}
										disabled={item.isCompleted}
									/>
									<i>kg{item.isCompleted && ' '}</i>
									<input
										type='number'
										defaultValue={item.repeat}
										disabled={item.isCompleted}
									/>
								</div>

								<div key={`Completed ${index}/${item.isCompleted}`}>
									<Image
										src={
											item.isCompleted
												? '/images/exercises/check-completed.svg'
												: '/images/exercises/check.svg'
										}
										alt={''}
										className={styles.checkbox}
										width={25}
										height={25}
										draggable={false}
										onClick={() => {}}
									/>
								</div>
							</div>
						))}
					</div>
				)}

				{isSuccess && exerciseLog?.times?.length === 0 && (
					<Alert type='warning' text='Times not found' />
				)}
			</div>
		</>
	)
}

export default ExerciseLog
