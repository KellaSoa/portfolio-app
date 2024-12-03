import { Link as ScrollLink } from "react-scroll";
import { ReactElement, useEffect, useState } from "react";

type MenuType = {
  id: number;
  value: string;
  icon?: ReactElement; // Nullable
  bgColor?: string; // Nullable
};

type ListProps = {
  className?: string;
  menus: MenuType[];
};

export default function List({ menus, className }: ListProps) {
  const [activeMenu, setActiveMenu] = useState<string>("");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveMenu(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  return (
    <>
      <ul className={className}>
        {menus.map((menu) => (
          <li
            key={menu.id}
            className={`h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${
              menu.bgColor
            } ${menu.icon ? "w-[160px]" : ""} `}
          >
            <a
              className={`flex justify-between items-center w-full text-gray-300 ${
                !menu.icon
                  ? "hover:inline hover:border-b-4 hover:border-pink-600 active:text-cyan-300"
                  : "" // Apply yellow underline if no icon
              } ${
                activeMenu === `#${menu.value.toLowerCase()}`
                  ? "text-pink-600 font-bold"
                  : ""
              }`} // Apply yellow color if active
              href={`#${menu.value.toLowerCase()}`}
            >
              {menu.value} {menu.icon && menu.icon}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
