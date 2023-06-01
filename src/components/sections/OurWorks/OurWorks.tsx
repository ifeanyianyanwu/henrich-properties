import classes from "./OurWorks.module.css";
import { Section, Container } from "../../../layout";
import { OUR_WORKS } from "../../../helpers/constants";
import ImageSlider from "../../imageslider/ImageSlider";
import ImageSliderItem from "../../imageslider/ImageSliderItem";
import { useIsVisible } from "../../../hooks/useIsVisible";

const OurWorks = () => {
  const { ref, isVisible } = useIsVisible();

  return (
    <Section id="our-works" background="white" direction="right" ref={ref}>
      <Container>
        <div
          className={`${classes.title_container} ${
            isVisible ? classes.appear : ""
          }`}
        >
          <p>Our Works</p>
          <h2>Committed to superior quality and results.</h2>
          <p>
            Here are some of the breath-taking projects we have constructed.
          </p>
        </div>
        <span className={`${classes.span} ${isVisible ? classes.appear : ""}`}>
          <ImageSlider>
            {OUR_WORKS.map((item, index) => (
              <ImageSliderItem key={index}>
                <img
                  key={index}
                  src={item.img_url}
                  alt="Our work"
                  className={classes.image}
                />
              </ImageSliderItem>
            ))}
          </ImageSlider>
        </span>
      </Container>
    </Section>
  );
};

export default OurWorks;
