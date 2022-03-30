import React from "react";
import "./Navbar.css";
import "../../index.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="title">Start Bootstrap</div>
            <ul>
                <li>Services</li>
                <li>Portfolio</li>
                <li>About</li>
                <li>Team</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}