import React, { useState } from "react";
import fortune from "./fortune.png";
import "./App.css";
import KierFortune1 from "./Kier_fortune.png";
import kierLogo from "./Kier-Logo.png";
// import { FaMagic } from "react-icons/fa";
import "@fortawesome/fontawesome-free/css/all.min.css";

const MainPage = () => {
  const [displayedPng, setDisplayedPng] = useState(null);

  const pngArray = [KierFortune1, kierLogo];

  const handleCLick = () => {
    const randomIndex = Math.floor(Math.random() * pngArray.length);
    const randomPng = pngArray[randomIndex];
    setDisplayedPng(randomPng);
  };

  return (
    <div className="App-header">
      <h1>Reveal your fate!</h1>
      {/* <FontAwesomeIcon icon="fas fa-magic" /> */}
      <i className="fa-light fa-thumbs-up"></i>
      <FontAwesomeIcon icon="fa-light fa-thumbs-up" />
      <img
        src={fortune}
        onClick={handleCLick}
        className="App-logo"
        alt="logo"
      />
      {displayedPng && (
        <img src={displayedPng} className="FortuneCard" alt="random fortune" />
      )}
    </div>
  );
};

export default MainPage;
