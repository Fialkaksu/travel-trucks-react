import { Link, NavLink } from 'react-router-dom'
import clsx from 'clsx'

import Container from '@components/Container/Container'
import logo from '@assets/logo.svg'

import css from './Header.module.css'

const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <nav className={css.nav}>
          <Link to="/" className={css.logo}>
            <img src={logo} alt="TravelTrucks logo" />
          </Link>

          <ul className={css.list}>
            <li className={css.item}>
              <NavLink
                className={({ isActive }) => clsx(css.link, isActive && css.active)}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className={css.item}>
              <NavLink
                className={({ isActive }) => clsx(css.link, isActive && css.active)}
                to="/catalog"
              >
                Catalog
              </NavLink>
            </li>
            <li className={css.item}>
              <NavLink
                className={({ isActive }) => clsx(css.link, isActive && css.active)}
                to="/favorites"
              >
                Favorites
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header