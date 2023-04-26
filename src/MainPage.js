import React, { useState } from "react";
// import fortune from "./fortune.png";
import tarotReader from "./tarot-reader.png";
import "./App.css";
import KierFortune1 from "./Kier_fortune.png";
import kierLogo from "./Kier-Logo.png";

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
      <img
        src={tarotReader}
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
