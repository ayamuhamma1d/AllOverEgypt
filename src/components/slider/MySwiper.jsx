import React, { useEffect } from "react";
import { Swiper as ReactSwiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";
import img1 from "./../../assets/img/real estate4 (1).jpg";
import { FaRegClock } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { db } from './../../components/config/firebase';
import { collection, getDocs } from "firebase/firestore"; 

const MySwiper = () => {
  useEffect(() => {
    const fetchData = async () => {

      try {
        const querySnapshot = await getDocs(collection(db, "trips"));
        querySnapshot.forEach((doc) => {
          console.log("Document ID:", doc.id);
          const docId = doc.id;
          const data = doc.data();
          console.log("addd", data.tripTitle);
          return { docId, ...data };
        });
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="w-full slider_slide m-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto ">
        <ReactSwiper
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={50}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 100000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide key="">
            <div className="flex slider_small flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100 mb-10">
              <div>
                <Link to="">
                  <img
                    src={img1}

                    alt=""
                    className="h-64 object-cover w-full mb-4 sm:h-64 dark:bg-gray-500"
                  />
                </Link>
                <h6 className="text-start w-100">
                  12 Days Cairo, Alexandria & Nile Cruise & Hurghada Package
                </h6>
                <p className="text-start">
                  Enjoy a 12 days private tour including accommodation and
                  expert tour guide Egyptologist starting with...{" "}
                </p>
                <hr />
                <div className="row">
                  <div className="col-md-8">
                    <div className="location text-start text-dark ">
                      <Link className="text-decoration-none text-black">
                        {" "}
                        <IoLocationOutline /> Cairo, Giza, Luxor
                      </Link>
                    </div>
                    <div className="day text-start">
                      <Link className="text-decoration-none text-black ">
                        <FaRegClock /> 5 Days
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <h4 className="text-slate-900 text-start fw-bold">
                      <span className="text-lg text-beige ">$ </span>
                      4000
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </ReactSwiper>
      </div>
    </>
  );
};

export default MySwiper;
