import type { FC } from "react";
import type { NavItemProp } from "../../Interface/navItem";

export const NavItem: FC<NavItemProp> = ({ label }) => {
  return <li className="cursor-pointer">{label}</li>;
};
