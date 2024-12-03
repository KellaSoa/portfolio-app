import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/logo1.png";
import List from "../ui/List";
import { menuConfig } from "./menuConfig";
import { menuSocial } from "./menuSocial";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10">
      <div>
        <img src={Logo} alt="logo" style={{ width: "50px" }} />
      </div>
      <div className="hidden md:flex">
        <List menus={menuConfig} className="flex space-x-4" />
      </div>
      <div className="md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      {/* Dropdown menu for mobile */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-[80px] left-0 w-full bg-[#0a192f] text-center md:hidden`}
      >
        <List menus={menuConfig} className="flex flex-col" />
      </div>
      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <List menus={menuSocial} className="flex flex-col py-4" />
      </div>
    </div>
  );
}
