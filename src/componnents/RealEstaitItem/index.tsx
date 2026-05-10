import type { FC } from "react";
import type { RealEstateItem } from "../../Interface/realEstaitItem";

export const RealEstaitItem: FC<RealEstateItem> = ({
  address,
  photo,
  tag,
  title,
  location,
  price,
}) => {
  return (
    <div key={address}>
      <img src={photo} alt={title} />
      <p className="mt-4 text-sm font-medium">{tag}</p>
      <h3 className="mt-2 text-xl font-bold">{title}</h3>
      <p className="mt-4 text-neutral-500">{address}</p>
      <p className="text-neutral-500">{location}</p>
      <p className="mt-6 font-bold">{price}</p>
    </div>
  );
};
