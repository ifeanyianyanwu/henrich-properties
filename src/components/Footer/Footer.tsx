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
                21 Justice Sowemimo, <br />
                Asokoro,
                <br />
                Abuja
              </p>
            </span>
            <span>
              <h3>
                <HiPhone /> Telephone
              </h3>
              <a href="tel:+2348140110528">+234-81-40110528</a>
              <a href="tel:+4475019979962">+44-75-019979962</a>
            </span>
            <span className={classes.mail}>
              <h3>
                <HiMail /> Email
              </h3>
              <a href="mailto:henrichpropertieslimited@gmail.com">
                henrichpropertieslimited@gmail.com
              </a>
            </span>
            <span className={classes.mail}>
              <h3>
                <HiMiniLink />
                Social media
              </h3>
              <a
                href="https://www.instagram.com/henrichpropertieslimited
"
              >
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
