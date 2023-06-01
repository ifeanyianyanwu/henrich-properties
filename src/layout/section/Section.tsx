import { ReactNode, forwardRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import classes from "./Section.module.css";

type BackGround = "grey" | "blue" | "white";

type IProps = {
  id: string;
  background: BackGround;
  children: ReactNode;
  direction?: "left" | "right";
};

const Section = forwardRef<HTMLElement, IProps>(
  ({ id, background, children, direction }: IProps, ref) => {
    // const [isVisible, setIsVisible] = useState(false);
    // const [ref, inView] = useInView({
    //   triggerOnce: true,
    //   rootMargin: "0px 0px -120px 0px",
    // });

    // Handle the visibility change
    // useEffect(() => {
    //   if (inView) {
    //     setIsVisible(true);
    //   }
    // }, [inView]);

    const colors = {
      grey: "grey-background",
      white: "white-background",
      blue: "blue-background",
    };

    const getBackGround = (bg: BackGround): string => {
      return colors[bg] || "";
    };

    return (
      <section
        id={id}
        className={`${classes.section} ${classes[getBackGround(background)]}
        
       ${
         direction === "right"
           ? classes.right
           : direction === "left"
           ? classes.left
           : ""
       }`}
        ref={ref}
      >
        {children}
      </section>
    );
  }
);

export default Section;
// ${isVisible ? classes.visible : ""}
