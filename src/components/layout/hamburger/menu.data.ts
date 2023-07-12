interface IMenuItem {
	title: string
	link: string
}

export const menu: IMenuItem[] = [
	{
		title: 'New workout',
		link: '/new-workout'
	},
	{
		title: 'New exercise',
		link: '/new-exercise'
	},
	{
		title: 'Profile',
		link: '/profile'
	},
	{
		title: 'Workouts',
		link: '/workouts'
	}
	// {
	// 	title: 'Workout',
	// 	link: '/workout'
	// }
]
