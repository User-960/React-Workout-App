import { FC } from 'react'
import { Control, Controller } from 'react-hook-form'
import ReactSelect, { Props } from 'react-select'

import Loader from '@/components/ui/loader/Loader'

import { useListExercises } from '@/components/hooks/useListExercises'

import { IExercise } from '@/interfaces/exercise.interface'
import { IWorkoutFields } from '@/interfaces/form.interface'

interface IOption {
	value: number
	label: string
}

interface ISelectExercisesProps extends Props<any> {
	control: Control<IWorkoutFields, any>
}

const SelectExercises: FC<ISelectExercisesProps> = ({ control }) => {
	const { data, isLoading } = useListExercises()

	const transformDataToOptions = (data: IExercise[]) =>
		data.map((exercise: IExercise) => ({
			value: exercise.id,
			label: exercise.name
		}))

	const getValue = (value: number[]) =>
		value
			? transformDataToOptions(data).find(option =>
					value.find(num => option.value === num)
			  )
			: []

	if (isLoading) return <Loader />

	return (
		<Controller
			name='exerciseIds'
			control={control}
			render={({ field: { value, onChange } }) => (
				<ReactSelect
					isMulti
					classNamePrefix='select2-selection'
					placeholder='Exercises...'
					options={transformDataToOptions(data)}
					value={getValue(value)}
					onChange={newValue =>
						onChange((newValue as IOption | any).map((value: number) => value))
					}
				/>
			)}
		/>
	)
}

export default SelectExercises
