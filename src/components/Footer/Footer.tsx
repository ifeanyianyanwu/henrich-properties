import React from "react";
import { Container, Section } from "../../layout";
import { HiBuildingOffice, HiPhone } from "react-icons/hi2";
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
              <p>092920266</p>
            </span>
            <span className={classes.mail}>
              <h3>
                <HiMail /> Email
              </h3>
              <a href="mailto:henrichpropertiesltd@gmail.com">
                henrichpropertiesltd@gmail.com
              </a>
              <a href="mailto:info@henrichpropertiesltd.com">
                info@henrichpropertiesltd.com
              </a>
            </span>
          </div>
        </Container>
      </Section>
    </footer>
  );
};

export default Footer;
