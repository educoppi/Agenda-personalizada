import { NavLink } from 'react-router-dom'

const classeDoLink = ({ isActive }) => (isActive ? 'ativo' : '')

function Navbar() {
  return (
    <nav className="navbar" aria-label="Navegação principal">
      <NavLink to="/" end className={classeDoLink}>
        <span className="icone" aria-hidden="true">🏡</span>
        Home
      </NavLink>
      <NavLink to="/canteiros" end className={classeDoLink}>
        <span className="icone" aria-hidden="true">🌱</span>
        Canteiros
      </NavLink>
      <NavLink to="/canteiros/novo" className={classeDoLink}>
        <span className="icone" aria-hidden="true">➕</span>
        Novo
      </NavLink>
    </nav>
  )
}

export default Navbar
