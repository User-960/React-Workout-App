import cn from 'clsx'
import Image from 'next/image'
import { FC } from 'react'
import { Controller } from 'react-hook-form'

import Alert from '@/components/ui/alert/Alert'
import Button from '@/components/ui/button/Button'
import ExerciseField from '@/components/ui/field/ExerciseField/ExerciseField'
import Loader from '@/components/ui/loader/Loader'

import { useNewExercisePage } from '@/components/hooks/useNewExercisePage'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import { SERVER_URL } from '../../../../const'

import styles from './NewExercise.module.scss'
import { getIconPath } from './icon-path.util'

const data: string[] = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

const NewExercise: FC = () => {
	const meta: IMeta = {
		title: 'New Exercise',
		description: 'Create new exercise'
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
	} = useNewExercisePage()

	return (
		<>
			<Layout
				meta={meta}
				heading='Create new exercise'
				backLink='/new-workout'
				bgImage='/images/new-exercise-bg.jpg'
			/>
			<div className='wrapper-inner-page'>
				{isLoading && <Loader />}
				{errorState && <Alert type={'error'} text={errorState} />}
				{isSuccess && <Alert text='Exercise created successfully' />}

				<form onSubmit={handleSubmit(onSubmit)}>
					<ExerciseField
						type='text'
						placeholder='Enter name'
						error={errors?.name?.message}
						name='name'
						register={register}
						required={'*Name is required!'}
					/>

					<ExerciseField
						type='number'
						placeholder='Enter times'
						error={errors?.times?.message}
						name='times'
						register={register}
						required={'*Times is required and must be a number!'}
						valueAsNumber={true}
					/>

					<Controller
						name='iconPath'
						control={control}
						render={({ field: { value, onChange } }) => (
							<div className={styles.images}>
								{data.map((name: string) => (
									<Image
										key={`ex img ${name}`}
										src={`${SERVER_URL}${getIconPath(name)}`}
										alt={name}
										className={cn({
											[styles.active]: value === getIconPath(name)
										})}
										onClick={() => onChange(getIconPath(name))}
										draggable={false}
										height={45}
										width={45}
										priority
									/>
								))}
							</div>
						)}
					/>

					{errors?.iconPath && (
						<div className='error'>{errors?.iconPath.message}</div>
					)}

					<Button clickHandler={() => {}}>Create new</Button>
				</form>
			</div>
		</>
	)
}

export default NewExercise
