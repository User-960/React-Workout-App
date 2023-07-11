import { useMutation } from '@tanstack/react-query'
import { FC } from 'react'

import styles from './NewExercise.module.scss'
import { IExercise } from '@/interfaces/exercise.interface'
import ExerciseService from '@/services/exercise/exercise.service'

const NewExercise: FC = () => {
	const { error } = useMutation(
		['create exercise'],
		({ name, times, iconPath }: IExercise) =>
			ExerciseService.create(name, times, iconPath),
		{
			onSuccess: (data: any) => {
				console.log(data)
			}
		}
	)

	return <div>NewExercise</div>
}

export default NewExercise
