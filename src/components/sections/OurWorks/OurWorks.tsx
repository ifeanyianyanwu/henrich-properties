import classes from "./OurWorks.module.css";
import { Section, Container } from "../../../layout";
import { OUR_WORKS } from "../../../helpers/constants";
import ImageSlider from "../../imageslider/ImageSlider";
import ImageSliderItem from "../../imageslider/ImageSliderItem";

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
      </Container>
    </Section>
  );
};

export default OurWorks;
