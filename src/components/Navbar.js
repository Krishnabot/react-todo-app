import React from 'react'

import { NavLink } from "react-router-dom"

const Navbar = () => {

  const links = [
    ...
  ]

 return (
  <li key={link.id}>
    <NavLink to={link.path} activeClassName="active-link" exact>
      {link.text}
    </NavLink>
  </li>
);
}
export default Navbar
