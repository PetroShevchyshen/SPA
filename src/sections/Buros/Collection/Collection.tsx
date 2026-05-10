import { buroItems } from "../../../const/buroItems";

export const Collection = () => {
  return (
    <div className="h-full grid grid-cols-4 px-14">
      {buroItems.map((item, index) => {
        const isLastColumn = (index + 1) % 4 === 0;
        const isLastRow =
          index >= buroItems.length - (buroItems.length % 4 || 4);

        return (
          <div
            key={item}
            className="relative flex min-h-56 items-center justify-center"
          >
            <div className="text-[32px] font-extrabold">{item}</div>
            {!isLastColumn && (
              <div className="absolute right-0 top-8 h-[70%] w-px bg-gray-300" />
            )}
            {!isLastRow && (
              <div className="absolute bottom-0 left-8 h-px w-[86%] bg-gray-300" />
            )}
          </div>
        );
      })}
    </div>
  );
};
