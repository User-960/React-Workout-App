import { FC } from 'react'
import styles from './Hamburger.module.scss'
import { CgMenuRight, CgClose } from 'react-icons/cg'
import { useOutside } from '@/components/hooks/useOutside'
import Menu from './Menu'

const Hamburger: FC = () => {
  const { ref, isShow, setIsShow } = useOutside(false)
  return (
    <div className={styles.wrapper}>
      <button onClick={() => { setIsShow(!false) }}>
        {isShow ? <CgClose /> : <CgMenuRight />}
      </button>
      <menu ref={ref}><Menu isShow={isShow} /></menu>
    </div>
  )
}

export default Hamburger