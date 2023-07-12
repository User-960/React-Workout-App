import cn from 'clsx'
import { FC } from 'react'

import Alert from '@/components/ui/alert/Alert'
import Button from '@/components/ui/button/Button'
import WorkoutField from '@/components/ui/field/WorkoutField/WorkoutField'
import Loader from '@/components/ui/loader/Loader'

import { useNewWorkoutPage } from '@/components/hooks/useNewWorkoutPage'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import styles from './NewExercise.module.scss'

const NewWorkout: FC = () => {
	const meta: IMeta = {
		title: 'New Workout',
		description: 'Create new workout'
	}

	const {
		register,
		handleSubmit,
		errors,
		errorState,
		isLoading,
		isSuccess,
		onSubmit
	} = useNewWorkoutPage()

	return (
		<>
			<Layout
				meta={meta}
				heading='Create new workout'
				bgImage='/images/new-workout-bg.jpg'
			/>
			<div className='wrapper-inner-page'>
				{isLoading && <Loader />}
				{errorState && <Alert type={'error'} text={errorState} />}
				{isSuccess && <Alert text='Workout is created' />}

				<form onSubmit={handleSubmit(onSubmit)}>
					<WorkoutField
						type='text'
						placeholder='Enter name'
						error={errors?.name?.message}
						name='name'
						register={register}
						required={'*Name is required!'}
					/>

					<WorkoutField
						type='number'
						placeholder='Enter exercises'
						error={errors?.exerciseIds?.message}
						name='exerciseIds'
						register={register}
						required={'*Exercises is required and must be a number!'}
						valueAsNumber={true}
					/>

					<Button clickHandler={() => {}}>Create new</Button>
				</form>
			</div>
		</>
	)
}

export default NewWorkout
