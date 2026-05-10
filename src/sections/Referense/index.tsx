import { Slider } from "../../componnents/Slider";
import { referenceItems } from "../../const/referenseItems";
import ArrowLeftIcon from "../../assets/arrow-left.svg";
import { ReferenseItem } from "../../componnents/ReferenseItem/ReferenseItem";

export const Referense = () => {
  return (
    <section className="w-full h-min-56 pl-14">
      <h1 className="text-5xl font-extrabold text-end pr-14 pb-12">
        Referenzen
      </h1>
      <Slider
        slides={referenceItems.map((item) => (
          <ReferenseItem {...item} key={item.location} />
        ))}
      />
      <p className="flex justify-end items-center mt-4 gap-2 cursor-pointer pr-4">
        See all <img src={ArrowLeftIcon} alt="Arrow left" />
      </p>
    </section>
  );
};
