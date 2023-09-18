import React from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);
const Button = ({
  children,
  className,
  basic,
  primary,
  small,
  medium,
  large,
  ...props
}) => {
  const btnStyle = classNames(
    { "btn-basic": basic },
    { "btn-primary": primary }
  );

  const btnSize = classNames(
    { "btn-small": small },
    { "btn-medium": medium },
    { "btn-large": large }
  );
  return (
    <button className={cx(btnStyle, btnSize)} {...props}>
      {children}
    </button>
  );
};

export default Button;
