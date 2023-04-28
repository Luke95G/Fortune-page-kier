import React, { useState, useRef } from "react";
import tarotReader from "./PNGs/tarot-reader.png";
import "./App.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Fort1 from "./PNGs/FORT 3.png";
import Fort2 from "./PNGs/FORT 4.png";
import Fort3 from "./PNGs/FORT 5.png";
import Fort4 from "./PNGs/FORT 7.png";
import Fort5 from "./PNGs/FORT 8.png";
import Fort6 from "./PNGs/FORT 9.png";
import Fort7 from "./PNGs/FORT 10.png";
import Fort8 from "./PNGs/FORT 11.png";
import Fort9 from "./PNGs/FORT 12.png";
import Fort10 from "./PNGs/FORT 13.png";
import Fort11 from "./PNGs/FORT 14.png";
import Fort12 from "./PNGs/FORT 15.png";
import Fort13 from "./PNGs/FORT 16.png";
import Fort14 from "./PNGs/FORT 17.png";
import Fort15 from "./PNGs/FORT 18.png";
import Fort16 from "./PNGs/FORT 19.png";
import Fort17 from "./PNGs/FORT 20.png";
import Fort18 from "./PNGs/FORT 21.png";
import Fort19 from "./PNGs/FORT 22.png";

const MainPage = () => {
  const [displayedPng, setDisplayedPng] = useState(null);
  const fortuneCardRef = useRef(null);

  const pngArray = [
    Fort1,
    Fort2,
    Fort3,
    Fort4,
    Fort5,
    Fort6,
    Fort7,
    Fort8,
    Fort9,
    Fort10,
    Fort11,
    Fort12,
    Fort13,
    Fort14,
    Fort15,
    Fort16,
    Fort17,
    Fort18,
    Fort19,
  ];

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * pngArray.length);
    const randomPng = pngArray[randomIndex];
    setDisplayedPng(randomPng);
  };

  // const handleDownload = () => {
  //   if (displayedPng && fortuneCardRef.current) {
  //     const canvas = document.createElement("canvas");
  //     canvas.width = fortuneCardRef.current.clientWidth;
  //     canvas.height = fortuneCardRef.current.clientHeight;
  //     const context = canvas.getContext("2d");
  //     context.fillStyle = "white"; // Set background color here
  //     context.fillRect(0, 0, canvas.width, canvas.height);
  //     context.drawImage(fortuneCardRef.current, 0, 0);
  //     const link = document.createElement("a");
  //     link.download = "fortune.png";
  //     link.href = canvas.toDataURL("image/png"); // specify type as image/png
  //     link.click();
  //   }
  // };

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
          {/* <button className="downloadButt" onClick={handleDownload}>
            Download fortune&nbsp;
            <FontAwesomeIcon icon={faDownload} />
          </button> */}
        </div>
      )}
    </div>
  );
};

export default MainPage;
