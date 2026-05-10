import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

import { Pagination, Scrollbar } from "swiper/modules";
import type { FC } from "react";
import type { SliderProps } from "../../Interface/slider";

export const Slider: FC<SliderProps> = ({ slides, slidesPerView = 3 }) => {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      scrollbar={{
        hide: false,
      }}
      modules={[Pagination, Scrollbar]}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="pb-8">
          {slide}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
