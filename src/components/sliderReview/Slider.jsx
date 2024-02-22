import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

SwiperCore.use([Pagination, Autoplay]);

const Slider = ({ images }) => {
  const swiperParams = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };

  return (
    <Swiper className="mySwiper pointer-event" {...swiperParams}>
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img} alt={`Slide ${index}`} className="shared-slider-img" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
