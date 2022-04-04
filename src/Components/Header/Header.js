import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css"

const Header = () => {
  return (
    <nav className="header-navbar one flex">
      <h1>Mr. Analytica</h1>
      <ul className="navbar-links flex">
        <li>
          <CustomLink to="/">Home</CustomLink>
        </li>
        <li>
          <CustomLink to="/review">Reviews</CustomLink>
        </li>
        <li>
          <CustomLink to="/dashboard">DashBoard</CustomLink>
        </li>
        <li>
          <CustomLink to="/blogs">Blogs</CustomLink>
        </li>
        <li>
          <CustomLink to="/about">About</CustomLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
