import React from "react";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import { logo } from "../../assets";
import Button from "../Button/Button";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
  BsPinterest,
} from "react-icons/bs";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <div className={cx("footer__wrapper")}>
      <div className={cx("footer__content")}>
        <div className={cx("footer__img")}>
          <img src={logo} />
        </div>
        <div className={cx("footer__items")}>
          <div className={cx("footer__item")}>
            <h1>About</h1>
            <h1>Services</h1>
            <h1>Technologies</h1>
            <h1>How to</h1>
            <h1>Join Hydra</h1>
          </div>
        </div>

        <div className={cx("footer__items")}>
          <div className={cx("footer__item")}>
            <h1>F.A.Q</h1>
            <h1>Sitemap</h1>
            <h1>Conditions</h1>
            <h1>Licenses</h1>
          </div>
        </div>
        <div className={cx("footer__social")}>
          <div className={cx("footer__social-item")}>
            <h1>Socialize with HYDRA</h1>
            <div className={cx("footer__social-icon")}>
              <BsFacebook />
              <BsInstagram />
              <BsLinkedin />
              <BsTwitter />
              <BsYoutube />
              <BsPinterest />
            </div>
            <Button primary={true} medium={true}>
              Send
            </Button>
          </div>
        </div>
      </div>
      <div className={cx("footer__create")}>
        <h1>2023 HYDRA LANDING PAGE BY FREEMAN - ALL RIGHTS RESERVED</h1>
      </div>
    </div>
  );
};

export default Footer;
