import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/field/Field'
import Loader from '@/components/ui/loader/Loader'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import styles from './Auth.module.scss'
import { IAuthFields } from '@/interfaces/form.interface'

const isLoading: boolean = false
const isLoadingAuth: boolean = false

const Auth: FC = () => {
	const [type, setType] = useState<string>('auth')

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
		/*TODO: type*/
		console.log(data)
	}

	return (
		<>
			<Layout meta={meta} heading='Sign in' bgImage='/images/auth-bg.png' />
			<div className='wrapper-inner-page'>
				{(isLoading || isLoadingAuth) && <Loader />}

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
						pattern={
							/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{4,}/g
						}
					/>

					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('auth')}>Sing in</Button>
						<Button clickHandler={() => setType('reg')}>Sing up</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
