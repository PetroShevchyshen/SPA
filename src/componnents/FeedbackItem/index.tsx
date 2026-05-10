import { type FC } from "react";
import type { FeedbackItemProps } from "../../Interface/feedback";

export const FeedbackItem: FC<FeedbackItemProps> = ({
  text,
  name,
  position,
}) => {
  return (
    <div>
      <p className="text-lg leading-[1.4]">{text}</p>
      <div className="mt-10">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="mt-2 font-semibold">{position}</p>
      </div>
    </div>
  );
};
