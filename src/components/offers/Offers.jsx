import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { db } from '../config/firebase';
import { collection, getDocs } from "firebase/firestore";
import Nav from 'react-bootstrap/Nav';

import "swiper/swiper.min.css";
import 'swiper/css/pagination';
import MySwiper from "../slider/MySwiper";
import "./offer.css"
SwiperCore.use([Pagination, Autoplay]);

const Offers = () => {
  const [content, setContent] = useState(<MySwiper tripType='StandardFourPackages' />);

  useEffect(() => {
    setContent(<MySwiper tripType='StandardFourPackages' />);
  }, []);

  const handleClick = (eventKey) => {
    switch (eventKey) {
      case "EgyptTour":
        setContent(<MySwiper tripType='StandardFourPackages' />);
        console.log('EgyptTour');
        break;
      case "DayTour":
        setContent(<MySwiper tripType='LuxorDayTours' />);
        break;
      case "NileCruise":
        setContent(<MySwiper tripType='nileCruise' />);
        break;
      default:
        setContent(<MySwiper tripType='StandardFourPackages' />);
    }
  };

  return (
    <>
    <div>
                      <Nav fill variant="tabs" defaultActiveKey="EgyptTour" className=" rounded-3 p-0 m-0 bg-white shadow" onSelect={handleClick} >

      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        fill
        variant="tabs"
        defaultActiveKey="EgyptTour"
        onSelect={handleClick}
        modules={[Pagination]}
        className="bg-transparent  p-0 rounded-3 m-0 w-75 m-auto"
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide  className="" >
          <Nav.Item className="p-0 m-0 bg-white">
          <Nav.Link eventKey="EgyptTour"  selectedType="StandardFourPackages"  className="text-black nav-text text-muted  rounded-3 py-3" >Egypt Tour Package</Nav.Link>
          </Nav.Item>
        </SwiperSlide>
        <SwiperSlide>
          <Nav.Item>
            <Nav.Link eventKey="DayTour" className="text-black nav-text text-muted   rounded-3 py-3" selectedType="DayTour">Egypt Day Tours</Nav.Link>
          </Nav.Item>
        </SwiperSlide>
        <SwiperSlide >
          <Nav.Item>
            <Nav.Link eventKey="NileCruise" className="text-black nav-text text-muted  rounded-3 py-3"selectedType="nileCruise">Egypt Nile Cruise</Nav.Link>
          </Nav.Item>
        </SwiperSlide>
      </Swiper>
      </Nav>
    </div>
    <div className="">
    {content}
  </div>
</>
  );
};

export default Offers;
