import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <nav className="header-navbar flex">
      <h1>Mr. Talking</h1>
      <ul className="navbar-links flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/review">Reviews</Link>
        </li>
        <li>
          <Link to="/dashboard">DashBoard</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
