import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import classNames from "classnames/bind";
import { logo, hydra } from "../../assets";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.development";
import { useEffect } from "react";
const cx = classNames.bind(styles);

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const setBackground = () => {
    if (window.scrollY > 80) {
      setNavbar(true);
      console.log(navbar);
    } else {
      setNavbar(false);
      console.log(navbar);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setBackground);
    return () => window.removeEventListener("scroll", setBackground);
  }, []);

  const Menu = () => {
    return (
      <>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#services"}>Services</HashLink>
        <Link to={"/technology"}>Technology</Link>
        <HashLink to={"/#howto"}>Howto</HashLink>
      </>
    );
  };
  return (
    <div className={navbar ? cx("navbar", "navbar--active") : cx("navbar")}>
      <div className={cx("navbar__img")}>
        <img className={cx("navbar__img-logo")} src={logo} alt="logo" />
        <img className={cx("navbar__img-hydra")} src={hydra} alt="hydra" />
      </div>
      <nav className={cx("navbar__items")}>
        <Menu />
      </nav>
      <div className={cx("navbar__btn")}>
        <div className={cx("navbar__btn-block")}>
          <Button basic={true} square={true}>
            Contact us
          </Button>
        </div>
        <div className={cx("navbar__btn-block")}>
          <Button primary={true} square={true}>
            Join Hydra
          </Button>
        </div>
      </div>
      <div className={cx("navbar__menu")} onClick={handleToggle}>
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
