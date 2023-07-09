import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/field/Field'
import Loader from '@/components/ui/loader/Loader'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import styles from './Auth.module.scss'
import { IAuthFields } from '@/interfaces/form.interface'
import AuthService from '@/services/auth.service'

const Auth: FC = () => {
	const [type, setType] = useState('login')

	const { push } = useRouter()

	const meta: IMeta = {
		title: 'Authorization',
		description: 'Page authorization'
	}

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
				alert('success')
				reset()
				push('/')
			}
		}
	)

	const onSubmit: SubmitHandler<IAuthFields> = async data => {
		await mutateAsync(data)
	}

	return (
		<>
			<Layout meta={meta} heading='Sign in' bgImage='/images/auth-bg.png' />
			<div className='wrapper-inner-page'>
				{isLoading && <Loader />}

				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						type='text'
						placeholder='Enter email'
						error={errors?.email?.message}
						name='email'
						register={register}
						required={'*Email is required! Example: person@mail.com'}
						pattern={
							/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
						}
					/>
					<Field
						type='password'
						placeholder='Enter password'
						error={errors?.password?.message}
						name='password'
						register={register}
						required={
							'*Password is required! It must include: 0-9, a-Z, A-Z, !@#$%^&*'
						}
						// pattern={
						// 	/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{4,}/g
						// }
					/>

					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('login')}>Sing in</Button>
						<Button clickHandler={() => setType('register')}>Sing up</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
