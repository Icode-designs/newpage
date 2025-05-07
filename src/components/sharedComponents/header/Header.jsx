import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, NavLink } from "react-router-dom";
import Button from "../customButton/Button";
import { Headerbox } from "./headerStyles";
//import icons
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import Logo from "../logo/Logo";

function Header({ menuOpen, setMenuOPen }) {
  //listen for screen size
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    //listen for break point to close menu if open
    setMenuOPen(false);
  }, [isLargeScreen]);

  //component variable to change navigation parent container basesed on screen size breakpoints
  const MenuWrapper = isLargeScreen ? "nav" : "menu";

  function handleClick() {
    //open and close menu depening on initial state
    setMenuOPen(!menuOpen);
  }
  return (
    <Headerbox $menuOpen={menuOpen}>
      <div>
        <Logo />

        <MenuWrapper>
          <ul>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={!isLargeScreen ? handleClick : undefined}
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={!isLargeScreen ? handleClick : undefined}
            >
              <li>About us</li>
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={!isLargeScreen ? handleClick : undefined}
            >
              <li>Services</li>
            </NavLink>
            <NavLink to="https://newpagecleaningservice.blogspot.com/">
              <li>Blog</li>
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={!isLargeScreen ? handleClick : undefined}
            >
              <li>Contact</li>
            </NavLink>
          </ul>

          <Link to="/booking">
            <Button
              $btn_weight="500"
              $bg="var(--col-10)"
              onClick={!isLargeScreen ? handleClick : undefined}
            >
              Book us Now!
            </Button>
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
