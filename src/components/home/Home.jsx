import React, { useEffect, useState } from 'react';
import Slider from '../sliderReview/Slider';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import DataForm from '../../shared/form/DataForm';
import MySwiper from '../slider/MySwiper.jsx';
import Feedback from './../../shared/feedback/Feedback';
import Accordions from '../accordion/Accordions';
import img1 from "./../../assets/img/real estate4 (1).jpg";
import img2 from "./../../assets/img/real estate3 (2).jpg";
import img3 from "./../../assets/img/real estate1 (4).jpg";
import img4 from "./../../assets/img/real estate6.jpg";
import img5 from "./../../assets/img/real estate7.jpg";
import img6 from "./../../assets/img/real estate8.jpg";
import img7 from "./../../assets/img/real estate9.jpg";
import img8 from "./../../assets/img/a (15).jpg";
import img10 from "./../../assets/img/a (18).jpg";
import img11 from "./../../assets/img/moored-ship-monaco-seaport.jpg";
import { SiYourtraveldottv } from "react-icons/si";
import Container from 'react-bootstrap/Container';
import CardSlider from '../../shared/cardSlider/CardSlider.jsx';
import Nav from 'react-bootstrap/Nav';
import './home.css';
import WhyBook from '../whyBook/WhyBook.jsx';
import EgyptTours from '../egyptTours/EgyptTours.jsx';
import { HiArrowCircleRight } from "react-icons/hi";
const Home = () => {
  const [content, setContent] = useState(<MySwiper tripType='StandardFourPackages' />);

  useEffect(() => {
    setContent(<MySwiper tripType='StandardFourPackages' />);
  }, []);

  const handleClick = (eventKey) => {
    switch (eventKey) {
      case "EgyptTour":
        setContent(<MySwiper tripType='StandardFourPackages' />);
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

  const points = [
    { text: '24/7 Customer Service' },
    { text: '100% Tailor-Made Tour' },
    { text: 'Best Price Guaranteed' },
    { text: 'Local Expert' },
    { text: 'Private Guided Tours' },
    { text: 'Partial Booking Payment' },
  ];

  return (

    <>
      <main   >
        <section className="hero " id="hero">
          <div className="hero-img  ">
            <div className="layer w-100 h-100 py-5 ">
              <div className="hero-content p-5 d-flex h-100 my-5 justify-content-center align-items-center flex-column">
                <h1 className="mb-4 text-white text-center">Travel to Egypt</h1>
                <p className=" hero__description mb-5 text-white text-center px-5">
                  If you’re willing to enjoy your holiday, Egypt has something for everyone. Egypt is a fascinating country, full of incredible ancient sights and equally interesting modern ones!
                </p>
                <Link to='/filter' className=" px-4 secondary-color  text-white shadow btn py-3 rounded-5 border-none mb-4 d-flex align-items-center "><span className='me-2 ' >Discover Egypt Tours</span> <SiYourtraveldottv className='icon__color' /></Link>
              </div>
            </div>

          </div>
        </section>


        <div className="container-width">

          <section className="tour-packages-section my-5   rounded-3  tour-package-img shadow-inner shadow-sec-none">

            <div className="row justify-content-between align-items-center p-5">
              <div className="col-md-4">
                <h5 className='text-muted mb-2 fw-bold'>Explore</h5>

                <h2 className="mb-4 fw-bold ">Allover Egypt Tours</h2>
                <p>
                  We offer a wide range of
                  Tours that are tailored to
                  meet your needs.                </p>

              </div>

              <div className="col-md-8"><div className=" position-relative d-flex flex-wrap row">
                <EgyptTours />
              </div></div>
            </div>
          </section>
          <section className='card-slider my-5 tour-package-img px-5 py-3 shadow-inner shadow-sec-none rounded-3 ' id='cardSliderSec'>
            <h2 className='mb-4 fw-bold  text-center  pt-4 '>Egypt Top Destinations</h2>
            <CardSlider />
          </section>
          <section id='Best-Selling' className=" Best-Selling  tour-package-img shadow-inner shadow-sec-none rounded-3 p-5 my-5">
          
              <div className="d-flex justify-content-between p-3">
                <h2 className='secondary-color-text text-center fw-bold fs-4 py-4' > Allover Egypt Offers</h2>
                <Link className="d-flex justify-content-center align-items-center secondary-color-text fw-bold " >View All<HiArrowCircleRight className='ms-1' /></Link>
              </div>
            
                <Nav fill variant="tabs" defaultActiveKey="EgyptTour" onSelect={handleClick} >
                  <Nav.Item>
                    <Nav.Link eventKey="EgyptTour" className='text-black nav-text ' selectedType="StandardFourPackages"  >Egypt Tour Package</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="DayTour" className='text-black nav-text' selectedType="DayTour">EgyptDay Tours</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="NileCruise" className='text-black nav-text' selectedType="nileCruise" >Egypt Nile Cruise</Nav.Link>
                  </Nav.Item>
                </Nav>
           
          
            <div className="">
              {content}
            </div>
          </section>
          <section id='Best-Selling' className=" Best-Selling tour-package-img shadow-inner shadow-sec-none rounded-3 p-5 my-5">
            <h2 className=" text-center fw-bold text__color pt-5">Best-Selling Egypt Tour Packages</h2>
            <MySwiper />
            <div className="text-center mt-3">
              <Link to={{
                pathname: '/filter',
                search: `?packages=StandardFourPackages`
              }} className='p-3  rounded-1 secondary-color text-white'>
                See all tour packages
              </Link>
            </div>
          </section>
          <section className="py-5 tour-package-img  rounded-3 shadow-inner shadow-sec-none">
            <WhyBook />
          </section>
          <section id="faq-section" className='py-5'>
            <h2 className="mb-4 text__color fw-bold text-center">Allover Egypt Tours FAQs</h2>
            <Accordions />
          </section>

        </div>
      </main>
    </>
  );
};
export default Home;