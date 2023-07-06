import Profile from '@/components/screens/profile/Profile'

import { NextPageAuth } from '@/interfaces/page.interface'

const ProfilePage: NextPageAuth = () => {
	return <Profile />
}

ProfilePage.isOnlyUser = true

export default ProfilePage
