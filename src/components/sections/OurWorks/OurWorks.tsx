import React from "react";
import classes from "./OurWorks.module.css";
import { Section, Container } from "../../../layout";

const OurWorks = () => {
  return (
    <Section id="our-works" background="white">
      <Container>
        <div className={classes.title_container}>
          <p>Our Works</p>
          <h2>Committed to superior quality and results.</h2>
          <p>
            Here are some of the breath-taking projects we have constructed.
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default OurWorks;
