import cn from 'clsx';
import Image from 'next/image';
import { FC } from 'react';



import styles from '../ExerciseLog.module.scss';



import { ITimes } from '@/interfaces/exercise.interface';
import { IExerciseLog } from '@/interfaces/logs/exercise-log.interface';


interface IExerciseTableRowProps {
	item: ITimes
	exerciseLog: IExerciseLog
	onChange: any
	value: any
}

const ExerciseTableRow: FC<IExerciseTableRowProps> = ({
	item,
	exerciseLog,
	onChange,
	value
}) => {
	return (
		<div
			className={cn(styles.row, {
				[styles.completed]: exerciseLog.isCompleted
			})}
			key={`time ${item.id}`}
		>
			<div
				className={styles.opacity}
				key={`Prev ${item.id}/${item.prevWeight}`}
			>
				<input type='number' defaultValue={item.prevWeight} disabled />
				<i>kg{item.isCompleted && ' '}</i>
				<input type='number' defaultValue={item.prevRepeat} disabled />
			</div>

			<div key={`RepeatWeight ${item.id}/${item.prevRepeat}`}>
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

			<div key={`Completed ${item.id}/${item.isCompleted}`}>
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
	)
}

export default ExerciseTableRow