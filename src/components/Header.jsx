import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export function Header () {
  return (
    <header>
      <div className={styles.logo}>
        <p>ChoreMaster</p>
      </div>
      <div className={styles.background}>
        <Link className={styles.link} to='/'>
          Home
        </Link>
        <Link className={styles.link} to='/about'>
          About
        </Link>

        <Link className={styles.link} to='/todo'>
          ToDo
        </Link>
        <Link className={styles.link} to='/priority'>
          Priority
        </Link>
      </div>
    </header>
  )
}
