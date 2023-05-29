import { FC, ReactNode } from "react";
import classes from "./ImageSlider.module.css";
interface IProps {
  children: ReactNode;
}

const ImageSliderItem = ({ children }: IProps) => {
  return <div className={classes.carousel_item}>{children}</div>;
};

export default ImageSliderItem;
