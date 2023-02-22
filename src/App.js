import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/hero/Hero";
import Slider from "./components/slider/Slider";
import Virtual from "./components/virtual/Virtual";
import Products from "./components/products/Products";

import {
  BrowserRouter as Router,
  Route,
  Link,
  redirect,
  BrowserRouter,
  Switch,
} from "react-router-dom";
import Testimoni from "./components/testimoni/Testimoni";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    // <div>
    //   <Header />
    //   <Hero />
    //   <Slider />
    //   <Virtual />
    //   <Products />
    // </div>
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact>
          <Header />
          <Hero />
          <Slider />
          <Virtual />
          <Products />
          <Testimoni />
          <Footer />
        </Route>
        <Route path={"/Detail"}>
          <Header />
          <Footer />
        </Route>
        <Route path={"/cart"}>
          <Header />
          <Footer />
        </Route>
        <Route path={"/Shipping"}>Payment and shipping Details Page</Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
