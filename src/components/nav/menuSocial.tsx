import { ReactElement } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
//import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../../assets/Kella_CV.pdf";

type MenuSocialItem = {
  id: number;
  value: string;
  icon?: ReactElement;
  bgColor?: string;
  link?: string;
};

export const menuSocial: MenuSocialItem[] = [
  {
    id: 0,
    value: "Linkedin",
    icon: <FaLinkedin size={30} />,
    bgColor: "bg-[#4055b3]",
    link: "https://www.linkedin.com/in/kella-fullstack-symfony-laravel-react/",
  },
  {
    id: 1,
    value: "Github",
    icon: <FaGithub size={30} />,
    bgColor: "bg-[#333333]",
    link: "https://github.com/KellaSoa",
  },
  /*{
    id: 2,
    value: "Email",
    icon: <HiOutlineMail size={30} />,
    bgColor: "bg-[#6f7ec2]",
    link: "",
  },*/
  {
    id: 3,
    value: "Resume",
    icon: <BsFillPersonLinesFill size={30} />,
    bgColor: "bg-[#565f69]",
    link: resume,
  },
];
