import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/field/Field'
import Loader from '@/components/ui/loader/Loader'

import { useAuth } from '@/components/hooks/useAuth'
import { useAuthPage } from '@/components/hooks/useAuthPage'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import styles from './Auth.module.scss'

const Auth: FC = () => {
	const meta: IMeta = {
		title: 'Authorization',
		description: 'Page authorization'
	}

	const { setType, register, handleSubmit, errors, isLoading, onSubmit } =
		useAuthPage()

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
