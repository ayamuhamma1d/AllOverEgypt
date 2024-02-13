import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "./../../assets/img/real estate4 (1).jpg";
import img2 from "./../../assets/img/real estate3 (2).jpg";
import img3 from "./../../assets/img/real estate1 (4).jpg";
import img4 from "./../../assets/img/real estate6.jpg";
import img5 from "./../../assets/img/real estate7.jpg";
import img6 from "./../../assets/img/real estate8.jpg";
import img7 from "./../../assets/img/real estate9.jpg";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade"; 

import "swiper/css";


const Slider = () => {
  const swiperParams = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 100,
      disableOnInteraction: false,
    },
  };

  return (
    <Swiper className="mySwiper" {...swiperParams}>
      <SwiperSlide>
        <img src={img1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img5} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img6} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img7} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
