import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import IconButton from "../elements/IconButton";

interface NavbarProps {
  variant?: "light" | "dark";
  isFooter?: boolean;
  brandName: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  brandName: string;
}

interface NavLinkProps {
  label: string;
  link: string;
  isMobile?:boolean;
}

const NAVIGATION_ITEMS: NavLinkProps[] = [
  { label: "Home", link: "#" },
  { label: "About", link: "#" },
  { label: "Services", link: "#" },
  { label: "Contact", link: "#" },
];

const commonLinkStyles = "text-gray-700 font-light";
const mobileLinkStyles = "text-white w-full text-start text-2xl hover:bg-green-200 focus:bg-green-200 text-2xl p-2"

const Navbar: React.FC<NavbarProps> = ({ variant, brandName, isFooter = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const body = document.body;

    if (isMobileMenuOpen) {
      body.classList.add('overflow-hidden');
    } else {
      body.classList.remove('overflow-hidden');
    }

    return () => {
      body.classList.remove('overflow-hidden');
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={isFooter ? "" : "sticky top-0 lg:static z-100 bg-white bg-opacity-60 py-4"}>
      <div className="container mx-auto w-full text-black  flex items-center justify-between">
        <a href="#" className="text-black font-bold uppercase">
          {brandName}
        </a>

        {/* Navigation Items (Right-aligned) */}
        <div className="hidden md:flex space-x-4">
          {NAVIGATION_ITEMS.map(({ label, link }) => (
            <NavLink key={label} label={label} link={link} />
          ))}
        </div>

        {/* Mobile Menu Button (Hidden on larger screens) */}
        {!isFooter && (
          <div className="md:hidden float-right">
            <IconButton
              icon={<RxHamburgerMenu/>}
              textColor="black"
              onClick={toggleMobileMenu}
              fontSize="3xl"
            />
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} brandName={brandName} />
    </nav>
  );
};

const NavLink: React.FC<NavLinkProps> = ({ label, link , isMobile }) => (
  <a href={link} className={isMobile ? mobileLinkStyles : commonLinkStyles}>
    {label}
  </a>
);

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose ,brandName }) => {
  const MOBILE_MENU_CLASSES = `md:hidden ${isOpen ? "" : "hidden"} bg-green-100 p-4 z-50 h-full fixed top-0 left-0 right-0 bottom-0 flex flex-col justify-between`;

  return (
    <div className={MOBILE_MENU_CLASSES}>
      <div>
        {/* Close Button with "X" */}
        <div className="flex justify-between items-center mt-4 p-2">
          <a href="#" className="text-white font-bold uppercase">
            {brandName}
          </a>
          <IconButton
            icon={<AiOutlineClose />}
            textColor="white"
            onClick={onClose}
            fontSize="4xl"
            />
        </div>

        {/* Menu Items */}
        <div className="flex flex-col space-y-8 items-start px-1 mt-20">
          {NAVIGATION_ITEMS.map(({ label, link }) => (
            <NavLink key={label} label={label} link={link} isMobile />
          ))}
        </div>
      </div>

      {/* Privacy and Terms */}
      <div className="mb-4 flex flex-col space-y-6 items-start">
        
          <a href="#" className="text-white p-2 w-full text-start hover:bg-green-200 focus:bg-green-200">
            Privacy
          </a>
       
          <a href="#" className="text-white mt-2 p-2 w-full text-start hover:bg-green-200 focus:bg-green-200">
            Terms & Conditions
          </a>
        
      </div>
    </div>
  );
};

export default Navbar;
