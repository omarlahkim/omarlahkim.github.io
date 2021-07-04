import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/styles.css";

function NavBar() {
  const navStyle = {
    color: "#C1C1C1",
    textDecoration: "none",
    fontSize: 13,
  };

  return (
    <nav>
      <NavLink activeStyle={{ color: "#fff" }} style={navStyle} to="/">
        <h3 className="logo">OL</h3>
      </NavLink>
      <ul className="nav-links">
        <NavLink
          activeStyle={{ color: "#fff" }}
          style={navStyle}
          to="/playground"
        >
          <li>Playground</li>
        </NavLink>
        <NavLink activeStyle={{ color: "#fff" }} style={navStyle} to="/work">
          <li>Work</li>
        </NavLink>
        <NavLink activeStyle={{ color: "#fff" }} style={navStyle} to="/about">
          <li>About</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
