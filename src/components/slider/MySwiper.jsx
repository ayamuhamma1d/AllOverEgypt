import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { db } from '../config/firebase';
import { collection, getDocs } from "firebase/firestore";
import { MdAttachMoney } from "react-icons/md";
import "./Myswiper.css";

import "swiper/swiper.min.css";
import 'swiper/css/pagination';

SwiperCore.use([Pagination, Autoplay]);

const MySwiper = (props) => {
  const [tripData, setTripData] = useState([]);
  console.log(props.offer,props.tripType)

  useEffect(() => {

    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "trips"));
        const trips = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        let filteredTrips = trips;
        if (props.tripType && props.offer) {
          filteredTrips = filteredTrips.filter((trip) => trip.type.includes(props.tripType) && (trip.offer?.includes(props.offer)||trip.offer?.includes("dt")));
        } else if (props.tripType) {
          filteredTrips = filteredTrips.filter((trip) => trip.type.includes(props.tripType));
        } else if (props.offer) {
          filteredTrips = filteredTrips.filter((trip) => trip.offer?.includes(props.offer));
        }
  
        filteredTrips = filteredTrips.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
        setTripData(filteredTrips);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [props.tripType, props.offer]);

  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={4}
        spaceBetween={5}

        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 2.2,
            spaceBetween: 8
          },
          500: {
            slidesPerView: 2.6,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: 5
          },
          1024: {
            slidesPerView: 4.2,
          },
          1300: {
            slidesPerView: 6,
          },
        }}
        className="mySwiper"
      >
        {tripData.map((trip) => (
          <SwiperSlide key={trip.id}>
            <div className="swiper-slide-container">
              <div className="  rounded-top-3 rounded-bottom mb-5 slider_slide slider_slides  ">
                <Link to={`/trips/${trip.id}`} duration={trip.duration} className="flex-grow-1">
                  <img
                    src={trip.image}
                    alt={trip.tripTitle}
                    className="w-full  slider-img rounded-top-3 slider-image"
                  />
                </Link>
                <div className="p-1">
                  <Link to={`/trips/${trip.id}`} duration={trip.duration}>
                    <p className="text-start text-black  lh-base mb-0 fw-bold">
                      {trip.tripTitle}
                    </p>
                  </Link>
                  <p className="text-start text-muted lh-base mb-1 ">
                    {trip.type.includes("dayTours") ? `${trip.duration} hours` : `${trip.duration} Days`}
                  </p>
                  <div className="">
                    {trip && trip.pricePackages && trip.pricePackages.length > 0 && (
                      <p className="  mb-0 text-start d-flex align-items-center  text-muted ">
                       
                        {trip.offer ? (
                          <>
                           from {" "}
                            <span className={`text-decoration-line-through price-package d-flex align-items-center mx-1  `}>
                              ${Math.min(
                                ...trip.pricePackages.flatMap(pricePackage =>
                                  pricePackage.options.map(option => option.price)
                                )
                              )}
                            </span>
                            <span className="text-slate-900 fw-bolder mb-0 text-start price-package text-danger">
                              ${(Math.min(
                                ...trip.pricePackages.flatMap(pricePackage =>
                                  pricePackage.options.map(option => option.price)
                                )
                              ) * 0.9).toFixed(2)}
                            </span>
                          </>
                        ) : (
                          <span className="text-slate-900 fw-bolder mb-0 text-start price-package text-black fs-6">
                            ${Math.min(
                              ...trip.pricePackages.flatMap(pricePackage =>
                                pricePackage.options.map(option => option.price)
                              )
                            ).toFixed(2)}
                          </span>
                        )}
                      </p>
                    )}
                  </div>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MySwiper;
