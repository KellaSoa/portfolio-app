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
              className={`flex justify-between items-center w-full text-white ${
                !menu.icon
                  ? "hover:border-b-4 hover:border-pink hover:text-pink active:border-b-4 active:border-yellow active:text-yellow"
                  : ""
              } ${
                activeMenu === `#${menu.value.toLowerCase()}` && !menu.icon
                  ? "border-b-4 border-yellow text-yellow font-bold"
                  : ""
              }`}
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
