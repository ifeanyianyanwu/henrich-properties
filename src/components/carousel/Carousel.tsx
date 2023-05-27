import React, { ReactNode, useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import classes from "./Carousel.module.css";

interface IProps {
  children: ReactNode;
}

const Carousel = ({ children }: IProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [translateWidth, setTranslateWidth] = useState<number>(0);
  const [indexVal, setIndexVal] = useState<number>(0);

  const width = screen.width;

  useEffect(() => {
    if (width > 940) {
      setTranslateWidth(32.4);
      setIndexVal(2);
    } else if (width < 940 && width > 680) {
      setTranslateWidth(49.75);
      setIndexVal(1);
    } else if (width < 680) {
      setTranslateWidth(100);
      setIndexVal(0);
    }
  }, [width]);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - indexVal - 1;
    } else if (newIndex >= React.Children.count(children) - indexVal) {
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
          transform: `translateX(calc(-${activeIndex * translateWidth}% - ${
            !activeIndex || translateWidth === 100 ? 0 : 1
          }%))`,
        }}
      >
        {children}
      </div>
      <button onClick={() => updateIndex(activeIndex - 1)}>previous</button>
      <button onClick={() => updateIndex(activeIndex + 1)}>next</button>
    </div>
  );
};

export default Carousel;
