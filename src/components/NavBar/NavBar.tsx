import { HiMenu, HiX } from "react-icons/hi";
import React, { useState } from "react";

import DarkLogo from "../../assets/logo_dark.png";
import Logo from "../../assets/logo_header.png";
import classes from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [menuIsShown, setMenuIsShown] = useState(false);

  const navigate = useNavigate();

  const handleShowMenu = () => {
    setMenuIsShown((prev) => !prev);
  };
  return (
    <>
      <nav className={classes.nav_bar}>
        <span onClick={() => navigate("/")} className={classes.logo}>
          <img src={menuIsShown ? DarkLogo : Logo} alt="Logo" />
          <p style={{ color: `${menuIsShown ? "black" : "white"}` }}>
            Henrich Properties LTD.
          </p>
        </span>

        <div className={classes.nav_links}>
          <span className={classes.nav_link} onClick={() => navigate("/")}>
            Home
          </span>
          <a
            className={classes.nav_link}
            onClick={() => navigate("/")}
            href="#about"
          >
            About
          </a>
          <a
            className={classes.nav_link}
            onClick={() => navigate("/")}
            href="#services"
          >
            Services
          </a>
          <a
            className={classes.nav_link}
            onClick={() => navigate("/")}
            href="#contact-us-page"
          >
            Contact
          </a>
        </div>
        {menuIsShown ? (
          <HiX
            className={classes.menu_icon}
            style={{ color: "black" }}
            onClick={handleShowMenu}
          />
        ) : (
          <HiMenu className={classes.menu_icon} onClick={handleShowMenu} />
        )}
      </nav>

      {/* MOBILE NAV BAR */}
      {menuIsShown && (
        <div className={classes.mobile_nav_bar}>
          <span
            className={classes.mobile_nav_link}
            onClick={() => (navigate("/"), handleShowMenu())}
          >
            Home
          </span>
          <a
            className={classes.mobile_nav_link}
            onClick={handleShowMenu}
            href="#about"
          >
            About
          </a>
          <a
            className={classes.mobile_nav_link}
            onClick={handleShowMenu}
            href="#services"
          >
            Services
          </a>
          <a
            className={classes.mobile_nav_link}
            onClick={handleShowMenu}
            href="#contact-us-page"
          >
            Contact
          </a>
        </div>
      )}
      {/* END OF SIDE NAV BAR  */}
    </>
  );
};

export default NavBar;
