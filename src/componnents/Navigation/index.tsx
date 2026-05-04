import { navItems } from "../../const/navItems";
import { NavItem } from "../NavItem";

export const Navigation = () => {
  return (
    <nav>
      <ul className="flex flex-row gap-12 text-base">
        {navItems.items.map((item) => (
          <NavItem key={item.id} label={item.label} />
        ))}
      </ul>
    </nav>
  );
};
