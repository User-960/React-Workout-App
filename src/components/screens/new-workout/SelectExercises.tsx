import { FC } from 'react'
import { Control, Controller } from 'react-hook-form'
import ReactSelect, { Props } from 'react-select'

import Loader from '@/components/ui/loader/Loader'

import { useListExercises } from '@/components/hooks/useListExercises'

import { IExercise } from '@/interfaces/exercise.interface'
import { IWorkoutFields, IWorkoutOption } from '@/interfaces/form.interface'

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
			rules={{ required: 'Exercise is required!' }}
			render={({ field: { value, onChange }, fieldState: { error } }) => (
				<div>
					<ReactSelect
						isMulti
						classNamePrefix='select2-selection'
						placeholder='Exercises...'
						options={transformDataToOptions(data)}
						value={getValue(value)}
						onChange={newValue =>
							onChange(
								(newValue as IWorkoutOption | any).map((value: number) => value)
							)
						}
					/>
					{error && <div className='error'>{error.message}</div>}
				</div>
			)}
		/>
	)
}

export default SelectExercises
