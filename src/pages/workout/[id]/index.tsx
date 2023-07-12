import Workout from '@/components/screens/workout/Workout'

import { NextPageAuth } from '@/interfaces/page.interface'

const WorkoutPage: NextPageAuth = () => {
	return <Workout />
}

WorkoutPage.isOnlyUser = true

export default WorkoutPage
