import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { PiInstagramLogoFill } from "react-icons/pi";
import FooterIcon from "./textComponents/FooterIcon";

const Footer = () => {
  return (
    <div className="w-full py-10 flex flex-col items-center justify-center">
      <div className="flex justify-between w-full max-w-[80%] items-center py-5">
        <div>
          <h1 className="font-manrope font-extrabold text-2xl">Hand</h1>
        </div>
        <button className="py-3 px-6 bg-black text-white rounded-lg">
          Start a project
        </button>
      </div>
      <div className="flex lgss:flex-row flex-col justify-between w-full max-w-[80%] items-center">
        <p>We love what we do and create partnerships</p>
        <p>hello@devseal.tech</p>
      </div>
      <div className="flex w-full max-w-[80%] items-center justify-end py-6 space-x-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FooterIcon icon={FaXTwitter} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FooterIcon icon={FaLinkedin} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FooterIcon icon={ImFacebook2} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FooterIcon icon={PiInstagramLogoFill} />
        </a>
        <p className="text-lg text-[#525D6A]">Hand</p>
      </div>
      <hr className="w-[60%] mt-10" />
      <div className="flex lgss:flex-row flex-col justify-between w-full max-w-[80%] items-center pt-8 font-semibold">
        <p>© 2024 Hand. All Rights Reserved</p>
        <div className="flex lgss:flex-row flex-col space-x-4">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/media-kit">Media Kit</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
