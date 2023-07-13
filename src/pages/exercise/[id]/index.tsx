import ExerciseLog from '@/components/screens/exercise-log/ExerciseLog'

import { NextPageAuth } from '@/interfaces/page.interface'

const WorkoutPage: NextPageAuth = () => {
	return <ExerciseLog />
}

WorkoutPage.isOnlyUser = true

export default WorkoutPage
