import React from "react";
import logo from "../../assets/logofinal.png";
import css from "./footer.module.css";
import {
  LocationMarkerIcon,
  PhoneIcon,
  InboxIcon,
  LoginIcon,
  UserIcon,
  LinkIcon,
} from "@heroicons/react/outline";
const Footer = () => {
  return (
    <div className={css.footWrapper}>
      <hr />
      <div className={css.footer}>
        <div className={css.logo}>
          <img src={logo} alt="" />
          <span>Aphrodite</span>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>111 north avenue Orlando, FL 32001</span>
            </span>
            <span className={css.pngLine}>
              <PhoneIcon className={css.icon} />
              <a href="tel: 081281642192">081281642192</a>
            </span>
            <span className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <a href="mailto: chelsea.ng@binus.ac.id">
                chelsea.ng@binus.ac.id
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className={css.copyright}>
        <span>Copyright 2023 by Chelsea Ng, Inc.</span>
        <span>All Rights Reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
