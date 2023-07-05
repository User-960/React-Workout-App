import { FC } from 'react'
import styles from './Header.module.scss'

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h2>Header</h2>
    </header>
  )
}

export default Header