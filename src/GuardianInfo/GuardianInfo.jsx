import React from "react";
import GuardianInfoHero from "./GuardianInfoHero";
import GuardianInfoSection from "./GuardianInfoSection";
import ConfirmationMessage from "./ConfirmationMessage";
import GuardianFooter from "./GuardianFooter";

const GuardianInfo = () => {
  return (
    <div>
      <GuardianInfoHero />
      <GuardianInfoSection />
      <ConfirmationMessage />
      <GuardianFooter />
    </div>
  );
};

export default GuardianInfo;
