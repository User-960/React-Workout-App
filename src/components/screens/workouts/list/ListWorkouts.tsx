import { GetServerSideProps } from 'next'
import { FC, useState } from 'react'

import Alert from '@/components/ui/alert/Alert'
import Loader from '@/components/ui/loader/Loader'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import Workout from '../detail/Workout'
import styles from '../detail/Workout.module.scss'

import WorkoutItem from './WorkoutItem'
import { useWorkouts } from './useWorkouts'
import { IWorkout, IWorkoutData } from '@/interfaces/workout.interface'

const ListWorkouts: FC = () => {
	const meta: IMeta = {
		title: 'Workouts',
		description: 'Workouts list'
	}

	const {
		data,
		isSuccess,
		isLoading,
		mutateAsync,
		isSuccessMutate,
		errorState
	} = useWorkouts()

	return (
		<>
			<Layout
				meta={meta}
				bgImage='/images/workout-bg.jpg'
				heading='Workout list'
			/>

			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				{errorState && <Alert text={errorState} type='error' />}
				{isSuccessMutate && <Alert text='Workout log created' />}
				{isLoading && <Loader />}
				{isSuccess && (
					<div className={styles.wrapper}>
						{data?.map((workout: IWorkout) => (
							<WorkoutItem
								key={workout.id}
								workout={workout}
								mutate={mutateAsync}
							/>
						))}
					</div>
				)}

				{isSuccess && data?.length === 0 && (
					<Alert text='Workouts not found' type='warning' />
				)}
			</div>
		</>
	)
}

export default ListWorkouts
