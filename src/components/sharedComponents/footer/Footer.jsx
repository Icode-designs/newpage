import React, { useRef, useState } from "react";
import { FooterBox } from "./footerStyles";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";
import Button from "../customButton/Button";

function Footer() {
  const userEmail = useRef();
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(value)) {
      alert("Please enter a valid email address");
      setValue("");
      return;
    }

    userEmail.current.submit();
    setValue("");
  }

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
        <form
          action="https://formsubmit.co/2df93c0a988c718aa50da1e583d75ed2"
          method="POST"
          ref={userEmail}
          onSubmit={handleSubmit}
        >
          <h2>Newsletter</h2>
          <input
            type="hidden"
            name="_subject"
            value="New subscription to News Letter ✉️"
          />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_next"
            value="https://newpage-theta.vercel.app/"
          />
          <input
            type="text"
            placeholder="Email goes here"
            name="email"
            value={value}
            onChange={handleChange}
          />
          <Button type="submit">send</Button>
        </form>
      </div>
      <div className="copyright">
        <p>2025 “Newpage Cleaning Services LLC” All Rights Reserved</p>
      </div>
    </FooterBox>
  );
}

export default Footer;
