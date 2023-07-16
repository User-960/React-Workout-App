// import dynamic from 'next/dynamic'
import { GetStaticProps } from 'next'

import ExerciseLog from '@/components/screens/exercise-log/ExerciseLog'

import { NextPageAuth } from '@/interfaces/page.interface'
import ExerciseLogService from '@/services/exercise/exercise-log.service'

// const DynamicExerciseLog = dynamic(
// 	() => import('../../../components/screens/exercise-log/ExerciseLog'),
// 	{
// 		ssr: false
// 	}
// )

const WorkoutPage: NextPageAuth = () => {
	return <ExerciseLog />
}

WorkoutPage.isOnlyUser = true

export default WorkoutPage
