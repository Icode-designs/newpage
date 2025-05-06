import React, { useEffect } from "react";
import { PackagesData } from "utils/data";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import PackageOverview from "components/packageDetailspageComponents/packageOverview/PackageOverview";
import PackageIntro from "components/packageDetailspageComponents/packageIntro/PackageIntro";
import PlanIntro from "components/packageDetailspageComponents/planInro/PlanIntro";
import VideoSection from "components/contactpageComponents/videoSection/VideoSection";

const PackageDetailpageBox = styled.main`
  animation: slideIn 0.7s ease;
  animation: rT 0.5s ease;
`;

function PackageDetailspage() {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const plan = PackagesData.find((x) => x.id == parseInt(id));

  return (
    <PackageDetailpageBox>
      <PackageOverview plan={plan} />
      <PackageIntro plan={plan} text="What’s included in this package?" />
      <PlanIntro plan={plan.monthlyPlan} text="Monthly plan" />
      <PlanIntro plan={plan.yearlyPlan} text="Yearly plan" />
      <VideoSection />
    </PackageDetailpageBox>
  );
}

export default PackageDetailspage;
