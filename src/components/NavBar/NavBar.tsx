import { HiMenu } from 'react-icons/hi';
import Logo from '../../assets/logo_header.png';
import React from 'react';
import classes from './NavBar.module.css';

const NavBar = () => {
  return (
    <>
      <nav className={classes.nav_bar}>
        <span onClick={() => {}} className={classes.logo}>
          <img src={Logo} alt="Logo" />
          <p>Henrich Properties LTD.</p>
        </span>

        <div className={classes.nav_links}>
          <a className={classes.nav_link} href="#home">
            Home
          </a>
          <a className={classes.nav_link} href="#about">
            About
          </a>
          <a className={classes.nav_link} href="#services">
            Services
          </a>
          <a className={classes.nav_link} href="#contact-us-page">
            Contact
          </a>
        </div>
        <HiMenu className={classes.menu_icon} />
      </nav>

      {/* MOBILE NAV BAR */}
      <div className={classes.mobile_nav_bar}>
        <a className={classes.mobile_nav_link} href="#home">
          Home
        </a>
        <a className={classes.mobile_nav_link} href="#about">
          About
        </a>
        <a className={classes.mobile_nav_link} href="#services">
          Services
        </a>
        <a className={classes.mobile_nav_link} href="#contact-us-page">
          Contact
        </a>
      </div>
      {/* END OF SIDE NAV BAR  */}
    </>
  );
};

export default NavBar;
