import { FC, ReactNode } from "react";
import classes from "./Carousel.module.css";
interface IProps {
  children: ReactNode;
}

const CarouselItem = ({ children }: IProps) => {
  return <div className={classes.carousel_item}>{children}</div>;
};

export default CarouselItem;
