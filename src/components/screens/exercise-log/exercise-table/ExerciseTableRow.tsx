import cn from 'clsx'
import Image from 'next/image'
import { ChangeEvent, FC } from 'react'

import styles from '../ExerciseLog.module.scss'

import { ITimes } from '@/interfaces/exercise.interface'

interface IExerciseTableRowProps {
	item: ITimes
	onChangeState: (timeId: number, key: string, value: string) => void
	getState: (timeId: number, key: string) => any
	toggleTime: (timeId: number, isCompleted: boolean) => void
}

const ExerciseTableRow: FC<IExerciseTableRowProps> = ({
	item,
	onChangeState,
	getState,
	toggleTime
}) => {
	return (
		<div
			className={cn(styles.row, {
				[styles.completed]: item.isCompleted
			})}
			key={`time ${item.id}`}
		>
			<div
				className={styles.opacity}
				key={`Prev ${item.id}/${item.prevWeight}`}
			>
				<input type='number' defaultValue={item.prevWeight} disabled />
				<i>kg{item.isCompleted ? '' : ' '}</i>
				<input type='number' defaultValue={item.prevRepeat} disabled />
			</div>

			<div key={`RepeatWeight ${item.id}/${item.prevRepeat}`}>
				<input
					type='tel'
					pattern='[0-9]*'
					value={getState(item.id, 'weight')}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						onChangeState(item.id, 'weight', e.target.value)
					}
					disabled={item.isCompleted}
				/>
				<i>kg{item.isCompleted ? '' : ' '}/</i>
				<input
					type='number'
					value={getState(item.id, 'repeat')}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						onChangeState(item.id, 'repeat', e.target.value)
					}
					disabled={item.isCompleted}
				/>
			</div>

			<div key={`Completed ${item.id}/${item.isCompleted}`}>
				<Image
					src={
						getState(item.id, 'isCompleted')
							? '/images/exercises/check-completed.svg'
							: '/images/exercises/check.svg'
					}
					alt={''}
					className={styles.checkbox}
					width={25}
					height={25}
					draggable={false}
					onClick={() => toggleTime(item.id, !getState(item.id, 'isCompleted'))}
				/>
			</div>
		</div>
	)
}

export default ExerciseTableRow
