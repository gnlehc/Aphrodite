import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/hero/Hero";
import Slider from "./components/slider/Slider";
import Virtual from "./components/virtual/Virtual";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Slider />
      <Virtual />
    </div>
  );
};

export default App;
