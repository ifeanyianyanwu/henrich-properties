import React, { useState } from "react";
import { Container, Section } from "../../../layout";
import classes from "./Services.module.css";
import { SERVICES_DATA } from "../../../helpers/constants";
import { Card } from "../../ui";
import Carousel from "../../carousel/Carousel";
import CarouselItem from "../../carousel/CarouselItem";

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    // if (currentSlide > SERVICES_DATA.length) return;
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  return (
    <Section background="grey" id="services">
      <Container>
        <div className={classes.title_container}>
          <p>Services</p>
          <h2>Redefining Real Estate in Nigeria</h2>
          <p>
            If you have the opportunity to suggest a real estate company to
            anyone, think of us.
          </p>
        </div>

        <Carousel>
          {SERVICES_DATA.map((item) => (
            <CarouselItem key={item.id}>
              <Card
                key={item.id}
                id={item.id}
                imgUrl={item.image_url}
                text={item.summary_text}
                heading={item.heading}
                className={classes.card}
              />
            </CarouselItem>
          ))}
        </Carousel>
      </Container>
    </Section>
  );
};

export default Services;
