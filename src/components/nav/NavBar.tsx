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

  const [activeLanguage, setActiveLanguage] = useState("fr");

  const switchLanguage = (lang: string) => {
    setActiveLanguage(lang);
  };
  return (
    <div className=" fixed top-0 left-0 shadow-md w-full h-[80px] flex justify-end items-center px-4 bg-primary text-white z-20">
      <div className="mr-auto">
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
        } absolute top-[80px] left-0 w-full bg-primary mobile text-center md:hidden`}
      >
        <List menus={menuConfig} className="flex flex-col" />
      </div>
      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 z-20">
        <List menus={menuSocial} className="flex flex-col py-4" />
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => switchLanguage("fr")}
          className={`${
            activeLanguage === "fr"
              ? "bg-yellow font-bold rounded-sm text-center p-1"
              : "text-white"
          } hover:text-pink`}
        >
          FR
        </button>
        <span className="text-white">|</span>
        <button
          onClick={() => switchLanguage("en")}
          className={`${
            activeLanguage === "en" ? "bg-yellow font-bold" : "text-white"
          } hover:text-pink`}
        >
          EN
        </button>
      </div>
    </div>
  );
}
