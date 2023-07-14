import cn from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

import Header from '@/components/layout/header/Header'

import { SERVER_URL } from '../../../../const'
import stylesLayout from '../../layout/Layout.module.scss'

import styles from './ExerciseLog.module.scss'
import { IExerciseLog } from '@/interfaces/logs/exercise-log.interface'

interface IHeaderExerciseLogProps {
	exerciseLog: IExerciseLog | undefined
	isSuccess: boolean
}

const HeaderExerciseLog: FC<IHeaderExerciseLogProps> = ({
	exerciseLog,
	isSuccess
}) => {
	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{
				backgroundImage: `url('/images/ex-bg-1.jpg')`,
				height: 300
			}}
		>
			<Header
				backLink={
					isSuccess ? `/workout/${exerciseLog?.workoutLogId}` : '/workouts'
				}
			/>

			{isSuccess && (
				<div className={styles.heading}>
					<Image
						src={`${SERVER_URL}${exerciseLog?.exercise?.iconPath}`}
						alt={`${exerciseLog?.exercise?.name}`}
						draggable={false}
						height={34}
						width={34}
						priority
					/>
					<h1 className={stylesLayout.heading}>{exerciseLog?.exercise.name}</h1>
				</div>
			)}
		</div>
	)
}

export default HeaderExerciseLog
