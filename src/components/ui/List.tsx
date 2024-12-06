import { ReactElement, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type MenuType = {
  id: number;
  value: string;
  icon?: ReactElement;
  bgColor?: string;
  link?: string;
};

type ListProps = {
  className?: string;
  menus: MenuType[];
  onClick?: () => void;
};

export default function List({ menus, className, onClick }: ListProps) {
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

  const { t } = useTranslation();
  return (
    <>
      <ul className={className}>
        {menus.map((menu) => {
          const valueMenu = menu.icon ? menu.value : t(`${menu.value}.title`);
          const valueSlug = menu.icon ? menu.link : t(`${menu.value}.slug`);
          return (
            <li
              key={menu.id}
              className={`h-[60px] flex justify-between items-center ml-[-100px] md:hover:ml-[-10px] duration-300 ${
                menu.bgColor
              } ${menu.icon ? "w-[160px]" : ""} `}
            >
              <a
                className={`flex justify-between items-center w-full text-white ${
                  !menu.icon
                    ? "hover:border-b-4 hover:border-pink hover:text-pink active:border-b-4 active:border-yellow active:text-yellow"
                    : ""
                } ${
                  activeMenu === `#${valueMenu}` && !menu.icon
                    ? "border-b-4 border-yellow text-yellow font-bold"
                    : ""
                }`}
                href={menu.link ? menu.link : `#${valueSlug}`}
                target={menu.link ? "_blank" : "_self"}
                onClick={onClick}
              >
                {`${valueMenu}`} {menu.icon && menu.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
