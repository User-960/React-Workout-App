import Image from 'next/image'
import { FC } from 'react'

const Loader: FC = () => {
	return (
		<Image
			src={'/images/three-dots.svg'}
			alt='loader'
			width={120}
			height={30}
			priority={true}
		/>
	)
}

export default Loader
