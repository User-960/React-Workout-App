import { FC, useState } from 'react'
import { Control, Controller } from 'react-hook-form'
import ReactSelect, { OnChangeValue, Props } from 'react-select'

import Loader from '@/components/ui/loader/Loader'

import { useListExercises } from '@/components/hooks/useListExercises'

import { IExercise } from '@/interfaces/exercise.interface'
import { IWorkoutFields } from '@/interfaces/form.interface'

// export const getValue = (value: string, data: any) =>
// 	value ? data.find((option: any) => option.value === value) : ''

const options: IOption[] = [
	{
		value: 1,
		label: 'chest'
	},
	{
		value: 2,
		label: 'shoulders'
	},
	{
		value: 3,
		label: 'legs'
	}
]

interface IOption {
	value: number
	label: string
}

interface ISelectExercisesProps extends Props<any> {
	control: Control<IWorkoutFields, any>
}

const SelectExercises: FC<ISelectExercisesProps> = ({ control }) => {
	const [currentExercises, setCurrentExercises] = useState<string[]>([])

	const { data, isLoading } = useListExercises()

	const transformDataToOptions = (data: IExercise[]) =>
		data.map((exercise: IExercise) => ({
			value: exercise.id,
			label: exercise.name
		}))

	const getValue = () => {
		return currentExercises
			? transformDataToOptions(data).filter(
					(option: IOption) => currentExercises.indexOf(option.label) >= 0
			  )
			: []
	}

	const onChange = (newValue: OnChangeValue<IOption, boolean>) => {
		setCurrentExercises((newValue as IOption[]).map(option => option.label))
	}

	if (isLoading) return <Loader />

	return (
		<Controller
			name='exerciseIds'
			control={control}
			render={({ field: { value } }) => (
				<ReactSelect
					isMulti
					classNamePrefix='select2-selection'
					placeholder='Exercises...'
					options={transformDataToOptions(data)}
					value={getValue()}
					onChange={onChange}
				/>
			)}
		/>
	)
}

export default SelectExercises
