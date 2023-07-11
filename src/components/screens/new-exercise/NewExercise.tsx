import { useMutation } from '@tanstack/react-query'
import cn from 'clsx'
import Image from 'next/image'
import { FC, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import Alert from '@/components/ui/alert/Alert'
import Button from '@/components/ui/button/Button'
import ExerciseField from '@/components/ui/field/ExerciseField/ExerciseField'
import Loader from '@/components/ui/loader/Loader'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import { SERVER_URL } from '../../../../const'

import styles from './NewExercise.module.scss'
import { getIconPath } from './icon-path.util'
import { IExercise } from '@/interfaces/exercise.interface'
import { IExerciseFields } from '@/interfaces/form.interface'
import ExerciseService from '@/services/exercise/exercise.service'

const data: string[] = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

const NewExercise: FC = () => {
	const [imageName, setImageName] = useState<string>('')
	const [errorState, setErrorState] = useState<string>('')

	const meta: IMeta = {
		title: 'Home',
		description: 'Sport is a life'
	}

	const { isLoading, isSuccess, mutateAsync } = useMutation(
		['create exercise'],
		({ name, times, iconPath }: IExercise) =>
			ExerciseService.create(name, times, iconPath),
		{
			onSuccess: (data: any) => {
				console.log(data)
				reset()
			},
			onError: (error: Error) => {
				if (error) {
					setErrorState(error.message)
				}
			}
		}
	)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm<IExerciseFields>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IExerciseFields> = async data => {
		await mutateAsync(data)
	}

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
				{isSuccess && <Alert text='Exercise is created' />}

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
