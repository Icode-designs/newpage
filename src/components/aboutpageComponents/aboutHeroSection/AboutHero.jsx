import React from "react";
import { AboutHeroBox } from "./aboutHeroStyles";
import janitor from "assets/janitor.png";
import { FaSmile } from "react-icons/fa";
import { GiVacuumCleaner } from "react-icons/gi";
import BigHeading from "components/sharedComponents/bigHeading/BigHeading";
import Button from "components/sharedComponents/customButton/Button";

function AboutHero() {
  return (
    <AboutHeroBox>
      <div>
        <div>
          <div className="about-bg"></div>

          <article>
            <BigHeading text="About our Company" />
            <p>
              Dedicated to Delivering Spotless Spaces with Customized Cleaning
              Solutions
            </p>

            <div>
              <Button $bg="var(--col-10)">Get Started Now</Button>
              <Button $border="1px solid var(--col-10)">Get Started Now</Button>
            </div>
          </article>

          <div className="achievements">
            <div>
              <div>
                <FaSmile size={24} color="var(--col-10)" />
              </div>
              <div>
                <h2>1000+</h2>
                <p>Happy Clients</p>
              </div>
            </div>
            <div>
              <div>
                <img src={janitor} alt="janitor-icon" />
              </div>
              <div>
                <h2>1000+</h2>
                <p>Employees</p>
              </div>
            </div>
            <div>
              <div>
                <GiVacuumCleaner size={24} color="var(--col-10)" />
              </div>
              <div>
                <h2>1000+</h2>
                <p>Jobs done</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutHeroBox>
  );
}

export default AboutHero;
