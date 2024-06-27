import React from "react";

const FooterIcon = ({ icon: Icon }) => {
  return (
    <div className="bg-[#1E1E1E]/20 rounded-full p-3">
      {Icon && <Icon className="text-black text-xl" />}
    </div>
  );
};

export default FooterIcon;
