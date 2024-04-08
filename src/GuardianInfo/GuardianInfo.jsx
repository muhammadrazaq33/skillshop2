import React from "react";
import GuardianInfoHero from "./GuardianInfoHero";
import GuardianInfoSection from "./GuardianInfoSection";
import ConfirmationMessage from "./ConfirmationMessage";

const GuardianInfo = () => {
  return (
    <div>
      <GuardianInfoHero />
      <GuardianInfoSection />
      <ConfirmationMessage />
    </div>
  );
};

export default GuardianInfo;
