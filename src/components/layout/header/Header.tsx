import { FC } from 'react'
import styles from './Header.module.scss'
import { useAuth } from '@/components/hooks/useAuth'
import { FiArrowLeft } from 'react-icons/fi'
import Hamburger from '../hamburger/Hamburger'

const Header: FC = () => {
  const { isAuth } = useAuth()
  return (
    <header className={styles.header}>
      <button onClick={() => { }}>
        <FiArrowLeft />
      </button>

      <Hamburger />
    </header>
  )
}

export default Header