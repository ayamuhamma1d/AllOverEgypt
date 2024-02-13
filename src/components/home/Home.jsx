import React, { useState } from 'react';
import Slider from '../swiper/Slider';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import DataForm from '../../shared/form/DataForm';
import MySwiper from '../slider/MySwiper';
import Feedback from './../../shared/feedback/Feedback';
import Accordions from '../accordion/Accordions';
import Footer from '../../shared/footer/Footer';
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { SiYourtraveldottv } from "react-icons/si";
import { CiMail } from "react-icons/ci";
import img1 from "./../../assets/img/real estate7.jpg";
import img2 from "./../../assets/img/real estate8.jpg";
import img3 from "./../../assets/img/real estate9.jpg";
import img4 from "./../../assets/img/real estate1 (11).jpg";
import './home.css';
import Whatsapp from '../../shared/whatsapp/Whatsapp';

const Home = () => {
  const [showMoreText, setShowMoreText] = useState(false);
  const [showMoreData, setShowMoreData] = useState({
    card1: false,
    card2: false,
    card3: false,
    card4: false,
  });

  const showMore = () => {
    setShowMoreText(!showMoreText);
  };

  const showMoreTour = (cardId) => {
    setShowMoreData((prevData) => ({
      ...prevData,
      [cardId]: !prevData[cardId],
    }));
  };
  return (
    <div className="container py-5">
      <main>
        <section className="header" id="header">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="mb-4 ">Travel to Egypt</h1>
              <p className="text-muted hero__description mb-5 ">
                Travel to Egypt If you’re willing to enjoy your holiday, Egypt has something for everyone.
                Egypt is a fascinating country, full of incredible ancient sights and equally interesting
                modern ones!     </p>
              <button className="py-2 px-4 bg-white shadow btn py-3 rounded-5 border-none mb-4 ">Discover Egypt Tours <SiYourtraveldottv className='icon__color' />
              </button>
            </div>
            <div className="col-md-6 ">

              <Slider />
            </div>
          </div>
        </section>

        <section className="py-5 text-center">
          <h2 className="mb-4 text__color fw-bold">Allover Egypt Tour Packages</h2>
          <p>
            We offer a wide range of services that are tailored to meet your needs, including Private Egypt tour Packages, Day tours, Shore excursions, and airport transfers. Our experienced team of professionals is dedicated to providing you with the highest quality of service and support. We strive to make your booking experience as easy and stress-free as possible by customizing for you the best matching itinerary for Egypt tour package.
          </p>
          {showMoreText && (
            <p>
              With our competitive rates, you can be sure that you are getting the best value for your money. If you are interested in traveling to Egypt, we are your best choice 100%.
            </p>
          )}
          <Link className="text_read" onClick={showMore}>
            {showMoreText ? 'Read Less' : 'Read More ...'}
          </Link>
          <div className="py-5 position-relative">
            <div className="row g-4 align-items-center justify-content-center">
              <div className="col-md-6">
                <Card className=' bg-white shadow'>
                  <Card.Img variant="top" src={img1} className='p-2 position-relative' />
                  <Card.Body>
                    <Link className='main_Color text-white  card_img'>  Egypt Tour Packages
                    </Link>
                    <Card.Text>
                      Allover Egypt will take you in mesmerizing Private Egypt tour packages from the airport and back to fill your stay with joy,
                    </Card.Text>
                    {showMoreData.card1 && (
                      <p>
                        Discover the magical essence of the Great history of Egypt that goes back to thousands of years, explore our Egypt tour packages selection based on your interest.                      </p>
                    )}
                    <Link className="text_read" onClick={() => showMoreTour("card1")}>
                      {showMoreData.card1 ? 'Read Less' : 'Read More ...'}
                    </Link>           </Card.Body>
                </Card>
              </div>
              <div className="col-md-6">
                <Card className=' bg-white shadow'>
                  <Card.Img variant="top" src={img2} className='p-2 position-relative' />
                  <Card.Body>
                    <Link className='main_Color text-white  card_img'>  Budget Tour Packages
                    </Link>
                    <Card.Text>
                      Allover Egypt will take you in mesmerizing Private Egypt tour packages from the airport and back to fill your stay with joy,
                    </Card.Text>
                    {showMoreData.card2 && (
                      <p>
                        Discover the magical essence of the Great history of Egypt that goes back to thousands of years, explore our Egypt tour packages selection based on your interest.                      </p>
                    )}
                    <Link className="text_read" onClick={() => showMoreTour("card2")}>
                      {showMoreData.card2 ? 'Read Less' : 'Read More ...'}
                    </Link>            </Card.Body>
                </Card>
              </div>
              <div className="col-md-6">
                <Card className=' bg-white shadow'>
                  <Card.Img variant="top" src={img3} className='p-2 position-relative' />
                  <Card.Body>
                    <Link className='main_Color text-white  card_img'>    Egypt Day Tours
                    </Link>
                    <Card.Text>
                      Allover Egypt will take you in mesmerizing Private Egypt tour packages from the airport and back to fill your stay with joy,
                    </Card.Text>
                    {showMoreData.card3 && (
                      <p>
                        Discover the magical essence of the Great history of Egypt that goes back to thousands of years, explore our Egypt tour packages selection based on your interest.                      </p>
                    )}
                    <Link className="text_read" onClick={() => showMoreTour("card3")}>
                      {showMoreData.card3 ? 'Read Less' : 'Read More ...'}
                    </Link>            </Card.Body>
                </Card>
              </div>
              <div className="col-md-6">
                <Card className=' bg-white shadow'>
                  <Card.Img variant="top" src={img4} className='p-2 position-relative' />
                  <Card.Body>
                    <Link className='main_Color text-white  card_img '>  Egypt Tour Packages
                    </Link>
                    <Card.Text>
                      Allover Egypt will take you in mesmerizing Private Egypt tour packages from the airport and back to fill your stay with joy,
                    </Card.Text>
                    {showMoreData.card4 && (
                      <p>
                        Discover the magical essence of the Great history of Egypt that goes back to thousands of years, explore our Egypt tour packages selection based on your interest.                      </p>
                    )}
                    <Link className="text_read" onClick={() => showMoreTour("card4")}>
                      {showMoreData.card4 ? 'Read Less' : 'Read More ...'}
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id=" EgyptTourPackages">
          <h2 className="mb-5 text__color text-center fw-bold">
            Allover Egypt Tailor-Made Tour
          </h2>
          <div className="row">
            <div className="col-md-6">
              <p>

                You may wonder exactly what we offer with our Tailor Made Tour.
                A Tailor Made Tour is fully personalized to you, It is crafted to your needs, interests, and budget by local travel experts, too many Egypt tour packages to discover Egypt, And we also offer private Egypt day tours while visiting Egypt.
                As we are Tailor-Made Tour specialists, It fits you perfectly, like a bespoke suit.
              </p>
            </div>

            <div className="col-md-6">
              <DataForm />

            </div>
            <div className="row py-4">
              <div className="col-md-6"><p>If you face any problem Send Your Request Directly to :</p>
              </div>
              <div className="col-md-6">
                <Link className='ms-3 text-black d-block  text-decoration-none'> <FaWhatsapp className='me-2  text-success' />+201155430742 / +201283488559</Link>
                <Link className='ms-3 text-black text-decoration-none' ><CiMail className='me-2  text-success' /> Info@allover-egypt.com</Link>
              </div>
            </div></div>
        </section>
        <section id='swiper' className="py-5">
          <h2 className="mb-4 text__color">
            Best-Selling Egypt Tour Packages
          </h2>
          <p>We understand that when it comes to finding the right tour experience, it can be hard to know what’s best for you. That’s why we’ve gone above and beyond to select the best-selling Egypt Tour Packages around based on customer feedback. Featuring an array of exciting excursions and activities, each tour takes you to the very best of what Egypt has to offer, Covering the most important sites you must visit in Egypt.</p>
          <div className="row">
            <div className="col-md-12">
              <MySwiper />
            </div>

          </div>
          <Link className='btn shadow-lg btn-warning rounded-pill px-3 py-2 mt-3'>See all tour packages</Link>
        </section>
        <section id="Feedback" className="py-5">
          <h2 className="mb-4 fw-bold text__color text-center">
            Allover Egypt Tours Trip Advisor Reviews
          </h2>
          <div className="row">
            <div className="col-md-12">
              <Feedback />
            </div>
          </div>
        </section>
        <section className="py-5">
          <h2 className="mb-4 text__color fw-bold">
            Best-Selling Egypt Tour Packages
          </h2>
          <p>We know that planning a trip can be stressful, so we’ve taken the guesswork out of your next adventure by selecting only the best Egypt Day Tours for you based on our past customers’ Feedback. Whether you’re looking for a customized itinerary catered to your specific needs and timings or just want something simple, we’ve got you covered.</p>
          <div className="row">
            <div className="col-md-12">
              <MySwiper />
              <Link className='btn shadow-lg btn-warning rounded-pill px-3 py-2 mt-3'>See all tour packages</Link>
            </div>
          </div>
        </section>
        <section className='py-5'>
          <h2 className="mb-4 text__color fw-bold">
            Why Book With Us
          </h2>
          <p>Booking with Allover Egypt Tours is the perfect way to ensure that your journey through the land of Ancient Wonders is full of joy and excitement. With our experienced tour guides, you can rest assured knowing you are in the most capable hands. With over 15 years of experience leading tours throughout the nation, we know all the secret spots to explore and provide expert advice on how to make the most out of your Egyptian experience. Not only do we offer well-crafted day tours and multi-day packages, but we also customize packages that fit your needs and budget perfectly. Additionally, our friendly team always goes above and beyond to provide excellent customer service during every stage of your trip so you can enjoy a worry-free vacation!

          </p>

          <div className="row align-items-center g-4 mt-4 ">
            <div className="col-md-4 ">
              <div className="d-flex align-items-center ">
                <div className="done__icon rounded-circle me-3 d-flex justify-content-center align-items-center text-white">
                  <MdOutlineDone />
                </div>
                <p className='mb-0'>24/7 Customer Service</p>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="d-flex align-items-center ">
                <div className="done__icon rounded-circle me-3 d-flex justify-content-center align-items-center text-white">
                  <MdOutlineDone />
                </div>
                <p className='mb-0'>100% Tailor-Made Tour</p>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="d-flex align-items-center  ">
                <div className="done__icon rounded-circle me-3 d-flex justify-content-center align-items-center text-white">
                  <MdOutlineDone />
                </div>
                <p className='mb-0'>Best Price Guaranteed</p>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="d-flex align-items-center  ">
                <div className="done__icon rounded-circle me-3 d-flex justify-content-center align-items-center text-white">
                  <MdOutlineDone />
                </div>
                <p className='mb-0'>Local Expert</p>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="d-flex align-items-center  ">
                <div className="done__icon rounded-circle me-3 d-flex justify-content-center align-items-center text-white">
                  <MdOutlineDone />
                </div>
                <p className='mb-0'>Private Guided Tours</p>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="d-flex align-items-center  ">
                <div className="done__icon rounded-circle me-3 d-flex justify-content-center align-items-center text-white text-center">
                  <MdOutlineDone />
                </div>
                <p className='mb-0'>Partial Booking Payment</p>
              </div>
            </div>
          </div>
        </section>
        <section id="Accordion" className='py-5'>
          <h2 className="mb-4 text__color fw-bold">
            Allover Egypt Tours FAQs
          </h2>
          <Accordions />
        </section>

      </main>
    </div>


  );
};

export default Home;