import React from "react";
import "./Header.css";
import "../../index.css";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="header">
      <Navbar />
      <div className="header-subheader">Welcome To Our Studio!</div>
      <div className="header-mainheader">IT'S NICE TO MEET YOU</div>
      <button className="header-mainbutton">TELL ME MORE</button>
    </div>
  );
}
