import React from "react";
import Navbar from "./Navbar";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-300 mt-20">
      <div className="container mx-auto mt-10">
        <Navbar isFooter brandName="Cottage retreate" />
        <div className="flex flex-col space-y-4 items-start mt-10 md:hidden px-1">
          <a href="#" className="text-gray-700 font-light">
            Home
          </a>
          <a href="#" className="text-gray-700 font-light">
            About
          </a>
          <a href="#" className="text-gray-700 font-light">
            Services
          </a>
          <a href="#" className="text-gray-700 font-light">
            Contact
          </a>

          <a href="#" className="text-gray-700 font-light">
            Privacy
          </a>
          <a href="#" className="text-gray-700 font-light">
            Terms & Conditions
          </a>

          <div className="hidden lg:flex space-x-4">
            <a
              href="#"
              className="text-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Use
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-20">
          {/* Left side */}
          <div className="text-start mb-4 md:mb-0">
            <p className="text-sm font-light text-gray-700 my-2">Company name &copy; 2023. All rights reserved.</p>
            <p className="text-sm font-light text-gray-700 my-2">
              Design by <b className="font-bold">Framework.</b>
            </p>
          </div>

          {/* Right side - Hidden on mobile */}
          <div className="hidden md:flex space-x-4">
            <a
              href="#"
              className="font-light text-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-light text-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
