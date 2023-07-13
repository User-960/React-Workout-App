import { useQuery } from '@tanstack/react-query'
import { GetServerSideProps, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import ListWorkouts from '@/components/screens/workout/ListWorkouts'

import { NextPageAuth } from '@/interfaces/page.interface'
import { IWorkoutData } from '@/interfaces/workout.interface'
import WorkoutService from '@/services/workout/workout.service'

const ListWorkoutsPage: NextPageAuth = () => {
	return <ListWorkouts />
}

ListWorkoutsPage.isOnlyUser = true

export default ListWorkoutsPage

// --------------------------------------------------------
// import { useQuery } from '@tanstack/react-query'
// import { GetServerSideProps, GetStaticProps } from 'next'
// import { useRouter } from 'next/router'

// import ListWorkouts from '@/components/screens/workout/ListWorkouts'

// import { NextPageAuth } from '@/interfaces/page.interface'
// import { IWorkoutData } from '@/interfaces/workout.interface'
// import WorkoutService from '@/services/workout/workout.service'

// const ListWorkoutsPage: NextPageAuth<IWorkoutData> = ({ workouts }) => {
// 	return <ListWorkouts workouts={workouts} />
// }

// // SSG or ISR with revalidate
// export const getStaticProps: GetStaticProps<IWorkoutData> = async () => {
// 	const workouts = await WorkoutService.getAll()
// 	return {
// 		props: { workouts },
// 		revalidate: 60
// 	}
// }

// // SSR
// // export const getServerSideProps: GetServerSideProps<
// // 	IWorkoutData
// // > = async () => {
// // 	const workouts = await WorkoutService.getAll()
// // 	return {
// // 		props: { workouts }
// // 	}
// // }

// ListWorkoutsPage.isOnlyUser = true

// export default ListWorkoutsPage
