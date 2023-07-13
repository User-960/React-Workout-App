import { useQuery } from '@tanstack/react-query'
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'

import Workout from '@/components/screens/workout/Workout'

import { NextPageAuth } from '@/interfaces/page.interface'
import { IWorkoutDataSingle } from '@/interfaces/workout.interface'
import WorkoutService from '@/services/workout/workout.service'

const WorkoutPage: NextPageAuth = () => {
	return <Workout />
}

WorkoutPage.isOnlyUser = true

export default WorkoutPage

// ----------------------------------------------------------
// import { useQuery } from '@tanstack/react-query'
// import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
// import { useRouter } from 'next/router'
// import { ParsedUrlQuery } from 'querystring'

// import Workout from '@/components/screens/workout/Workout'

// import { NextPageAuth } from '@/interfaces/page.interface'
// import { IWorkoutDataSingle } from '@/interfaces/workout.interface'
// import WorkoutService from '@/services/workout/workout.service'

// const WorkoutPage: NextPageAuth<IWorkoutDataSingle> = ({ workout }) => {
// 	return <Workout workout={workout} />
// }

// interface Params extends ParsedUrlQuery {
// 	id: string
// }

// export const getStaticPaths: GetStaticPaths<Params> = async () => {
// 	const workouts = await WorkoutService.getAll()
// 	return {
// 		paths: workouts.map((workout: any) => ({
// 			params: {
// 				id: workout.id.toString()
// 			}
// 		})),
// 		fallback: 'blocking'
// 	}
// }

// export const getStaticProps: GetStaticProps<IWorkoutDataSingle> = async ({
// 	params
// }) => {
// 	const workout = await WorkoutService.getById(String(params?.id))
// 	return {
// 		props: { workout },
// 		revalidate: 60
// 	}
// }

// // SSG or ISR with revalidate
// // export const getStaticProps: GetStaticProps<IWorkoutData> = async () => {
// // 	const workouts = await WorkoutService.getAll()
// // 	return {
// // 		props: { workouts },
// // 		revalidate: 60
// // 	}
// // }

// // SSR
// // export const getServerSideProps: GetServerSideProps<
// // 	IWorkoutData
// // > = async () => {
// // 	const workouts = await WorkoutService.getAll()
// // 	return {
// // 		props: { workouts }
// // 	}
// // }

// WorkoutPage.isOnlyUser = true

// export default WorkoutPage
