import React, { useEffect, useRef } from "react";
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
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      const cards = section.querySelectorAll(".card");
      cards.forEach((card) => observer.observe(card));
    }

    return () => {
      if (section) {
        const cards = section.querySelectorAll(".card");
        cards.forEach((card) => observer.unobserve(card));
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col justify-center items-center px-[10%] py-10 mt-5 bg-white"
    >
      <HeaderText h1={"Meet the heroes behind the magic"} />
      <div className="flex lgss:flex-row flex-col justify-between items-center w-full gap-16">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`card rounded-lg p-4 shadow-lg text-left space-y-2 w-[80%] lgss:w-1/3 ${
              index % 2 === 0 ? "fade-down" : "fade-up"
            }`}
          >
            <img
              src={member.image}
              alt={member.name}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-[#101010]/65 font-medium text-lg">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeamSection;
