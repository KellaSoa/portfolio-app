import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/logoPortfolio.png";
import List from "../ui/List";
import { menuConfig } from "./menuConfig";
import { menuSocial } from "./menuSocial";
import Language from "./Language";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close menu
  };

  return (
    <div className=" fixed top-0 left-0 shadow-md w-full h-[80px] flex justify-end items-center px-4 bg-primary text-white z-20">
      <div className="mr-auto">
        <a href="#home">
          <img src={Logo} alt="logo" style={{ width: "80px" }} />
        </a>
      </div>
      <div className="hidden md:flex">
        <List menus={menuConfig} className="flex space-x-4" />
      </div>
      <div className="md:hidden order-2 lg:order-1 pl-3" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      {/* Dropdown menu for mobile */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-[80px] left-0 w-full bg-primary mobile text-center md:hidden `}
      >
        <List
          menus={menuConfig}
          className="flex flex-col items-center"
          onClick={closeMenu}
        />
      </div>
      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 z-20">
        <List menus={menuSocial} className="flex flex-col py-4" />
      </div>
      <Language />
    </div>
  );
}
