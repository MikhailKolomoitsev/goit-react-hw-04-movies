import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'

export default function Navigation() {
  return (
    <>
      <header className={styles.header}>
        <NavLink
          activeClassName={styles.activeLink}
          className={styles.link}
          to="/"
          exact
        >
          HomePage
        </NavLink>
        <NavLink
          activeClassName={styles.activeLink}
          className={styles.link}
          to="/movies"
        >
          Movies
        </NavLink>
      </header>
    </>
  )
}
