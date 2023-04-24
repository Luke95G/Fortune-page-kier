import React from "react";
import "./App.css";
import kierLogo from "./Kier-Logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={kierLogo} className="kierLogo" alt="Logo" />
    </header>
  );
};

export default Header;
