import { FC } from 'react'
import {
	Message,
	Path,
	UseFormRegister,
	Validate,
	ValidationRule
} from 'react-hook-form'

import styles from '../Field.module.scss'

import { IExerciseFields } from '@/interfaces/form.interface'

interface IFieldProps {
	placeholder: string
	type: string
	register: UseFormRegister<IExerciseFields>
	name: Path<IExerciseFields>
	required: Message | ValidationRule<boolean>
	error?: string
	valueAsNumber?: boolean
}

const Field: FC<IFieldProps> = ({
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

export default Field
