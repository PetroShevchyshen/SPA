import { FooterNavigation } from "./Navigation";

export const Footer = () => {
  return (
    <div className="h-14 flex items-center justify-around">
      <FooterNavigation />
      <div className="flex gap-4">
        <p>link</p>
        <p>insta</p>
      </div>
    </div>
  );
};
