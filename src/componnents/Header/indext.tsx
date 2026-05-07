import { Navigation } from "../Navigation";

export const Header = () => {
  return (
    <div className="flex justify-around items-center sticky top-0 h-16 bg-white opacity-85 z-50">
      <p>tend</p>
      <Navigation />
      <p>en</p>
    </div>
  );
};
