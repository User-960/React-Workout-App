import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IAuthFields } from '@/interfaces/form.interface'
import AuthService from '@/services/auth.service'

export const useAuthPage = () => {
	const [type, setType] = useState('login')
	const { push } = useRouter()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IAuthFields>({
		mode: 'onChange'
	})

	const { mutateAsync, isLoading } = useMutation(
		['auth'],
		({ email, password }: IAuthFields) =>
			AuthService.main(email, password, type),
		{
			onSuccess: data => {
				reset()
				setTimeout(() => {
					push('/')
				}, 2000)
			}
		}
	)

	const onSubmit: SubmitHandler<IAuthFields> = async data => {
		await mutateAsync(data)
	}

	return useMemo(
		() => ({
			setType,
			register,
			handleSubmit,
			errors,
			isLoading,
			onSubmit
		}),
		[errors, isLoading]
	)
}
