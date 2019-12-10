import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => {
    return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="navbar-brand">
        ReactNote App
        </div>

        <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
      </li>
    </ul>
    </nav>
    )
}