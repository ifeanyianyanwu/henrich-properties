import React from "react";
import { WHY_CHOOSE_US_DATA } from "../../../helpers/constants";
import { Card, Container } from "../../ui";
import classes from "./WhyChooseUs.module.css";

const WhyChooseUs = () => {
  return (
    <section className={classes.section_container}>
      <Container>
        <div className={classes.title_container}>
          <p>Why choose us?</p>
          <h2>Experience Excellence</h2>
          <p>
            We offer expertise in Commercial, Retail and Residential Development
          </p>
        </div>
        <div className={classes.why_choose_us_cards_container}>
          {WHY_CHOOSE_US_DATA.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              imgUrl={item.image_url}
              text={item.summary_text}
              heading={item.heading}
              className={classes.card}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
