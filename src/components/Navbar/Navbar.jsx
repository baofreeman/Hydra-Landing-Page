import React from "react";
import styles from "./Navbar.module.scss";
import classNames from "classnames/bind";
import { logo, hydra } from "../../assets";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { RiMenu3Fill } from "react-icons/ri";
const cx = classNames.bind(styles);
const Navbar = () => {
  return (
    <div className={cx("navbar")}>
      <div className={cx("navbar__img")}>
        <img className={cx("navbar__img-logo")} src={logo} alt="logo" />
        <img className={cx("navbar__img-hydra")} src={hydra} alt="hydra" />
      </div>
      <nav className={cx("navbar__items")}>
        <Link to={"/about"}>About</Link>
        <Link to={"/services"}>Services</Link>
        <Link to={"/technology"}>Technology</Link>
        <Link to={"/howto"}>Howto</Link>
      </nav>
      <div className={cx("navbar__btn")}>
        <Button basic={true} medium={true}>
          Contact us
        </Button>
        <Button primary={true} medium={true}>
          Test2
        </Button>
      </div>
      <div>
        <RiMenu3Fill color="#fff" size={27} />
      </div>
    </div>
  );
};

export default Navbar;
