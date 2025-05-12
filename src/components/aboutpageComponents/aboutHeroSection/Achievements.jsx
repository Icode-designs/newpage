import React from "react";
import janitor from "assets/janitor.png";

//icons
import { FaSmile } from "react-icons/fa";
import { GiVacuumCleaner } from "react-icons/gi";

//styles
import { AchievementBox, AchievementContainer } from "./aboutHeroStyles";

function Achievements() {
  return (
    <AchievementContainer>
      <AchievementBox>
        <div>
          <FaSmile size={24} color="var(--col-10)" />
        </div>
        <div>
          <h2>1000+</h2>
          <p>Happy Clients</p>
        </div>
      </AchievementBox>
      <AchievementBox>
        <div>
          <img src={janitor} alt="janitor-icon" />
        </div>
        <div>
          <h2>1000+</h2>
          <p>Employees</p>
        </div>
      </AchievementBox>
      <AchievementBox>
        <div>
          <GiVacuumCleaner size={24} color="var(--col-10)" />
        </div>
        <div>
          <h2>1000+</h2>
          <p>Jobs done</p>
        </div>
      </AchievementBox>
    </AchievementContainer>
  );
}

export default Achievements;
