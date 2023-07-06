import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

const Profile: FC = () => {
	const meta: IMeta = {
		title: 'Profile',
		description: 'Profile page'
	}

	return <Layout meta={meta}>Profile</Layout>
}

export default Profile
