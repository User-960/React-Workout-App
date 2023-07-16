import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { FC, Fragment } from 'react'

import Alert from '@/components/ui/alert/Alert'
import Button from '@/components/ui/button/Button'
import Loader from '@/components/ui/loader/Loader'

import ExerciseItem from './ExerciseItem'
import HeaderWorkout from './HeaderWorkout'
import styles from './Workout.module.scss'
import { IWorkoutLog } from '@/interfaces/logs/workout-log.interface'
import WorkoutLogService from '@/services/workout/workout-log.service'

const Workout: FC = () => {
	const { push, query } = useRouter()
	const id = Number(query.id)

	const { data, isSuccess, isLoading } = useQuery(
		['get workout log', query.id],
		() => WorkoutLogService.getById(Number(query.id)),
		{
			select: ({ data }): IWorkoutLog => data
		}
	)

	const { mutate } = useMutation(
		['complete workout'],
		() => WorkoutLogService.complete(id),
		{
			onSuccess: () => {
				push('/workouts')
			}
		}
	)

	return (
		<>
			<HeaderWorkout isSuccess={isSuccess} workoutLog={data} />

			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div style={{ width: '90%', margin: '0 auto' }}>
					{/* {errorCompleted && <Alert type='error' text={errorCompleted} />} */}
				</div>

				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						{data?.exerciseLogs?.map((exerciseLog, index) => (
							<Fragment key={exerciseLog.id}>
								<ExerciseItem exerciseLog={exerciseLog} />
								{index % 2 !== 0 && index !== data.exerciseLogs.length - 1 && (
									<div className={styles.line} />
								)}
							</Fragment>
						))}
					</div>
				)}
				<Button clickHandler={() => mutate()}>Complete workout</Button>
			</div>
		</>
	)
}

export default Workout

// ---------------------------------------
// import { useQuery } from '@tanstack/react-query'
// import cn from 'clsx'
// import { useRouter } from 'next/router'
// import { FC } from 'react'

// import Alert from '@/components/ui/alert/Alert'

// import Header from '@/components/layout/header/Header'

// import stylesLayout from '../../layout/Layout.module.scss'

// import styles from './Workout.module.scss'
// import { IWorkout, IWorkoutDataSingle } from '@/interfaces/workout.interface'
// import WorkoutService from '@/services/workout/workout.service'

// const Workout: FC<IWorkoutDataSingle> = () => {
// 	const { query } = useRouter()

// 	const { data, isSuccess, isLoading } = useQuery(
// 		['get workout', query.id],
// 		() => WorkoutService.getById(String(query.id)),
// 		{
// 			onSuccess: data => data
// 		}
// 	)

// 	return (
// 		<>
// 			<div
// 				className={cn(styles.wrapper, stylesLayout.otherPage)}
// 				style={{
// 					backgroundImage: `url('/images/workout-bg.jpg')`,
// 					height: 356
// 				}}
// 			>
// 				{/* <h1>{workout.name}</h1> */}
// 				<Header backLink='/workouts' />

// 				{isSuccess && (
// 					<div>
// 						<time className={styles.time}>{data.id}</time>
// 						<h1 className={styles.heading}>{data.name}</h1>
// 					</div>
// 				)}
// 			</div>

// 			<div
// 				className='wrapper-inner-page'
// 				style={{ paddingLeft: 0, paddingRight: 0 }}
// 			>
// 				<div style={{ width: '90%', margin: '0 auto' }}>
// 					{/* {errorCompleted && <Alert type='error' text={errorCompleted} />} */}
// 				</div>
// 			</div>
// 		</>
// 	)
// }

// export default Workout
