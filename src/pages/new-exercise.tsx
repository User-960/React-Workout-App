import NewExercise from '@/components/screens/new-exercise/NewExercise'

import { NextPageAuth } from '@/interfaces/page.interface'

const NewExercisePage: NextPageAuth = () => {
	return <NewExercise />
}

NewExercisePage.isOnlyUser = true

export default NewExercisePage
