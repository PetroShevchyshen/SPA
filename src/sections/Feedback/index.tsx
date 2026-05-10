import { Slider } from "../../componnents/Slider";
import { feedbackItems } from "../../const/feedback";

export const Feedback = () => {
  return (
    <section className="pl-60 py-40 flex gap-50.75">
      <div className="w-[320px] shrink-0">
        <h2 className="text-5xl leading-[0.95] font-extrabold">
          Was Kund:innen über Tend sagen
        </h2>
      </div>
      <Slider
        slidesPerView={2}
        slides={feedbackItems.map((item) => (
          <div>
            <p className="text-lg leading-[1.4]">{item.text}</p>
            <div className="mt-10">
              <h3 className="text-2xl font-bold">{item.name}</h3>
              <p className="mt-2 font-semibold">{item.position}</p>
            </div>
          </div>
        ))}
      />
    </section>
  );
};
