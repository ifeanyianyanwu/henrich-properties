import { Button } from "../../ui";
import React, { useEffect, useState } from "react";
import classes from "./HeroSection.module.css";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const element = document.getElementById("nav-bar");

  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (!inView) {
      element?.classList.add("nav_bg");
    } else {
      element?.classList.remove("nav_bg");
    }
  }, [inView]);

  return (
    <header className={classes.hero_container} ref={ref}>
      <section className={classes.text_container}>
        <div className={classes.header_text}>
          <h1>Let us guide you home</h1>
          <h2>From concept to creation and maintenance.</h2>
        </div>
        <div className={classes.button_container}>
          <a href="#services">
            <Button className={classes.button} white>
              Services
            </Button>
          </a>
          <a href="#contact-us-page">
            <Button className={classes.button} transparent>
              Contact
            </Button>
          </a>
        </div>
      </section>
    </header>
  );
};

export default HeroSection;
