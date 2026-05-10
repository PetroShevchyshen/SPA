import { Slider } from "../../componnents/Slider";
import ArrowLeftIcon from "../../assets/arrow-left.svg";
import { realEstateItems } from "../../const/realEstate";

export const RealEstate = () => {
  return (
    <section className="pl-60">
      <h1 className="text-5xl font-extrabold text-end pr-14 pb-12">
        Immobilienangebote
      </h1>
      <Slider
        slides={realEstateItems.map((item) => (
          <div key={item.address}>
            <img src={item.photo} alt={item.title} />
            <p className="mt-4 text-sm font-medium">{item.tag}</p>
            <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
            <p className="mt-4 text-neutral-500">{item.address}</p>
            <p className="text-neutral-500">{item.location}</p>
            <p className="mt-6 font-bold">{item.price}</p>
          </div>
        ))}
      />
      <p className="flex justify-end items-center mt-4 gap-2 cursor-pointer pr-14">
        See all <img src={ArrowLeftIcon} alt="Arrow left" />
      </p>
    </section>
  );
};
