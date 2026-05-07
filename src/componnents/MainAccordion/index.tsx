import { useState } from "react";
import { mainContent } from "../../const/mainContent";
import ArrowLeftIcon from "../../assets/arrow-left.svg";

export const MainAccordion = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex h-full items-end bg-amber-300">
      {mainContent.items.map((item, i) => (
        <div
          key={i}
          onClick={() => setActive(i)}
          className={`transition-all duration-500 cursor-pointer p-4 group ${
            active === i ? "flex-2" : "flex-1"
          } flex flex-col gap-16 pb-36`}
        >
          <p className="text-5xl font-extrabold max-w-60">{item.title}</p>
          <p className="text-2xl max-w-56">{item.subTitle}</p>
          <div className="flex gap-2">
            <button>{item.buttonText}</button>
            <p className="hidden group-hover:block">
              <img src={ArrowLeftIcon} alt="Arrow left" />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
