import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { db } from '../config/firebase';
import { collection, getDocs } from "firebase/firestore";
import"./Myswiper.css";

import "swiper/swiper.min.css";
import 'swiper/css/pagination';

SwiperCore.use([Pagination, Autoplay]);

const MySwiper = () => {
  const [tripData, setTripData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "trips"));
        const trips = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setTripData(trips);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={3}
        spaceBetween={45}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        {tripData.map((trip) => (
          <SwiperSlide key={trip.id}>
            <div className="swiper-slide-container">
              <div className="bg-white shadow rounded-4 mb-5 slider_slide slider_slides ">
                <Link to={`/trips/${trip.id}`} className="flex-grow-1">
                  <img
                    src={trip.image}
                    alt={trip.tripTitle}
                    className="w-full mb-2 slider-img rounded-3 slider-image"
                  />
                </Link>
                <div className="p-3">
                  <Link to={`/trips/${trip.id}`}>
                    <h6 className="text-start fw-bold lh-base fst-italic">
                      {trip.tripTitle}
                    </h6>
                  </Link>
                  <p className="text-start fst-italic mb-3">
                    {trip.overview.split(" ").slice(0, 16).join(" ")}
                  </p>
                  <hr className="text__color" />
                  <div className="row align-items-center">
                    <div className="col-md-12">
                      <div className="location text-start text-dark">
                        <Link className="text-decoration-none text-black d-flex align-items-center mb-2">
                          <IoLocationOutline className="me-1 text-beige" />{" "}
                          <span className="fs-6 fst-italic">{trip.destination.join(', ')}</span>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="day text-start">
                        <Link className="text-decoration-none text-black d-flex align-items-center mb-2">
                          <FaRegClock className="me-2 text-beige fs-6" />{" "}
                          <span>{trip.duration} Days</span>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-5">
                      {trip && trip.pricePackages && trip.pricePackages.length > 0 && (
                        <h5 className="text-slate-900 fw-bold mb-0 text-start">
                          <span className="text-lg text-beige">$ </span> {
                            Math.min(
                              ...trip.pricePackages.flatMap(pricePackage =>
                                pricePackage.options.map(option => option.price)
                              )
                            )
                          }
                        </h5>
                      )}
                    </div>
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
