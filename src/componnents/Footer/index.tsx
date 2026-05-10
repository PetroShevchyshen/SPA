import { FooterNavigation } from "./Navigation";
import linkedinIcon from "../../assets/link.svg";
import instagramIcon from "../../assets/instagram.svg";

export const Footer = () => {
  return (
    <div className="h-14 flex items-center justify-around">
      <FooterNavigation />
      <div className="flex gap-4">
        <a href="https://www.linkedin.com/" target="_blank">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </div>
  );
};
