import { WHY_CHOOSE_US_DATA } from "../../../helpers/constants";
import { Card } from "../../ui";
import classes from "./WhyChooseUs.module.css";
import { Section, Container } from "../../../layout";

import { useIsVisible } from "../../../hooks/useIsVisible";

const WhyChooseUs = () => {
  const { ref, isVisible } = useIsVisible();

  return (
    <Section background="grey" id="why-choose-us" direction="left" ref={ref}>
      <Container>
        <div
          className={`${classes.title_container} ${
            isVisible ? classes.appear : ""
          }`}
        >
          <p>Why choose us?</p>
          <h2>Experience Excellence</h2>
          <p>
            We offer expertise in Commercial, Retail and Residential Development
          </p>
        </div>
        <div className={classes.card_container}>
          {WHY_CHOOSE_US_DATA.map((item) => (
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
      </Container>
    </Section>
  );
};

export default WhyChooseUs;
