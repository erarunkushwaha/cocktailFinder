import React from "react";
import logo from "../logo.svg";
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
      <nav className="navbar">
          <div className="nav-center">
            <img src={ logo } className="logo" alt=""/>
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
      </nav>
  );
}
