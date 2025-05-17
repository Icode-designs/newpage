import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, NavLink } from "react-router-dom";
import Button from "../customButton/Button";
import { Headerbox } from "./headerStyles";
//import icons
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import Logo from "../logo/Logo";

function Header({ menuOpen, setMenuOpen }) {
  //listen for screen size
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    setMenuOpen(false);
  }, [isLargeScreen]);

  const MenuWrapper = isLargeScreen ? "nav" : "menu";

  const timerRef = useRef(null);

  function handleClick() {
    const menuBox = document.getElementsByTagName("menu")[0];
    if (!isLargeScreen && !menuOpen) {
      menuBox.classList.add("active-menu");
      setMenuOpen(!menuOpen);
    } else if (!isLargeScreen && menuOpen) {
      menuBox.classList.remove("active-menu");
      setMenuOpen(!menuOpen);
    } else {
      return;
    }
  }

  return (
    <Headerbox $menuOpen={menuOpen}>
      <div>
        <Logo onClick={menuOpen ? handleClick : undefined} />

        <MenuWrapper>
          <ul>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={!isLargeScreen && menuOpen ? handleClick : undefined}
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={!isLargeScreen && menuOpen ? handleClick : undefined}
            >
              <li>About us</li>
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={!isLargeScreen && menuOpen ? handleClick : undefined}
            >
              <li>Services</li>
            </NavLink>
            {/* <NavLink to="https://newpagecleaningservice.blogspot.com/">
              <li>Blog</li>
            </NavLink> */}

            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={!isLargeScreen && menuOpen ? handleClick : undefined}
            >
              <li>Contact</li>
            </NavLink>
          </ul>

          <Link to="/booking">
            <Button onClick={handleClick}>Book us Now!</Button>
          </Link>
        </MenuWrapper>

        <button className="menu_btn" onClick={handleClick}>
          {menuOpen ? <IoCloseOutline /> : <HiBars3BottomRight />}
        </button>
      </div>
    </Headerbox>
  );
}
export default Header;
