import { Container, Section } from "../../layout";
import { HiBuildingOffice, HiPhone, HiMiniLink } from "react-icons/hi2";
import { RiTwitterXLine } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <Section id="contact-us-page" background="blue">
        <Container>
          <h2 className={classes.contact_title}>Contact</h2>
          <div className={classes.contact_details}>
            <span>
              <h3>
                <HiBuildingOffice /> Address
              </h3>
              <p>
                21A Justice Sowemimo, <br />
                Asokoro,
                <br />
                Abuja
              </p>
            </span>
            <span>
              <h3>
                <HiPhone /> Telephone
              </h3>
              <p>+234-70-34814448</p>
              <p>+234-70-33336675</p>
            </span>
            <span className={classes.mail}>
              <h3>
                <HiMail /> Email
              </h3>
              <a href="mailto:henrichpropertieslimited@gmail.com">
                henrichpropertiesltd@gmail.com
              </a>
            </span>
            <span className={classes.mail}>
              <h3>
                <HiMiniLink />
                Social media
              </h3>
              <a href="https://www.instagram.com/henrichpropertiesltd">
                <AiFillInstagram /> Instagram
              </a>
              <a href="https://x.com/henrichltd">
                <RiTwitterXLine /> Twitter-X
              </a>
            </span>
          </div>
        </Container>
      </Section>
    </footer>
  );
};

export default Footer;
