import { FC } from 'react'

import styles from '../ExerciseLog.module.scss'

interface IExerciseTableProps {
	rows: string[]
}

const ExerciseTable: FC<IExerciseTableProps> = ({ rows }) => {
	return (
		<div className={styles.row}>
			{rows.map((row: string) => (
				<div key={row}>
					<span>{row}</span>
				</div>
			))}
		</div>
	)
}

export default ExerciseTable
