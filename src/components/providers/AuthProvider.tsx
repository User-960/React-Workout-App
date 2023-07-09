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

import { TypeComponentAuthFields } from '@/interfaces/page.interface'
import { TypeUser } from '@/interfaces/user.interface'

type TypeContext = {
	user: TypeUser
	setUser: Dispatch<SetStateAction<TypeUser>>
}

export const AuthContext = createContext<TypeContext>({
	user: null,
	setUser: () => {}
})

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	children,
	Component: { isOnlyUser }
}) => {
	const [user, setUser] = useState<TypeUser>(null)

	if (isOnlyUser && !user) return <NotFound />

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
