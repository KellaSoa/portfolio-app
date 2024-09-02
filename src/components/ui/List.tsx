import { Link as ScrollLink } from "react-scroll";
type MenuType = {
  id: number;
  value: string;
};

type ListProps = {
  className?: string;
  menus: MenuType[];
};

export default function List({ menus, className }: ListProps) {
  return (
    <div>
      <ul className={className}>
        {menus.map((menu) => (
          <li key={menu.id}>
            <ScrollLink to={menu.value}>{menu.value}</ScrollLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
