import Cookies from 'js-cookie'
import {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	useState
} from 'react'
import { createContext } from 'react'

import NotFound from '../screens/not-found/NotFound'

import { ENUSER } from '@/config/app.constants'
import { TypeComponentAuthFields } from '@/interfaces/page.interface'
import { TypeUser } from '@/interfaces/user.interface'

type TypeContext = {
	user: TypeUser
	setUser: Dispatch<SetStateAction<TypeUser>>
	isAuth: boolean
	setIsAuth: Dispatch<SetStateAction<boolean>>
}

export const AuthContext = createContext<TypeContext>({
	user: null,
	setUser: () => {},
	isAuth: false,
	setIsAuth: () => {}
})

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	children,
	Component: { isOnlyUser }
}) => {
	const [user, setUser] = useState<TypeUser>(null)
	const [isAuth, setIsAuth] = useState<boolean>(!!Cookies.get(ENUSER.TOKEN))

	if (isOnlyUser && !isAuth) return <NotFound />

	return (
		<AuthContext.Provider value={{ user, setUser, isAuth, setIsAuth }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
