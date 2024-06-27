import React from "react";
import { twoPeople } from "../assets";
import ContactForm from "./ContactForm";

function SendProposalSection() {
  return (
    <div className="px-[10%] my-10 py-10 w-full flex justify-between items-center h-screen">
      <div className="h-fit lgss:w-[40%] w-full bg-pinkBg hidden lgss:flex justify-center items-center py-10 px-7">
        <img className="h-[600px]" src={twoPeople} alt="Proposal Image" />
      </div>
      <div className="lgss:w-[45%] w-full h-full flex justify-center items-center">
        <ContactForm />
      </div>
    </div>
  );
}

export default SendProposalSection;
