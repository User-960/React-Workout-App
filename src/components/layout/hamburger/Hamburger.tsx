import { FC } from 'react'
import { CgClose, CgMenuRight } from 'react-icons/cg'

import { useOnClickOutside } from '@/components/hooks/useOnClickOutside'

import styles from './Hamburger.module.scss'
import Menu from './Menu'

const Hamburger: FC = () => {
	const { ref, isShow, setIsShow } = useOnClickOutside(false)
	return (
		<div className={styles.wrapper}>
			<button onClick={() => setIsShow(!false)}>
				{isShow ? <CgClose /> : <CgMenuRight />}
			</button>
			<menu ref={ref}>
				<Menu isShow={isShow} setIsShow={setIsShow} />
			</menu>
		</div>
	)
}

export default Hamburger
