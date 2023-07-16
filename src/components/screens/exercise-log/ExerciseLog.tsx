import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'

import Alert from '@/components/ui/alert/Alert'
import Loader from '@/components/ui/loader/Loader'

import { useExerciseLog } from './hooks/useExerciseLog'

import ExerciseError from './ExerciseError'
import styles from './ExerciseLog.module.scss'
import HeaderExerciseLog from './HeaderExerciseLog'
import ExerciseTable from './exercise-table/ExerciseTable'
import ExerciseTableRow from './exercise-table/ExerciseTableRow'
import { ITimes } from '@/interfaces/exercise.interface'

const rows: string[] = ['Previous', 'Weight & Repeat', 'Completed']

const ExerciseLog: FC = () => {
	const {
		exerciseLog,
		isSuccess,
		isLoading,
		onChangeState,
		getState,
		toggleTime,
		error
	} = useExerciseLog()

	return (
		<>
			<HeaderExerciseLog exerciseLog={exerciseLog} isSuccess={isSuccess} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<ExerciseError errors={[error]} />

				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						<ExerciseTable rows={rows} />

						{exerciseLog?.times.map((item: ITimes) => (
							<ExerciseTableRow
								key={item.id}
								item={item}
								onChangeState={onChangeState}
								getState={getState}
								toggleTime={toggleTime}
							/>
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
