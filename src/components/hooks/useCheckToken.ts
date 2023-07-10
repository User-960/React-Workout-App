import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAuth } from './useAuth'
import { ENUSER } from '@/config/app.constants'

export const useCheckToken = () => {
	const { pathname } = useRouter()
	const { isAuth, setIsAuth } = useAuth()

	useEffect(() => {
		const token = Cookies.get(ENUSER.TOKEN)
		if (!token) setIsAuth(false)
	}, [isAuth, pathname])
}
