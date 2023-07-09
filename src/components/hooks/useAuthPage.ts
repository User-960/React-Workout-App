import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useAuth } from './useAuth'
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

	const { user } = useAuth()

	useEffect(() => {
		if (user) {
			push('/')
		}
	}, [user])

	const { mutateAsync, isLoading } = useMutation(
		['auth'],
		({ email, password }: IAuthFields) =>
			AuthService.main(email, password, type),
		{
			onSuccess: data => {
				reset()
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
