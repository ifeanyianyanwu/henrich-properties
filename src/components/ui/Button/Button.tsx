import React, { ReactNode } from "react";

import classes from "./Button.module.css";

type IProps = {
  children: ReactNode;
  transparent?: boolean;
  white?: boolean;
  className?: string;
  onClick?: () => void;
};

const Button = ({
  children,
  className,
  transparent,
  white,
  onClick,
}: IProps) => {
  return (
    <button
      className={`${classes.button} ${className} ${
        white
          ? classes.white_btn
          : transparent
          ? classes.transparent_btn
          : classes.blue_btn
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
