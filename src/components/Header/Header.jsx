import React from "react";
import css from "../Header/Header.module.css";
import logo from "../../assets/logofinal.png";
import { CgShoppingCart } from "react-icons/cg";
const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={logo} alt="" />
      </div>

      <div className={css.right}>
        <div className={css.menu}>
          <ul className={css.menu}>
            <li>Brands</li>
            <li>Category</li>
            {/* <li>About Us</li>
            <li>Help</li> */}
          </ul>
        </div>
        <input
          type="text"
          className={css.search}
          placeholder="Search Product..."
        />
        <CgShoppingCart className={css.cart} />
      </div>
    </div>
  );
};

export default Header;
