import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/styles.css";

function NavBar() {
  const navStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: 16,
  };

  return (
    <nav>
      <NavLink activeStyle={{ color: "#fff" }} style={navStyle} to="/">
        <img
          className="h-12 w-12"
          src="https://www.digitlift.com/wp-content/uploads/2021/11/Logo-OmarLahkim-Favicon.png"
          href=""
          alt=""
        />
      </NavLink>
      <ul className="nav-links">
        <NavLink
          activeStyle={{ color: "#fff" }}
          style={navStyle}
          to="/playground"
        >
          <li className="font-sans font-bold p-1">Playground</li>
        </NavLink>
        <NavLink activeStyle={{ color: "#fff" }} style={navStyle} to="/work">
          <li className="font-sans font-bold p-1">Work</li>
        </NavLink>
        {/* <NavLink activeStyle={{ color: "#fff" }} style={navStyle} to="/blog">
          <li className="font-sans font-bold p-1">Blog</li>
        </NavLink> */}
        {/* <NavLink activeStyle={{ color: "#fff" }} style={navStyle} to="/Feed">
          <li className="font-sans font-bold">Feed</li>
        </NavLink> */}
        <NavLink activeStyle={{ color: "#fff" }} style={navStyle} to="/about">
          <li className="font-sans font-bold p-1">About</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
