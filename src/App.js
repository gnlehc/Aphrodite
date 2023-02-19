import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/hero/Hero";
import Slider from "./components/slider/Slider";
import Virtual from "./components/virtual/Virtual";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";
import { BrowserRouter as Router, Switch, Route, Link, redirect } from "react-router-dom";
const App = () => {
  return (
    <>
      <div>
        <link to="/">
          <Header />
          <Hero />
          <Slider />
          <Virtual />
          <Products />
        </link>
      </div>
      <div>
        <link to="/cart">
          <Header />
          <Cart />
        </link>
      </div>
    </>
  );
};

export default App;
