import ArrowLeftIconWhite from "../../assets/arrow-left-white.svg";

export const Termin = () => {
  return (
    <section className="relative overflow-hidden bg-[#1A1A1A] py-22 pl-61.5 min-h-96">
      <div className="relative z-10 flex flex-col gap-4">
        <h1 className="text-5xl font-extrabold text-white">Termin buchen</h1>
        <p className="text-[#FFFFFF66]">
          Wir sind für Sie da — buchen Sie einen Termin in unserem{" "}
          <span className="underline cursor-pointer">Kalender</span>
        </p>
        <button className="flex items-center text-white gap-2 pt-20">
          Datum auswählen
          <img src={ArrowLeftIconWhite} alt="Arrow left" />
        </button>
      </div>
      <p className="absolute -right-10 top-1/3 -translate-y-1/2 text-white font-extrabold text-[720px] leading-none opacity-100 select-none pointer-events-none">
        t
      </p>
    </section>
  );
};
