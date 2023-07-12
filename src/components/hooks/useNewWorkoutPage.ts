import { useMutation } from '@tanstack/react-query'
import { useMemo, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import {
	IWorkoutFields,
	IWorkoutFieldsSelect
} from '@/interfaces/form.interface'
import WorkoutService from '@/services/workout/workout.service'

export const useNewWorkoutPage = () => {
	const [errorState, setErrorState] = useState<string>('')

	const { isLoading, isSuccess, mutateAsync } = useMutation(
		['create workout'],
		({ name, exerciseIds }: IWorkoutFields) =>
			WorkoutService.create(name, exerciseIds),
		{
			onSuccess: data => {
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
		control,
		formState: { errors },
		reset
	} = useForm<IWorkoutFields>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<
		IWorkoutFieldsSelect | IWorkoutFields
	> = async data => {
		await mutateAsync({
			name: data.name,
			exerciseIds: data.exerciseIds.map((ex: any) => ex.value)
		})
	}

	return useMemo(
		() => ({
			register,
			handleSubmit,
			control,
			errors,
			errorState,
			isSuccess,
			isLoading,
			onSubmit
		}),
		[errors, isLoading, isSuccess]
	)
}
