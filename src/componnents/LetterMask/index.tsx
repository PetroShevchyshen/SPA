import BgImage from "../../assets/photo/452d9317e4ffa37a8990638960eaef4051a14743.jpg";

export const LetterMask = () => {
  return (
    <div className="flex items-center justify-center">
      <h1
        className="
          text-[400px]
          leading-none
          font-black
          text-transparent
          bg-clip-text
          bg-center
          bg-cover
        "
        style={{
          backgroundImage: `url(${BgImage})`,
        }}
      >
        t
      </h1>
    </div>
  );
};
