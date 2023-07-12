import ListWorkouts from '@/components/screens/workout/ListWorkouts'

import { NextPageAuth } from '@/interfaces/page.interface'

const ListWorkoutsPage: NextPageAuth = () => {
	return <ListWorkouts />
}

ListWorkoutsPage.isOnlyUser = true

export default ListWorkoutsPage
