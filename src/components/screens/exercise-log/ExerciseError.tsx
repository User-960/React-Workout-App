import { FC } from 'react'

import Alert from '@/components/ui/alert/Alert'

interface IExerciseErrorProps {
	errors: any[]
}

const ExerciseError: FC<IExerciseErrorProps> = ({ errors }) => {
	return (
		<div style={{ width: '90%', margin: '0 auto' }}>
			{errors.map((error, index) => (
				<Alert key={error + index} type='error' text={error} />
			))}
		</div>
	)
}

export default ExerciseError
