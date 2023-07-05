import { FC } from 'react'
import styles from './Header.module.scss'

const Header: FC = () => {
  return (
    <header>
      <h2 className={styles.title}>Header</h2>
    </header>
  )
}

export default Header