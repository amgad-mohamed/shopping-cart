import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../css/Navbar/Navbar.css"

function Navbar() {
  return (
    <>
    <div className="nav">
    <NavLink
      to="/home"
      className={({ isActive }) => (isActive ? 'active' : 'inactive')}
    >
      Home
    </NavLink>
    <NavLink
      to="/orders"
      className={({ isActive }) => (isActive ? 'active' : 'inactive')}
    >
      Orders
    </NavLink>
  </div>
    </>
  )
}

export default Navbar