import { Container, Section } from "../../../layout";
import classes from "./BestInTheBusiness.module.css";
import { BEST_IN_THE_BUSINESS_DATA } from "../../../helpers/constants";
import { Card } from "../../ui";
import { useIsVisible } from "../../../hooks/useIsVisible";

const BestInTheBusiness = () => {
  const { ref, isVisible } = useIsVisible();

  return (
    <Section
      background="blue"
      id="best-in-the-business"
      direction="right"
      ref={ref}
    >
      <Container>
        <div
          className={`${classes.title_container} ${
            isVisible ? classes.appear : ""
          }`}
        >
          <p>Best in the business</p>
          <h2>A Premier Real Estate Professional</h2>
        </div>
        <div className={classes.card_container}>
          {BEST_IN_THE_BUSINESS_DATA.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              imgUrl={item.image_url}
              text={item.text}
              heading={item.title}
              className={`${classes.card} ${isVisible ? classes.appear : ""}`}
              no_btn={true}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default BestInTheBusiness;
