import React from "react";
import { member1, member2, member3 } from "../assets";
import HeaderText from "./textComponents/HeaderText";

const teamMembers = [
  {
    name: "Esther Howard",
    role: "Founder",
    image: member1,
  },
  {
    name: "Cody Fisher",
    role: "Developer",
    image: member2,
  },
  {
    name: "Brooklyn Simmons",
    role: "Designer",
    image: member3,
  },
];

const MeetTheTeamSection = () => {
  return (
    <div className="flex flex-col justify-center items-center px-[10%] py-10 mt-5 bg-white">
      <HeaderText h1={"Meet the heroes behind the magic"} />
      <div className="flex lgss:flex-row flex-col justify-between items-center w-full gap-16">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="rounded-lg p-4 shadow-lg text-center w-[80%] lgss:w-1/3"
          >
            <img
              src={member.image}
              alt={member.name}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeamSection;
