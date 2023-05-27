import classes from "./OurWorks.module.css";
import { Section, Container } from "../../../layout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { OUR_WORKS } from "../../../helpers/constants";

const OurWorks = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
        <Slider {...settings}>
          {OUR_WORKS.map((item, index) => (
            <img
              key={index}
              src={item.img_url}
              alt="Our work"
              className={classes.image}
            />
          ))}
        </Slider>
      </Container>
    </Section>
  );
};

export default OurWorks;
