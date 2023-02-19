import React, { useState } from "react";
import css from "./Products.module.css";
import { sData } from "../../data/skincareAPI";
import plane from "../../assets/plane.png";
import {useAutoAnimate} from '@formkit/auto-animate/react'
const Products = () => {
  const [parent] = useAutoAnimate()
  const [menuProd, SetMenuProd] = useState(sData);
  const filter = (type) => {
    SetMenuProd(sData.filter((product) => product.type === type));
  };
  return (
    <div className={css.container}>
      <img src={plane} alt="" />
      <h1>Pick Based On Your Skin Type!</h1>
      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() => SetMenuProd(sData)} >All</li>
          <li onClick={() => filter("normal")}>Normal</li>
          <li onClick={() => filter("dry")}>Dry</li>
          <li onClick={() => filter("oily")}>Oily</li>
          <li onClick={() => filter("combination")}>Combination</li>
        </ul>

        <div className={css.list} ref={parent}>
          {menuProd.map((product, i) => (
            <div className={css.product}>
              <div className="left-s">
                <div className="name">
                  <span>{product.name}</span>
                  <span>{product.detail}</span>
                </div>
                <span>{product.price}</span>
                <div>Shop Now!</div>
              </div>
              <img src={product.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
