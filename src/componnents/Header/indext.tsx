import { Navigation } from "../Navigation";

export const Header = () => {
  return (
    <div className="flex justify-around items-center sticky top-0 h-16">
      <p>tend</p>
      <Navigation />
      <p>en</p>
    </div>
  );
};
