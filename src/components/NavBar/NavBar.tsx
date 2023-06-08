import { HiMenu, HiX } from "react-icons/hi";
import { useState, useEffect } from "react";

import DarkLogo from "../../assets/logo_dark.png";
import Logo from "../../assets/logo_header.png";
import classes from "./NavBar.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";

type Element = HTMLElement | DocumentFragment;

const NavBar = () => {
  const element = document.getElementById("nav-bar");

  //mobile menu state
  const [menuIsShown, setMenuIsShown] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleShowMenu = () => {
    setMenuIsShown((prev) => !prev);
  };

  //this variable represents the DOM node with the id navigation
  //it is used to portal the NavBar component to the DOM as a direct child of the body element
  const menu: Element = document.getElementById("navigation") as Element;

  //this effect is triggered whenever the value of "menuIsShown" changes.
  //it is responsible for adding or removing a CSS Class from the body element
  useEffect(() => {
    if (menuIsShown) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }

    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [menuIsShown]);

  useEffect(() => {
    setMenuIsShown(false);

    //DEBUG:
    if (location.pathname !== "/") {
      element?.classList.add("nav_bg");
    }
    return () => element?.classList.remove("nav_bg");
    //========
  }, [location]);

  const logo = (
    <span onClick={() => navigate("/")} className={classes.logo}>
      <img src={menuIsShown ? DarkLogo : Logo} alt="Logo" />
      <p style={{ color: `${menuIsShown ? "black" : "white"}` }}>
        Henrich Properties LTD.
      </p>
    </span>
  );

  const menuIcon = menuIsShown ? (
    <HiX
      className={classes.menu_icon}
      style={{ color: "black" }}
      onClick={handleShowMenu}
    />
  ) : (
    <HiMenu className={classes.menu_icon} onClick={handleShowMenu} />
  );

  return (
    <>
      <div className={classes.nav_bar} id="nav-bar">
        {logo}
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
        {menuIcon}
      </div>

      {/* MOBILE NAV BAR */}
      {menuIsShown &&
        createPortal(
          <div className={classes.mobile_nav_bar}>
            <div className={classes.menu_nav}>
              {logo}
              {menuIcon}
            </div>
            <span
              className={classes.mobile_nav_link}
              onClick={() => (navigate("/"), handleShowMenu())}
            >
              Home
            </span>
            <a
              className={classes.mobile_nav_link}
              onClick={() => (navigate("/"), handleShowMenu())}
              href="#about"
            >
              About
            </a>
            <a
              className={classes.mobile_nav_link}
              onClick={() => (navigate("/"), handleShowMenu())}
              href="#services"
            >
              Services
            </a>
            <a
              className={classes.mobile_nav_link}
              onClick={() => (navigate("/"), handleShowMenu())}
              href="#contact-us-page"
            >
              Contact
            </a>
          </div>,
          menu
        )}
      {/* END OF SIDE NAV BAR  */}
    </>
  );
};

export default NavBar;
