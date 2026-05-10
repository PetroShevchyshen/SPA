import { useEffect, useRef, useState } from "react";
import { mainContent } from "../../const/mainContent";
import ArrowLeftIcon from "../../assets/arrow-left.svg";
import ArrowLeftIconWite from "../../assets/arrow-left-white.svg";
import BgVideo from "../../assets/video/pexels-laura-tancredi-7065798.mp4";

export const MainAccordion = () => {
  const [active, setActive] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (active === 1) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [active]);

  return (
    <div className="flex h-full">
      {mainContent.items.map((item, i) => (
        <div
          key={i}
          onClick={() => setActive(i)}
          className={`relative overflow-hidden transition-all duration-500 cursor-pointer p-4 group h-full
          ${active === i ? "flex-2" : "flex-1"}
          ${i === 1 ? "text-white" : "text-black"}
          border-l border-[#F2F2F2] first:border-l-0
          flex flex-col justify-end gap-16 pb-36`}
        >
          {i === 1 && (
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={BgVideo} type="video/mp4" />
            </video>
          )}
          <div className="relative z-10">
            <p className="text-3xl lg:text-5xl font-extrabold max-w-72 break-all">
              {item.title}
            </p>

            <p
              className={` max-w-56 mt-16 ${i === 1 ? "text-4xl font-extrabold" : "text-2xl font-medium"}`}
            >
              {item.subTitle}
            </p>

            <div className="flex gap-2 mt-16">
              <button className="font-semibold">{item.buttonText}</button>

              <p className="hidden group-hover:block">
                <img
                  src={`${i === 1 ? ArrowLeftIconWite : ArrowLeftIcon}`}
                  alt="Arrow left"
                />
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
