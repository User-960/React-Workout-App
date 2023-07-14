import cn from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './Workout.module.scss'
import { SERVER_URL } from '@/config/app.constants'
import { IExerciseLog } from '@/interfaces/logs/exercise-log.interface'

interface IExerciseItemProps {
	exerciseLog: IExerciseLog
}

const ExerciseItem: FC<IExerciseItemProps> = ({ exerciseLog }) => {
	const { push } = useRouter()

	return (
		<div
			className={cn(styles.item, {
				[styles.completed]: exerciseLog.isCompleted
			})}
		>
			<button
				aria-label='Move to exercise'
				onClick={() => push(`/exercise/${exerciseLog.id}`)}
			>
				<span>{exerciseLog?.exercise?.name}</span>
				<Image
					src={`${SERVER_URL}${exerciseLog?.exercise?.iconPath}`}
					alt={`${exerciseLog?.exercise?.name}`}
					draggable={false}
					height={45}
					width={45}
					priority
				/>
			</button>
		</div>
	)
}

export default ExerciseItem
