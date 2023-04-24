import React from "react";
import fortune from "./fortune.png";
import "./App.css";

const MainPage = () => {
  return (
    <header className="App-header">
      <h1>What does your fortune behold?</h1>
      <img src={fortune} className="App-logo" alt="logo" />
    </header>
  );
};

export default MainPage;
