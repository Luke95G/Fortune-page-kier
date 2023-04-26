import React from "react";
import "./App.css";
import kierLogo from "./Kier-Logo.png";

const Header = () => {
  return (
    <header className="header">
      <a href="https://www.kierofficialmusic.com/">
        <img src={kierLogo} className="kierLogo" alt="Logo-Kier" />
      </a>
    </header>
  );
};

export default Header;
