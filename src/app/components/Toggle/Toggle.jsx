"use client";

import "./Toggle.css";
import sun from "../../img/sun.png";
import moon from "../../img/moon.png";
import { useContext } from "react";
import { TheameContext } from "../../context";
import Image from "next/image";

export default function Toggle() {
  const theame = useContext(TheameContext);

  const handleClick = () => {
    theame.dispatch({ type: "Toggle" });
  };
  return (
    <div className="t">
      <Image src={sun} className="t-icon" alt="" />
      <Image src={moon} className="t-icon" alt="" />
      <div
        className="t-button"
        style={{ left: theame.state.darkMode ? 0 : 25 }}
        onClick={handleClick}
      ></div>
    </div>
  );
}
