interface IMenuItem {
	title: string
	link: string
}

export const menu: IMenuItem[] = [
	{
		title: 'Workouts',
		link: '/workouts'
	},
	{
		title: 'Create new workout',
		link: '/new-workout'
	},
	{
		title: 'Create new exercise',
		link: '/new-exercise'
	},
	{
		title: 'Profile',
		link: '/profile'
	}
]
