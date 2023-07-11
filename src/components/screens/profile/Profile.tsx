import cn from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

import Loader from '@/components/ui/loader/Loader'

import Header from '@/components/layout/header/Header'
import Meta from '@/components/seo/Meta'
import { IMeta } from '@/components/seo/meta.interface'

import stylesLayout from '../../layout/Layout.module.scss'

import styles from './Profile.module.scss'
import { useProfile } from './useProfile'

const Profile: FC = () => {
	const meta: IMeta = {
		title: 'Profile',
		description: 'Profile page'
	}

	const { data, isLoading } = useProfile()

	return (
		<Meta title={meta.title} description={meta.description}>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{ backgroundImage: `url(/images/profile-bg.jpg)`, height: 356 }}
			>
				<Header backLink={'/'} />

				<div className={styles.center}>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<Image
								src={'/images/header/user.svg'}
								alt='profile'
								width={56}
								height={56}
								priority
							/>
							<h1 className={stylesLayout.heading}>{data?.email}</h1>
						</>
					)}
				</div>
			</div>

			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div className={styles.before_after}>
					{data?.image.map((image, index) => (
						<div key={`image_${index}`}>
							<div className={styles.heading}>
								{index === 1 ? 'After' : 'Before'}
								<Image src={image} alt='photo' width={200} height={300} />
							</div>
						</div>
					))}
				</div>
			</div>
		</Meta>
	)
}

export default Profile
