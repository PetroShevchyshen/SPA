import { type FC } from "react";
import type { ReferenseItemProps } from "../../Interface/referenseItem";

export const ReferenseItem: FC<ReferenseItemProps> = ({
  photo,
  location,
  teg,
}) => {
  return (
    <div className="flex flex-col text-base">
      <img src={photo} alt={`Reference }`} className="w-full h-auto" />
      <p className="mt-2">
        <span className="font-bold">{location.split(",")[0]}</span>
        {", "}
        {location.split(",")[1]?.trim()}
      </p>
      <p className="text-sm underline">{teg}</p>
    </div>
  );
};
