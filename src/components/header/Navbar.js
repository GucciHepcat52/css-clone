import React from "react";
import "./Navbar.css";
import "../../index.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="title">Start Bootstrap</div>
      <ul>
        <li>
          <Link to="/">Services</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>About</li>
        <li>Team</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
