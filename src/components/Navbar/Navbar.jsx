import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext.js'
import { Link } from 'react-router-dom'

const navStyles = {
  backgroundColor: '#e3f2fd'
}

const Navbar = () => {
  const { isAuth, user } = useContext(AuthContext)
  console.log(user);

  return (
    <nav className="navbar navbar-light" style={navStyles}>
      <Link to={'/'}>
        <span className="navbar-brand">
          Photify
        </span>
      </Link>
      {
        isAuth
          ? (
            <ul className="navbar-nav">
              <li className="nav-item">
                <span className="nav-link">{user.first_name}</span>
              </li>
              <Link to={'/profile/' + user.id}>
                <li className="nav-item">
                  <span className="nav-link">Perfil</span>
                </li>
              </Link>
              <Link to={'/logout'}>
                <li className="nav-item">
                  <span className="nav-link">Cerrar sesión</span>
                </li>
              </Link>
              <Link to={'/example'}>
                <li className="nav-item">
                  <span className="nav-link">Example</span>
                </li>
              </Link>
            </ul>
          )
          : (
            <ul className="navbar-nav">
              <Link to={'/signup'}>
                <li className="nav-item">
                  <span className="nav-link">Registro</span>
                </li>
              </Link>
              <Link to={'/login'}>
                <li className="nav-item">
                  <span className="nav-link">Iniciar sesión</span>
                </li>
              </Link>
            </ul>
          )
      }

    </nav>
  )
}

export default Navbar