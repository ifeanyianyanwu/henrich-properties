import React, { ReactNode } from "react";
import classes from "./Container.module.css";

type IProps = { children: ReactNode; className?: string };

const Container = ({ children, className }: IProps) => {
  return (
    <div className={`${classes.container} ${className || ""}`}>{children}</div>
  );
};

export default Container;
