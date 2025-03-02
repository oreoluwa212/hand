import React from "react";
import NavMenu from "../components/NavMenu";
import HeroSection from "../components/HeroSection";
import WhoWeAreSection from "../components/WhoWeAreSection";
import MeetTheTeamSection from "../components/MeetTheTeamSection";
import ReviewsSection from "../components/ReviewsSection";
import SendProposalSection from "../components/SendProposalSection";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="">
      <div className="overlay bg-yellowBg font-manrope mb-10">
        <NavMenu />
        <HeroSection />
      </div>
      <WhoWeAreSection />
      <MeetTheTeamSection />
      <ReviewsSection />
      <SendProposalSection />
      <Footer/>
    </div>
  );
};

export default LandingPage;
