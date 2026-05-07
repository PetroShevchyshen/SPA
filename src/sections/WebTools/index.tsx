import ArrowLeftIcon from "../../assets/arrow-left.svg";
import { LetterMask } from "../../componnents/LetterMask";

export const Webtools = () => {
  return (
    <section className="flex gap-52 pl-14">
      <LetterMask />
      <div className="flex flex-col justify-center gap-4 max-w-180">
        <h1 className="text-5xl font-extrabold">5 Webtools für Sie</h1>
        <p className="text-2xl">
          Mit den Webtools von Tend kommen Sie schnell zu ersten Erkenntnissen.
        </p>
        <button className="flex gap-2 font-semibold">
          Zu den Webtools <img src={ArrowLeftIcon} alt="Arrow left" />
        </button>
      </div>
    </section>
  );
};
