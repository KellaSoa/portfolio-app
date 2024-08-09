import React from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../../assets/logo1.png";
import List from "../ui/List";
import { menuConfig } from "./menuConfig";

export default function NavBar() {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="logo" style={{ width: "50px" }} />
      </div>
      <div>
        <List menus={menuConfig} className="flex" />
      </div>
      <div className="hidden">
        <FaBars />
      </div>
      <div>
        <List menus={menuConfig} className="hidden" />
      </div>
    </div>
  );
}
