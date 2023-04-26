import React, { useState, useRef } from "react";
// import fortune from "./fortune.png";
import tarotReader from "./tarot-reader.png";
import KierFortune1 from "./Kier_fortune.png";
import kierLogo from "./Kier-Logo.png";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const MainPage = () => {
  const [displayedPng, setDisplayedPng] = useState(null);
  const fortuneCardRef = useRef(null);

  const pngArray = [KierFortune1, kierLogo];

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * pngArray.length);
    const randomPng = pngArray[randomIndex];
    setDisplayedPng(randomPng);
  };

  const handleDownload = () => {
    if (displayedPng && fortuneCardRef.current) {
      const link = document.createElement("a");
      link.download = "fortune.png";
      link.href = fortuneCardRef.current.toDataURL();
      link.click();
    }
  };

  return (
    <div className="App-header">
      <h1>Reveal your fate...</h1>
      <img
        src={tarotReader}
        onClick={handleClick}
        className="App-logo"
        alt="logo"
      />
      {displayedPng && (
        <div className="App-header">
          <canvas
            ref={fortuneCardRef}
            width={300}
            height={428}
            style={{ display: "none" }}
          />
          <img
            src={displayedPng}
            className="FortuneCard"
            alt="random fortune"
            ref={(img) => {
              if (img && fortuneCardRef.current) {
                const context = fortuneCardRef.current.getContext("2d");
                context.drawImage(img, 0, 0, 300, 428);
              }
            }}
          />
          <button className="downloadButt" onClick={handleDownload}>
            Download fortune&nbsp;
            <FontAwesomeIcon icon={faDownload} />
          </button>
        </div>
      )}
    </div>
  );
};

export default MainPage;
