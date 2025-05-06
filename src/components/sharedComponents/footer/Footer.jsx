import React from "react";
import { FooterBox } from "./footerStyles";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";
import Button from "../customButton/Button";

function Footer() {
  return (
    <FooterBox>
      <div>
        <div>
          <Logo $textColor="var(--col-70)" className="logo" />
          <div>
            {/*this is the div i am targeting */}
            <p>
              Stay updated with our latest cleaning tips, service updates, and
              helpful articles on maintaining a spotless home.
            </p>
          </div>
        </div>
        <div className="links">
          <ul>
            <h3>Company</h3>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/team">Our Team</Link>
            </li>
          </ul>
          <ul>
            <h3>Know More</h3>
            <li>
              <Link to="/contact">Support</Link>
            </li>
          </ul>
        </div>
        <form action="">
          <h2>Newsletter</h2>
          <input type="text" placeholder="Email goes here" />
          <Button $bg="var(--col-10)">send</Button>
        </form>
      </div>
      <div className="copyright">
        <p>2025 “Newpage Cleaning Services LLC” All Rights Reserved</p>
      </div>
    </FooterBox>
  );
}

export default Footer;
