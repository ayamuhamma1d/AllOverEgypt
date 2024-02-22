import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import feed1 from './../../assets/img/real estate3 (4).jpg';
import feed2 from './../../assets/img/real estate4 (3).jpg';

import feed3 from './../../assets/img/real estate1 (10).jpg';
import './feedback.css'
const Feedback = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper feedback" >
        <SwiperSlide><img src={feed1} alt=""  /></SwiperSlide>
        <SwiperSlide><img src={feed2} alt=""  /></SwiperSlide>
        <SwiperSlide><img src={feed3} alt=""  /></SwiperSlide>

      </Swiper>
    </>
  )
}

export default Feedback