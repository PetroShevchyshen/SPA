import { useState } from "react";
import { languages } from "../../const/language";

export const LanguageSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("en");

  return (
    <div className="relative w-24">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between px-4 py-2 cursor-pointer"
      >
        <span>{selected}</span>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full border border-black bg-white">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setSelected(lang);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left hover:bg-neutral-200 cursor-pointer"
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
