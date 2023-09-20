import React from "react";
import styles from "./Form.module.scss";
import classNames from "classnames/bind";
import Button from "../Button/Button";

const cx = classNames.bind(styles);

const Form = () => {
  return (
    <div className={cx("form__wrapper")}>
      <div className={cx("form__des")}>
        <h1>JION HYDRA</h1>
        <h2>Let's Build Your VR Experience</h2>
      </div>
      <form className={cx("form__container")} method="POST">
        <div className={cx("form__container-block")}>
          <input name="first-name" placeholder="First Name" />
          <input name="last-name" placeholder="Last Name" />
        </div>
        <div className={cx("form__container-block")}>
          <input name="email" placeholder="Email" />
          <input name="phone" placeholder="Phone" />
        </div>
        <input name="subject" placeholder="Subject" />
        <input name="tell" placeholder="Tell something" />
        <Button primary={true} square={true} type="submit">
          SEND TO HYDRA
        </Button>
      </form>
    </div>
  );
};

export default Form;
