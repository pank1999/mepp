"use client";

import "./Toggle.css";
import sun from "../../img/sun.png";
import moon from "../../img/moon.png";
import { useContext } from "react";
import { TheameContext } from "../../context";

export default function Toggle() {
  const theame = useContext(TheameContext);

  const handleClick = () => {
    theame.dispatch({ type: "Toggle" });
  };
  return (
    <div className="t">
      <img src={sun} className="t-icon" alt="" />
      <img src={moon} className="t-icon" alt="" />
      <div
        className="t-button"
        style={{ left: theame.state.darkMode ? 0 : 25 }}
        onClick={handleClick}
      ></div>
    </div>
  );
}
