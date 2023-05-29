import React, { ReactNode, useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import classes from "./ImageSlider.module.css";
import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
} from "react-icons/hi";

interface IProps {
  children: ReactNode;
}

const ImageSlider = ({ children }: IProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const style = {};

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div className={classes.carousel_outer} {...handlers}>
      <div
        className={classes.carousel_inner}
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {children}
      </div>
      <button
        onClick={() => updateIndex(activeIndex - 1)}
        className={classes.prev_btn}
      >
        <HiOutlineChevronDoubleLeft
          style={{ fontSize: "20px", color: "white" }}
        />
      </button>
      <button
        onClick={() => updateIndex(activeIndex + 1)}
        className={classes.next_btn}
      >
        <HiOutlineChevronDoubleRight
          style={{ fontSize: "20px", color: "white" }}
        />
      </button>
    </div>
  );
};

export default ImageSlider;
