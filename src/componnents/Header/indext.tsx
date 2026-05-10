import { Navigation } from "../Navigation";
import logo from "../../assets/logo.png";
import { LanguageSelect } from "../LengSelect";

export const Header = () => {
  return (
    <div className="flex justify-around items-center sticky top-0 h-16 bg-white opacity-85 z-50">
      <img src={logo} alt="Logo" />
      <Navigation />
      <LanguageSelect />
    </div>
  );
};
