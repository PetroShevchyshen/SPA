import { Slider } from "../../componnents/Slider";
import ArrowLeftIcon from "../../assets/arrow-left.svg";
import { realEstateItems } from "../../const/realEstate";
import { RealEstaitItem } from "../../componnents/RealEstaitItem";

export const RealEstate = () => {
  return (
    <section className="pl-60">
      <h1 className="text-5xl font-extrabold text-end pr-14 pb-12">
        Immobilienangebote
      </h1>
      <Slider
        slides={realEstateItems.map((item) => (
          <RealEstaitItem key={item.address} {...item} />
        ))}
      />
      <p className="flex justify-end items-center mt-4 gap-2 cursor-pointer pr-14">
        See all <img src={ArrowLeftIcon} alt="Arrow left" />
      </p>
    </section>
  );
};
