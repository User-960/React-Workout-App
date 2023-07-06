import { FC } from 'react'
import { useForm } from 'react-hook-form'

import Button from '@/components/ui/button/Button'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

const Auth: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})

	const meta: IMeta = {
		title: 'Authorization',
		description: 'Page authorization'
	}

	const onSubmit = (data: any) => {
		console.log(data)
	}

	return (
		<Layout meta={meta} heading='Sign in' bgImage='/images/auth-bg.png'>
			<div className='wrapper-inner-page'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						type='text'
						placeholder='Enter email'
						{...register('email', {
							required: 'Email is required'
						})}
					/>
					<Button>Let`s go</Button>
				</form>
			</div>
		</Layout>
	)
}

export default Auth
