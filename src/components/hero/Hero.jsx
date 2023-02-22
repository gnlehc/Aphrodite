import React from "react";
import css from "../hero/Hero.module.css";
import prod from "../../assets/mainhero.png";
const Hero = () => {
  return (
    <>
      <div className={css.container}>
        {/* leftSide */}
        <div className={css.h_sides}>
          <span className={css.text1}>Skin Protection Cream</span>
          <div className={css.text2}>
            <span>For the love of beauty</span>
            <span> Feel A New Experience Beautiful Skin Starts Here</span>
          </div>
        </div>
        {/* middleimagemainpage */}
        <div className={css.wrapper}>
          <div className={css.blueCircle}>
            <img src={prod} width={600} />
          </div>
        </div>
        {/* rightSide */}
        <div className={css.h_sides}>
          <div className={css.traffic}>
            <span>1.5M</span>
            <span>Monthly Traffic</span>
          </div>
          <div className={css.customer}>
            <span>100K</span>
            <span>Happy Customer</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
