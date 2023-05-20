import React from "react";
import classes from "./AboutSection.module.css";
import { Container } from "../../ui";
import AboutImgOne from "../../../assets/aboutimage1.jpg";
import AboutImgTwo from "../../../assets/aboutimage2.jpg";

const AboutSection = () => {
  return (
    <section id="about" className={classes.bg_white}>
      <Container className={classes.about_row}>
        <div className={classes.about_text}>
          <p>About</p>
          <h2>A Home-Grown Success</h2>
          <p>
            Henrich Properties Limited is a full-service, privately held
            commercial and residential real estate investment and development
            company with a commitment to excellence and tenant service,
            distinguished resume and reputation established over the years.
          </p>
          <p>
            As a full-service developer, we have the ability to rapidly move any
            project from site selection, acquisition, financing, construction,
            leasing, property management and maintenance. For projects that
            require specialized expertise or added financial strength, Henrich
            Properties Limited has access to major equity and strategic
            solutions in the following: Retail Development, Commercial
            Development and Residential Development.
          </p>
        </div>
        <div className={classes.about_img}>
          <img
            loading="lazy"
            className={classes.about_img_1}
            src={AboutImgOne}
            alt="about"
          />
          <img
            loading="lazy"
            className={classes.about_img_2}
            src={AboutImgTwo}
            alt="about"
          />
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
