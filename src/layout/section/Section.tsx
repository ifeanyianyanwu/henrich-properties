import { ReactNode } from "react";
import classes from "./Section.module.css";

type BackGround = "grey" | "blue" | "white";

type IProps = {
  id: string;
  background: BackGround;
  children: ReactNode;
};

const Section = ({ id, background, children }: IProps) => {
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
      className={`${classes.section} ${classes[getBackGround(background)]}`}
    >
      {children}
    </section>
  );
};

export default Section;
