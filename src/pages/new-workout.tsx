import NewWorkout from '@/components/screens/new-workout/NewWorkout'

import { NextPageAuth } from '@/interfaces/page.interface'

const NewWorkoutPage: NextPageAuth = () => {
	return <NewWorkout />
}

NewWorkoutPage.isOnlyUser = true

export default NewWorkoutPage
