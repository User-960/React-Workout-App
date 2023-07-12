import { FC } from 'react'
import { Message, Path, UseFormRegister, ValidationRule } from 'react-hook-form'

import styles from '../Field.module.scss'

import { IWorkoutFields } from '@/interfaces/form.interface'

interface IWorkoutFieldProps {
	placeholder: string
	type: string
	register: UseFormRegister<IWorkoutFields>
	name: Path<IWorkoutFields>
	required: Message | ValidationRule<boolean>
	error?: string
	valueAsNumber?: boolean
}

const WorkoutField: FC<IWorkoutFieldProps> = ({
	register,
	name,
	required,
	placeholder,
	type,
	error,
	valueAsNumber
}) => {
	return (
		<div style={{ marginBottom: '1rem' }}>
			<input
				placeholder={placeholder}
				type={type}
				{...register(name, { required, valueAsNumber })}
				className={styles.input}
			/>
			{error && <div className='error'>{error}</div>}
		</div>
	)
}

export default WorkoutField
