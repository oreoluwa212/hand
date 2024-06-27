import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <div className="w-full px-[5%] relative py-5 bg-white">
      {/* Desktop Navigation */}
      <div className="lgss:flex lgss:flex-row hidden justify-between items-center font-semibold py-3 bg-transparent">
        <div className="flex justify-center items-center">
          <Link to={"/"}>
            <h1 className="font-manrope font-extrabold text-xl">Hand</h1>
          </Link>
        </div>
        <ul className="lgss:flex gap-7 justify-between lg:w-[50%] lgss:w-[35%] font-semibold text-sm text-secondary">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/"}>
            <li>About Us</li>
          </Link>
          <Link to={"/"}>
            <li>Services</li>
          </Link>
          <Link to={"/"}>
            <li>Blog</li>
          </Link>
          <Link to={"/"}>
            <li>Contact Us</li>
          </Link>
        </ul>
        <div className="flex">
          <Link to={"/"}>
            <button className="bg-primary rounded-xl py-3 px-4 shadow-sm text-white">
              Start a project
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex lgss:hidden w-full justify-between items-center py-5 border-b px-10">
        <div className="flex justify-center items-center">
          <Link to={"/"}>
            <h1 className="font-manrope font-extrabold">Hand</h1>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-6">
          <Link to={"/"}>
            <button className="bg-primary rounded-xl py-3 px-4 shadow-sm text-white border">
              Start a project
            </button>
          </Link>
          {isOpen ? (
            <FaTimes
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-secondary z-20 text-[24px]"
            />
          ) : (
            <FaBars
              onClick={() => setIsOpen(true)}
              className="cursor-pointer text-secondary z-20 text-[24px]"
            />
          )}
        </div>
      </div>

      {isOpen && (
        <div
          className={`fixed top-0 left-0 h-screen bg-white w-full text-white font-bold lgss:hidden flex flex-col pt-8 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="bg-white flex flex-col justify-center items-center w-full h-screen z-">
            <ul className="flex flex-col gap-8 pb-8 justify-center text-secondary font-semibold text-[20px]">
              <Link to={"/"}>
                <li onClick={() => setIsOpen(false)}>Home</li>
              </Link>
              <Link to={"/"}>
                <li onClick={() => setIsOpen(false)}>About Us</li>
              </Link>
              <Link to={"/"}>
                <li onClick={() => setIsOpen(false)}>Services</li>
              </Link>
              <Link to={"/"}>
                <li onClick={() => setIsOpen(false)}>Blog</li>
              </Link>
              <Link to={"/"}>
                <li onClick={() => setIsOpen(false)}>Contact Us</li>
              </Link>
            </ul>
            <div className="flex flex-col-reverse justify-center items-center gap-10 w-full px-[10%]">
              <Link className="w-full" to={"/"}>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-primary rounded-xl py-4 px-3 shadow-md text-white w-full"
                >
                  Start a project
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavMenu;
