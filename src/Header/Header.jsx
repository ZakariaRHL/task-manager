import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <h1 className="title">Task Manager</h1>
        <ul className="ul-list">
          <li>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/map"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Map
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
