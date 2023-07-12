import { FC } from 'react'
import { Message, Path, UseFormRegister, ValidationRule } from 'react-hook-form'

import styles from '../Field.module.scss'

import { IAuthFields } from '@/interfaces/form.interface'

interface IAuthFieldProps {
	placeholder: string
	type: string
	register: UseFormRegister<IAuthFields>
	name: Path<IAuthFields>
	required: Message | ValidationRule<boolean>
	pattern?: ValidationRule<RegExp>
	error?: string
}

const AuthField: FC<IAuthFieldProps> = ({
	register,
	name,
	required,
	placeholder,
	type,
	error,
	pattern
}) => {
	return (
		<div style={{ marginBottom: '1rem' }}>
			<input
				placeholder={placeholder}
				type={type}
				{...register(name, { required, pattern })}
				className={styles.input}
			/>
			{error && <div className='error'>{error}</div>}
		</div>
	)
}

export default AuthField
