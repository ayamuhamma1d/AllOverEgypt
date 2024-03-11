import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import 'swiper/css/pagination';
import img1 from "./../../assets/img/cardSlider (2).jpg";
import img2 from "./../../assets/img/pexels-alex-azabache-3185480.jpg";
import img3 from "./../../assets/img/cardSlider (3).jpg";
import img4 from "./../../assets/img/cardSlider (10).jpg";
import img5 from "./../../assets/img/cardSlid (12).jpeg";
import img6 from "./../../assets/img/cardSlider13 (2).jpg";
import img7 from "./../../assets/img/cardSlider16 (2).jpg";
import img8 from "./../../assets/img/cardSlider14.jpg";
import "./cardSlider.css"
import { Link } from "react-router-dom";
SwiperCore.use([Pagination, Autoplay]);
const CardSlider = () => {
  return (
    <>
      <Swiper id="cardSlider"
        slidesPerView={7}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 3.6,
          },
          768: {
            slidesPerView: 4.5,
          },
          1024: {
            slidesPerView: 7,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card-slider position-relative">
          <Link to={{
                pathname: '/filter',
                search: `?destination=cairo`
              }}> <img src={img1} alt="cairo" className="rounded-circle " /></Link>
            <div className="card-slider-layer ">
              <Link to={{
                pathname: '/filter',
                search: `?destination=cairo`
              }}><h6 className="mt-2 fw-bold text-black mb-0">Cairo</h6>  </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide><Link to={{
              pathname: '/filter',
              search: `?destination=giza`
            }}><img src={img2} alt="giza" className="rounded-circle  " /> </Link>
          <div className="card-slider-layer ">
            <Link to={{
              pathname: '/filter',
              search: `?destination=giza`
            }}><h6 className="mt-2 fw-bold text-black mb-0">Giza</h6>  </Link>

          </div>
        </SwiperSlide>
        <SwiperSlide>      <Link to={{
              pathname: '/filter',
              search: `?destination=alexandria`
            }}><img src={img3} alt="alexandria" className="rounded-circle  " /></Link>
          <div className="card-slider-layer ">
            <Link to={{
              pathname: '/filter',
              search: `?destination=alexandria`
            }}><h6 className="mt-2 fw-bold text-black mb-0">Alexandria</h6>  </Link>

          </div>
        </SwiperSlide>
        <SwiperSlide>     <Link to={{
              pathname: '/filter',
              search: `?destination=luxor`
            }}><img src={img4} alt="luxor" className="rounded-circle  " /></Link>
          <div className="card-slider-layer ">
            <Link to={{
              pathname: '/filter',
              search: `?destination=luxor`
            }}><h6 className="mt-2 fw-bold text-black mb-0">Luxor</h6>  </Link>

          </div>
        </SwiperSlide>

        <SwiperSlide>      <Link to={{
              pathname: '/filter',
              search: `?destination=aswan`
            }}><img src={img5} alt="aswan" className="rounded-circle  " /></Link>
          <div className="card-slider-layer ">
            <Link to={{
              pathname: '/filter',
              search: `?destination=aswan`
            }}><h6 className="mt-2 fw-bold text-black mb-0">Aswan</h6>  </Link>

          </div>

        </SwiperSlide>

        <SwiperSlide>    <Link to={{
          pathname: '/filter',
          search: `?destination=sharm El Sheikh`
        }}><img src={img6} alt="Sharm El Sheikh" className="rounded-circle  " /></Link>
          <div className="card-slider-layer ">
            <Link to={{
              pathname: '/filter',
              search: `?destination=sharmEL-SheiKh`
            }}><h6 className="mt-2 fw-bold text-black mb-0">Sharm El Sheikh</h6>  </Link>
          </div>

        </SwiperSlide>
        <SwiperSlide>   <Link to={{
          pathname: '/filter',
          search: `?destination=dahab`
        }}><img src={img7} alt="Dahab" className="rounded-circle  " /></Link>
          <div className="card-slider-layer ">
            <Link to={{
              pathname: '/filter',
              search: `?destination=dahab`
            }}><h6 className="mt-2 fw-bold text-black mb-0">Dahab</h6>  </Link>
          </div>

        </SwiperSlide>


        <SwiperSlide>     <Link to={{
          pathname: '/filter',
          search: `?destination=hurghada`
        }}><img src={img8} alt="Hurghada" className="rounded-circle  " /></Link>
          <div className="card-slider-layer ">
            <Link to={{
              pathname: '/filter',
              search: `?destination=hurghada`
            }}><h6 className="mt-2 fw-bold text-black mb-0">Hurghada</h6>  </Link>

          </div>

        </SwiperSlide>






      </Swiper>
    </>

  )
}

export default CardSlider