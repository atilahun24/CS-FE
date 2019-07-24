import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav className="border border-success" id="navBar">
    <NavLink to ='/cars'>  Back to All Reviews  </NavLink>
  </nav>
)

export default Nav
