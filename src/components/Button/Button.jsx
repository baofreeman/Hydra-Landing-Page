import React from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);
const Button = ({
  children,
  className,
  basic,
  primary,
  square,
  rounded,
  ...props
}) => {
  const btnStyle = classNames(
    { "btn-basic": basic },
    { "btn-primary": primary }
  );

  const btnSize = classNames(
    { "btn-square": square },
    { "btn-rounded": rounded }
  );
  return (
    <button className={cx(btnStyle, btnSize)} {...props}>
      {children}
    </button>
  );
};

export default Button;
