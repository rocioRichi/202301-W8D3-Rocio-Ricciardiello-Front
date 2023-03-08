import { Link } from "react-router-dom";
import "./menu.css";

export type MenuOption = {
  label: string;
  path: string;
};

export const menuOptions: MenuOption[] = [
  { label: "Home", path: "/home" },
  { label: "Register", path: "/register" },
  { label: "Login", path: "/login" },
  { label: "Gallery", path: "/gallery" },
];

type MenuProps = {
  options: MenuOption[];
};

export function Menu({ options }: MenuProps) {
  return (
    <div>
      <nav className="menu-container">
        <ul className="menu">
          {menuOptions.map((item: MenuOption) => (
            <li key={item.label} className="menu__option">
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
