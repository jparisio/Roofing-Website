import { useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="menu-container">
      <div className="menu-bar">
        {/* Menu Button */}
        <div className="menu-button-container">
          <div className="burger-menu"></div>
          <button className="menu-button">Menu</button>
        </div>

        {/* Center Icon */}
        <div className="center-icon">✦</div>

        {/* Configure Button */}
        <button className="configure-button">Pricing</button>
      </div>
    </div>
  );
}
