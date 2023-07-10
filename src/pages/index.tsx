import Home from '@/components/screens/home/Home'

import { NextPageAuth } from '@/interfaces/page.interface'

const HomePage: NextPageAuth = () => {
	return <Home />
}

HomePage.isOnlyUser = true

export default HomePage
