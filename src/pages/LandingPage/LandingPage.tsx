import { useLocation } from "react-router-dom";
import { Footer, Contact } from "../../components";
import {
  AboutSection,
  BestInTheBusiness,
  HeroSection,
  OurWorks,
  Services,
  WhyChooseUs,
} from "../../components/sections";
import { useEffect } from "react";
import classes from "./LandingPage.module.css";

const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className={classes.page_container}>
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <BestInTheBusiness />
      <Services />
      <OurWorks />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
