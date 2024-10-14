import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <Link to={'/'}><button>Produtos</button></Link>
      <Link to={'/contacts'}><button>Contato</button></Link>
    </nav>
  )
}

export default Header
