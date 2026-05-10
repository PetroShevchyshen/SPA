import { Slider } from "../../componnents/Slider";
import { referenceItems } from "../../const/referenseItems";
import ArrowLeftIcon from "../../assets/arrow-left.svg";

export const Referense = () => {
  return (
    <section className="w-full h-min-56 pl-14">
      <h1 className="text-5xl font-extrabold text-end pr-14 pb-12">
        Referenzen
      </h1>
      <Slider
        slides={referenceItems.map((item, index) => (
          <div key={index} className="flex flex-col text-base">
            <img
              src={item.photo}
              alt={`Reference ${index + 1}`}
              className="w-full h-auto"
            />
            <p className="mt-2">
              <span className="font-bold">{item.location.split(",")[0]}</span>
              {", "}
              {item.location.split(",")[1]?.trim()}
            </p>
            <p className="text-sm underline">{item.teg}</p>
          </div>
        ))}
      />
      <p className="flex justify-end items-center mt-4 gap-2 cursor-pointer pr-14">
        See all <img src={ArrowLeftIcon} alt="Arrow left" />
      </p>
    </section>
  );
};
