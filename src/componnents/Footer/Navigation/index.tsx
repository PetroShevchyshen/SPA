import { footerItems } from "../../../const/footerItems";

export const FooterNavigation = () => {
  return (
    <div className="flex gap-8 cursor-pointer">
      {footerItems.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};
