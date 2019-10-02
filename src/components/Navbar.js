import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = props => {
  // setTimeout(() => {
  //   props.history.push('/about');
  // }, 2000);

  return (
    <nav className="nav-wrapper red darken-3">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="brand-logo">Poke'Times</a>
      <ul className="right">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Navbar);
