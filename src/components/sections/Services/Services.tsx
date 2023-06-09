import React, { useState, useEffect } from "react";
import { Container, Section } from "../../../layout";
import classes from "./Services.module.css";
import { SERVICES_DATA } from "../../../helpers/constants";
import { Card } from "../../ui";
import Carousel from "../../carousel/Carousel";
import CarouselItem from "../../carousel/CarouselItem";
import { useIsVisible } from "../../../hooks/useIsVisible";

const Services = () => {
  const { ref, isVisible } = useIsVisible();

  const width = window.innerWidth;
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(width);
  }, [width]);

  return (
    <Section background="grey" id="services" direction="left" ref={ref}>
      <Container>
        <div
          className={`${classes.title_container} ${
            isVisible ? classes.appear : ""
          }`}
        >
          <p>Services</p>
          <h2>Redefining Real Estate in Nigeria</h2>
          <p>
            If you have the opportunity to suggest a real estate company to
            anyone, think of us.
          </p>
        </div>
        {screenWidth > 940 ? (
          <Carousel>
            {SERVICES_DATA.map((item) => (
              <CarouselItem key={item.id}>
                <Card
                  key={item.id}
                  id={item.id}
                  imgUrl={item.image_url}
                  text={item.summary_text}
                  heading={item.heading}
                  className={`${classes.card} ${
                    isVisible ? classes.appear : ""
                  }`}
                />
              </CarouselItem>
            ))}
          </Carousel>
        ) : (
          <div className={classes.card_container}>
            {SERVICES_DATA.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                imgUrl={item.image_url}
                text={item.summary_text}
                heading={item.heading}
                className={`${classes.card} ${isVisible ? classes.appear : ""}`}
              />
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
};

export default Services;
