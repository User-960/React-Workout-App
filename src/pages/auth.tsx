import Auth from '@/components/screens/auth/Auth'

import { NextPageAuth } from '@/interfaces/page.interface'

const AuthPage: NextPageAuth = () => {
	return <Auth />
}

AuthPage.isOnlyUser = true

export default AuthPage
