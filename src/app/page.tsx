"use client";

import { useContext } from "react";
// import { TheameContext } from "./context";
import Toggle from "./components/Toggle/Toggle";
import Intro from "./components/Introduction/Intro";
import About from "./components/About/About";
import Placements from "./components/Placements/Placements";
import Contact from "./components/Conatct/Contact";
import Education from "./components/Education/Education";
import Experiance from "./components/Experiance/Experiance";
import Footer from "./components/Footer/Footer";
import Product from "./components/Product/Product";
import ProductList from "./components/ProductList/ProductList";
import Slider from "./components/Slider/Slider";

export default function Home() {
  // const theame = useContext(TheameContext);
  const darkMode = true;

  return (
    <div
      className="App"
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode ? "white" : "black",
      }}
    >
      {/* <Toggle /> */}
      <Intro />
      <About />
      <Education />
      <Experiance />
      <Placements />
      <Slider />
      <ProductList />
      <Contact />
      <Footer />
    </div>
  );
}
