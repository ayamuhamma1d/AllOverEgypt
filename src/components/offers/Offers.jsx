
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { db } from '../config/firebase';
import { collection, getDocs } from "firebase/firestore";

import "swiper/swiper.min.css";
import 'swiper/css/pagination';
SwiperCore.use([Pagination, Autoplay]);

const Offers = () => {
  return (
    <div>
    <Swiper
        slidesPerView={3} 
        spaceBetween={15}
   
        modules={[Pagination]}
        className="mySwiper bg-white p-3 rounded-3 "
        breakpoints={{
            0: {
              slidesPerView: 1.6,
              spaceBetween:8,

            },
            768: {
              slidesPerView: 1.5,
            },
            975:{
                slidesPerView: 2.2,

            },
            1024: {
                slidesPerView: 2.5,
              },
              1200: {
              slidesPerView:3,
            },
          
          }}
    >

            <SwiperSlide className=" secondary-color-text" >
            Egypt Tour Package
            </SwiperSlide>
            <SwiperSlide >
            EgyptDay Tours
            </SwiperSlide>
            <SwiperSlide >
            Egypt Nile Cruise
            </SwiperSlide>
       
     
    </Swiper>
</div>
  )
}

export default Offers