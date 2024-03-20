import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import { Link } from 'react-router-dom';
import { SiYourtraveldottv } from 'react-icons/si';
import Nav from 'react-bootstrap/Nav';
import MySwiper from '../slider/MySwiper';
import './offer.css';

import 'swiper/swiper.min.css';
import 'swiper/css/pagination';

SwiperCore.use([Pagination]);

const Offers = () => {
  const [content, setContent] = useState(<MySwiper tripType='dayTours' offer="pk" />);

  const handleClick = (event, tripType) => {
    event.preventDefault();
    setContent(<MySwiper tripType={tripType} offer="pk" />);
  };
  return (
    <>
      <div>
        <Nav variant="tabs" defaultActiveKey="DayTour" className="rounded shadow-5 w-100 m-0 border-0 bg-white">
          <Swiper
            slidesPerView={3}
            spaceBetween={0}
            variant="tabs"
            className="bg-transparent p-0 rounded-3 m-0 w-m-75 m-m-auto"
            breakpoints={{
              0: {
                slidesPerView: 3,
                spaceBetween: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <Nav.Item className="p-0 m-0 bg-white">
              <Nav.Link href='#' eventKey="DayTour" className="text-black nav-text text-muted rounded-3 py-3" onClick={(event) => handleClick(event, 'LuxorDayTours')}>
  Day Tours
</Nav.Link>
              </Nav.Item>
            </SwiperSlide>
            <SwiperSlide>
              <Nav.Item className="p-0 m-0 bg-white">
                <Nav.Link eventKey="EgyptTour" className="text-black nav-text text-muted rounded-3 py-3" onClick={(event) => handleClick(event,'StandardFourPackages')}>
                   Tour Package
                </Nav.Link>
              </Nav.Item>
            </SwiperSlide>
   
            <SwiperSlide>
              <Nav.Item className="p-0 m-0 bg-white">
                <Nav.Link eventKey="NileCruise" className="text-black nav-text text-muted rounded-3 py-3" onClick={(event) => handleClick(event,'nileCruise')}>
                   Nile Cruise
                </Nav.Link>
              </Nav.Item>
            </SwiperSlide>
          </Swiper>
        </Nav>
      </div>
      <div>{content}</div>
    </>
  );
};

export default Offers;
