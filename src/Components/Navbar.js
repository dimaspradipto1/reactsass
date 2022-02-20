import React from "react";
import "../Style/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="link">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/profile">Profile</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
}
