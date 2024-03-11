import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

import img7 from "./../../assets/img/real estate9.jpg";
import img8 from "./../../assets/img/a (15).jpg";
import img10 from "./../../assets/img/a (18).jpg";
import img11 from "./../../assets/img/moored-ship-monaco-seaport.jpg";
SwiperCore.use([Pagination, Autoplay]);

const EgyptTours = () => {
    return (
        <div>
            <Swiper
                slidesPerView={3} 
                spaceBetween={15}
           
                modules={[Pagination]}
                className="mySwiper"
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
                {[
                    { img: img10, route: "StandardFourPackages", title: "Tour Packages", description: "Allover Egypt offers mesmerizing Private Egypt Tour Packages to fill your stay with joy.", card: "card1", text: "Discover the magical essence of Egypt's great history and explore our selection based on your interests.", packages: ['HoneyMoon', 'Diamond', 'Family', 'Budget'] },
                    { img: img8, route: "LuxorDayTours", title: "Day Tours", description: "Explore Egypt with our Private Day Tours, whether you're staying for one day or a few.", card: "card3", text: "Choose to stay in the Capital or explore other cities with our guided tours.", packages: ['cairo', 'giza', 'alexandria', 'luxor'] },
                    { img: img11, route: "nileCruise", title: "Nile Cruise", description: "Embark on an unforgettable journey down the Nile with our Egypt tour packages.", card: "card4", text: "Experience domestic airfare, hotels, transfers, sightseeing tours, meals, and expertly guided excursions all in one bundle.", packages: ['4', '5', '7', '8'] }
                ].map((item, index) => (
                    <SwiperSlide key={index} >
                        <Card className="border-0 h-100 bg-white shadow-sm rounded-3 mb-3   rounded-top-5 ">
                        <Link className="fw-bold text-muted tour-packages-title" to={{
                                    pathname: '/filter',
                                    search: `?type=${item.route}`
                                }}>
                                    
                            <Card.Img variant="top" src={item.img} alt={item.title} className="position-relative rounded-top-5" /> </Link>
                            <Card.Body className='text-center'>
                                <Link className="fw-bold text-muted tour-packages-title" to={{
                                    pathname: '/filter',
                                    search: `?type=${item.route}`
                                }}><h5 className='mb-3 fw-bold'>{item.title}</h5></Link>
                                <div className="d-flex  mb-2 justify-content-center align-items-center  flex-wrap">
                                    {
                                        item.packages.map((type, index2) => (
                                            <div className="egypt-tour-sec " key={index2}>
                                                <div className="tour-package-border rounded-3 m-1 ">
                                                    <Link
                                                        className=""
                                                        to={{
                                                            pathname: '/filter',
                                                            search: `?type=${type=="HoneyMoon"?"HoneyMoonT.P":type||type=="Diamond"?"DiamondT.P":type||type=="Family"?"FamilyT.P":type}`
                                                        }}
                                                    > <p className='mb-0 text-capitalize'> {index === 2 ? `${type}D-${parseInt(type) - 1}N` : type.split(" ").slice(0, 1).join(" ")}</p> </Link>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <Link
                                    className=""
                                    to={{
                                        pathname: '/filter',
                                        search: `?packages=${item.route}`
                                    }}
                                >
                                    View More
                                </Link>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default EgyptTours;
