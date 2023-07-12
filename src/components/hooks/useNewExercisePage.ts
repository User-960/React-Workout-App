import { useMutation } from '@tanstack/react-query'
import { useMemo, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IExerciseFields } from '@/interfaces/form.interface'
import ExerciseService from '@/services/exercise/exercise.service'

export const useNewExercisePage = () => {
	const [errorState, setErrorState] = useState<string>('')

	const { isLoading, isSuccess, mutateAsync } = useMutation(
		['create exercise'],
		({ name, times, iconPath }: IExerciseFields) =>
			ExerciseService.create(name, times, iconPath),
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
		formState: { errors },
		reset,
		control
	} = useForm<IExerciseFields>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IExerciseFields> = async data => {
		await mutateAsync(data)
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
