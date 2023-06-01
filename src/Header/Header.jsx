import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <h1 className="title">Task Manager</h1>
        <ul className="ul-list">
          <li>Home</li>
          <li>Map</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
