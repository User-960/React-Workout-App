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
		title: 'Create new',
		link: '/new-workout'
	},
	{
		title: 'Profile',
		link: '/profile'
	}
]
