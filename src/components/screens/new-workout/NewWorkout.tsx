import cn from 'clsx'
import Link from 'next/link'
import { FC } from 'react'
import { Controller } from 'react-hook-form'

import Alert from '@/components/ui/alert/Alert'
import Button from '@/components/ui/button/Button'
import WorkoutField from '@/components/ui/field/WorkoutField/WorkoutField'
import Loader from '@/components/ui/loader/Loader'

import { useNewWorkoutPage } from '@/components/hooks/useNewWorkoutPage'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import SelectExercises from './SelectExercises'

const NewWorkout: FC = () => {
	const meta: IMeta = {
		title: 'New Workout',
		description: 'Create new workout'
	}

	const {
		register,
		handleSubmit,
		control,
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
				{isSuccess && <Alert text='Workout created successfully' />}

				<form onSubmit={handleSubmit(onSubmit)}>
					<WorkoutField
						type='text'
						placeholder='Enter name'
						error={errors?.name?.message}
						name='name'
						register={register}
						required={'*Name is required!'}
					/>

					<Link href={'/new-exercise'} className='dark-link'>
						Add new exercise
					</Link>

					<SelectExercises control={control} isMulti />

					<Button>Create</Button>
				</form>
			</div>
		</>
	)
}

export default NewWorkout
