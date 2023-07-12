import { FC, useState } from 'react'
import { Control, Controller } from 'react-hook-form'
import ReactSelect, { OnChangeValue, Props } from 'react-select'

import { IExercise } from '@/interfaces/exercise.interface'
import { IWorkoutFields } from '@/interfaces/form.interface'

// export const getValue = (value: string, data: any) =>
// 	value ? data.find((option: any) => option.value === value) : ''

// data.map(
// 						(exercise: IExercise): IOption => ({
// 							value: exercise.id,
// 							label: exercise.name
// 						})
// 					)

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

interface ISelectExercisesProps extends Props<IOption | any> {
	control: Control<IWorkoutFields, any>
	data: IExercise[]
}

const SelectExercises: FC<ISelectExercisesProps> = ({
	control,
	data,
	options = []
}) => {
	const [currentExercises, setCurrentExercises] = useState<string[]>(['', ''])

	const transformData = (data: IExercise[]) =>
		data.map((exercise: IExercise) => ({
			value: exercise.id,
			label: exercise.name
		}))

	const getValue = () => {
		return currentExercises
			? options.filter(e => currentExercises.indexOf(e.value) >= 0)
			: []
	}

	const onChange = (newValue: OnChangeValue<IOption, boolean>) => {
		setCurrentExercises((newValue as IOption[]).map(option => option.label))
	}

	return (
		<Controller
			name='exerciseIds'
			control={control}
			render={({ field: { value } }) => (
				<ReactSelect
					isMulti
					classNamePrefix='select2-selection'
					placeholder='Exercises...'
					options={transformData(data)}
					value={getValue()}
					onChange={onChange}
				/>
			)}
		/>
	)
}

export default SelectExercises
