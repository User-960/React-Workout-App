import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/field/Field'
import Loader from '@/components/ui/loader/Loader'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import { IAuthFields } from '@/interfaces/form.interface'

const isLoading: boolean = true
const isLoadingAuth: boolean = false

const Auth: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<IAuthFields>({
		mode: 'onChange'
	})

	const meta: IMeta = {
		title: 'Authorization',
		description: 'Page authorization'
	}

	const onSubmit: SubmitHandler<IAuthFields> = data => {
		console.log(data)
	}

	return (
		<Layout meta={meta} heading='Sign in' bgImage='/images/auth-bg.png'>
			<div className='wrapper-inner-page'>
				{true && <Loader />}

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
						required={'*Password is required!'}
						pattern={
							/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{4,}/g
						}
					/>
					<Button>Let`s go</Button>
				</form>
			</div>
		</Layout>
	)
}

export default Auth
