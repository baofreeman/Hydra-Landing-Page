import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import classNames from "classnames/bind";
import { logo, hydra } from "../../assets";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
const cx = classNames.bind(styles);

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const hanldeToggle = () => {
    setToggle(!toggle);
  };
  const Menu = () => {
    return (
      <>
        <Link to={"/about"}>About</Link>
        <Link to={"/services"}>Services</Link>
        <Link to={"/technology"}>Technology</Link>
        <Link to={"/howto"}>Howto</Link>
      </>
    );
  };
  return (
    <div className={cx("navbar")}>
      <div className={cx("navbar__img")}>
        <img className={cx("navbar__img-logo")} src={logo} alt="logo" />
        <img className={cx("navbar__img-hydra")} src={hydra} alt="hydra" />
      </div>
      <nav className={cx("navbar__items")}>
        <Menu />
      </nav>
      <div className={cx("navbar__btn")}>
        <Button basic={true} small={true}>
          Contact us
        </Button>
        <Button primary={true} small={true}>
          Test2
        </Button>
      </div>
      <div className={cx("navbar__menu")} onClick={hanldeToggle}>
        {!toggle ? (
          <RiMenu3Fill color={"#fff"} size={27} />
        ) : (
          <RiCloseFill color={"#fff"} size={27} />
        )}
        {toggle && (
          <div className={cx("navbar__menu-container")}>
            <div className={cx("navbar__menu-items")}>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
