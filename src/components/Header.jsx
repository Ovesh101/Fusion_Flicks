import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { SideBarLinks } from "../utils/constant";
import ContactUsModal from "./ContactUsModal";

const Header = () => {
  const location = useLocation(); // Get the current location
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <header className="flex bg-transparent z-10 absolute top-0 left-0 right-0  justify-between items-center px-[30px] md:px-[100px] py-6 text-light-gray">
      {/* Logo on the left */}
      <div className="flex items-center">
        <img src="/path_to_your_logo.svg" alt="Logo" className="h-8 mr-2" />{" "}
        {/* Replace with your logo path */}
        <h1 className="text-2xl font-bold">My Website</h1>
      </div>

      {/* Navigation links on the right */}
      <div className="flex  gap-8">
        <nav className="md:flex hidden space-x-2">
          {SideBarLinks.map((link) => {
            const isActive = location.pathname === link.route; // Check if the link is active
            return (
              <Link
                key={link.label}
                to={link.route}
                className={`flex cursor-pointer items-center font-[500] py-[10px] text-[18px] px-8 rounded-[20px] ${
                  isActive ? "bg-golden-brown" : "text-light-gray" // Apply brown color if active
                }`}
              >
           
                {/* Adjust icon size */}
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center">
        

          <button onClick={handleClick} className=" font-[500] bg-golden-brown text-[18px] text-light-gray py-[10px] px-8 rounded-[20px] transition-colors duration-300 hover:bg-light-gray hover:text-golden-brown">
          Get Quote
          </button>
        </div>
      </div>

      <ContactUsModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
