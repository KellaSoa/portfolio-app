import { ReactElement } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

type MenuSocialItem = {
  id: number;
  value: string;
  icon?: ReactElement;
  bgColor?: string;
};

export const menuSocial: MenuSocialItem[] = [
  {
    id: 0,
    value: "Linkedin",
    icon: <FaLinkedin size={30} />,
    bgColor: "bg-blue-600",
  },
  {
    id: 1,
    value: "Github",
    icon: <FaGithub size={30} />,
    bgColor: "#333333",
  },
  {
    id: 2,
    value: "Email",
    icon: <HiOutlineMail size={30} />,
    bgColor: "bg-[#6fc2b0]",
  },
  {
    id: 3,
    value: "Resume",
    icon: <BsFillPersonLinesFill size={30} />,
    bgColor: "bg-[#565f69]",
  },
];
