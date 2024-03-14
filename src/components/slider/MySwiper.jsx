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


  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "trips"));
        const trips = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        let filteredTrips = trips;

        if (props.tripType != undefined && props.tripType) {
          filteredTrips = filteredTrips.filter((trip) => trip.type.includes(props.tripType));
          filteredTrips = filteredTrips.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
          setTripData(filteredTrips);
        }
        else {
          filteredTrips = filteredTrips.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
          setTripData(filteredTrips);
 

        }



      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [props.tripType]);

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
            spaceBetween:8
          },
          500:{
            slidesPerView: 2.6,
            spaceBetween:10
          },
          768: {
            slidesPerView: 5.2,
            spaceBetween:5
          },
          1024: {
            slidesPerView: 5.2,
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
              <div className="  rounded-top-3 rounded-bottom mb-5 slider_slide slider_slides shadow ">
                <Link to={`/trips/${trip.id}`} duration={trip.duration} className="flex-grow-1">
                  <img
                    src={trip.image}
                    alt={trip.tripTitle}
                    className="w-full  slider-img rounded-top-3 slider-image"
                  />
                </Link>
                <div className="p-1">
                  <Link to={`/trips/${trip.id}`} duration={trip.duration}>
                    <h6 className="text-start text-black  lh-base mb-0 fw-bold">
                      {trip.tripTitle}
                    </h6>
                  </Link>
                  <p className="text-start text-muted lh-base mb-1 ">          
                  {trip.type.includes("dayTours")?`${trip.duration} hours`:`${trip.duration} Days`}
</p>
                  <div className="">
                      {trip && trip.pricePackages && trip.pricePackages.length > 0 && (
                        <p className="  mb-0 text-start d-flex align-items-center  text-muted ">
                           from {" "} 
                          <span className="text-decoration-line-through price-package d-flex align-items-center mx-1">
                     $
                           {
                            Math.min(
                              ...trip.pricePackages.flatMap(pricePackage =>
                                pricePackage.options.map(option => option.price)
                              )
                            )
                          }   
                          </span>
                      
                              <span className="text-slate-900 fw-bolder mb-0 text-start price-package text-danger">
                          $
                          {Math.min(
                            ...trip.pricePackages.flatMap(pricePackage =>
                              pricePackage.options.map(option => option.price)
                            )
                          ) * 0.9 } 
                        </span>
                      
                        </p>
                      )}
         
                    </div>
                  {/* <p className="text-start fst-italic mb-3">
                    {trip.overview.split(" ").slice(0, 10).join(" ")+"..."}
                  </p>
                  <hr className="text__color" />
                  <div className="d-flex align-items-center flex-wrap justify-content-between ">
                    <div className="card-width-1">
                      <div className="location text-start text-dark">
                        <Link className="text-decoration-none text-black d-flex align-items-center mb-2" to={{
                          pathname: '/filter',
                          search: `?destination=${trip.destination[0]}`
                        }}>
                          <IoLocationOutline className="me-1 text-beige" />{" "}
                          <span className="fs-6 fst-italic">{trip.destination[0]}</span>
                        </Link>
                      </div>
                    </div>
                    <div className="card-width-2">
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
                    <div className="card-width-3">
                      <div className="day text-start">
                        <Link className="text-decoration-none text-black d-flex align-items-center mb-2">
                          <FaRegClock className="me-2 text-beige fs-6" />{" "}
                          <span>{trip.duration} Days</span>
                        </Link>
                      </div>
                    </div>

                  </div> */}
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
// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Pagination, Autoplay } from "swiper";
// import { Link } from "react-router-dom";
// import { FaRegClock } from "react-icons/fa6";
// import { IoLocationOutline } from "react-icons/io5";
// import { db } from '../config/firebase';
// import { collection, getDocs } from "firebase/firestore";
// import "./Myswiper.css";

// import "swiper/swiper.min.css";
// import 'swiper/css/pagination';

// SwiperCore.use([Pagination, Autoplay]);

// const MySwiper = (props) => {
//   const [tripData, setTripData] = useState([]);

//   console.log('====================================');
//   console.log(props.tripType);
//   console.log('====================================');
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "trips"));
//         const trips = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data()
//         }));
//         let filteredTrips = trips;

//         if (props.tripType != undefined && props.tripType) {
//           filteredTrips = filteredTrips.filter((trip) => trip.type.includes(props.tripType));
//           filteredTrips = filteredTrips.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
//           setTripData(filteredTrips);
//         }
//         else {
//           filteredTrips = filteredTrips.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
//           setTripData(filteredTrips);
 

//         }



//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       }
//     };
//     fetchData();
//   }, [props.tripType]);

//   return (
//     <div className="swiper-container">
//       <Swiper
//         slidesPerView={4}
//         spaceBetween={10}
    
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         breakpoints={{
//           0: {
//             slidesPerView: 1.7,
//             spaceBetween:20
//           },
//           500:{
//             slidesPerView: 2.1,
//             spaceBetween:10
//           },
//           768: {
//             slidesPerView: 2.8,
//             spaceBetween:10
//           },
//           1024: {
//             slidesPerView: 5,
//           },
//           1300: {
//             slidesPerView: 5,
//           },
//         }}
//         className="mySwiper"
//       >
//         {tripData.map((trip) => (
//           <SwiperSlide key={trip.id}>
//             <div className="swiper-slide-container">
//               <div className=" rounded-top-3 rounded-bottom mb-5 slider_slide slider_slides ">
//                 <Link to={`/trips/${trip.id}`} className="flex-grow-1">
//                   <img
//                     src={trip.image}
//                     alt={trip.tripTitle}
//                     className="w-full  slider-img rounded-top-3 slider-image"
//                   />
//                 </Link>
//                 <div className="">
//                   <Link to={`/trips/${trip.id}`}>
//                     <h6 className="text-start bg-white shadow fw-bold lh-base fst-italic">
//                       {trip.tripTitle.split(" ").slice(0, 8).join(" ") +"..."}
//                     </h6>
//                   </Link>
//                   {/* <p className="text-start fst-italic mb-3">
//                     {trip.overview.split(" ").slice(0, 10).join(" ")+"..."}
//                   </p>
//                   <hr className="text__color" /> */}
//                   {/* <div className="d-flex align-items-center flex-wrap justify-content-between ">
//                     <div className="card-width-1">
//                       <div className="location text-start text-dark">
//                         <Link className="text-decoration-none text-black d-flex align-items-center mb-2" to={{
//                           pathname: '/filter',
//                           search: `?destination=${trip.destination[0]}`
//                         }}>
//                           <IoLocationOutline className="me-1 text-beige" />{" "}
//                           <span className="fs-6 fst-italic">{trip.destination[0]}</span>
//                         </Link>
//                       </div>
//                     </div>
//                     <div className="card-width-2">
//                       {trip && trip.pricePackages && trip.pricePackages.length > 0 && (
//                         <h5 className="text-slate-900 fw-bold mb-0 text-start">
//                           <span className="text-lg text-beige">$ </span> {
//                             Math.min(
//                               ...trip.pricePackages.flatMap(pricePackage =>
//                                 pricePackage.options.map(option => option.price)
//                               )
//                             )
//                           }
//                         </h5>
//                       )}
//                     </div>
//                     <div className="card-width-3">
//                       <div className="day text-start">
//                         <Link className="text-decoration-none text-black d-flex align-items-center mb-2">
//                           <FaRegClock className="me-2 text-beige fs-6" />{" "}
//                           <span>{trip.duration} Days</span>
//                         </Link>
//                       </div>
//                     </div>

//                   </div> */}
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default MySwiper;
