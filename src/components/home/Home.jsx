import React, { useState } from 'react';
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
import img8 from "./../../assets/img/real estate7.jpg";
import img9 from "./../../assets/img/real estate8.jpg";
import img10 from "./../../assets/img/real estate9.jpg";
import img11 from "./../../assets/img/real estate1 (11).jpg";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { SiYourtraveldottv } from "react-icons/si";
import { CiMail } from "react-icons/ci";
import './home.css';
const Home = () => {
  const [showMoreText, setShowMoreText] = useState(false);
  const [showMoreData, setShowMoreData] = useState({
    card1: false,
    card2: false,
    card3: false,
    card4: false
  });
  const points = [
    { text: '24/7 Customer Service' },
    { text: '100% Tailor-Made Tour' },
    { text: 'Best Price Guaranteed' },
    { text: 'Local Expert' },
    { text: 'Private Guided Tours' },
    { text: 'Partial Booking Payment' },
  ];
  const images = [img1, img2, img3, img4, img5, img6, img7];
  const showMore = () => {
    setShowMoreText(!showMoreText);
  };

  const showMoreTour = (card) => {
    setShowMoreData(prevState => ({
      ...prevState,
      [card]: !prevState[card]
    }));
  };
  return (
    <div className="container py-5">
      <main>
        <section className="header" id="header">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="mb-4">Travel to Egypt</h1>
                <p className="text-muted hero__description mb-5">
                  If you’re willing to enjoy your holiday, Egypt has something for everyone. Egypt is a fascinating country, full of incredible ancient sights and equally interesting modern ones!
                </p>
                <button className=" px-4 secondary-color shadow btn py-3 rounded-5 border-none mb-4 d-flex align-items-center"><span className='me-2'>Discover Egypt Tours</span> <SiYourtraveldottv className='icon__color' /></button>
              </div>
              <div className="col-md-6">
                <Slider images={images} />
              </div>
            </div>
          </div>
        </section>
        <section className="py-5 text-center all-over-egypt" >
          <h2 className="mb-4 fw-bold">Allover Egypt Tour Packages</h2>
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
          <div className="py-5 position-relative d-flex flex-wrap row gy-5 gx-4 ">
            {[
              { img: img8, title: "Egypt Tour Packages", description: "Allover Egypt will take you on mesmerizing Private Egypt Tour Packages from the airport and back to fill your stay with joy.", card: "card1",text:"Discover the magical essence of the Great history of Egypt that goes back to thousands of years, explore our Egypt tour packages selection based on your interest." },
              { img: img9, title: "Budget Tour Packages", description: "Allover Egypt offers Egypt tour packages for travelers on a budget who wants to experience all the wonders of Egypt’s ancient culture. Our Egypt tour packages include…", card: "card2", text:"accommodations in some of the most authentic Egyptian hotels and transport by local guides. Travel to Egypt and enjoy a fantastic journey through history and let us help plan your trip today!" },
              { img: img10, title: "Egypt Day Tours", description: "If you are willing to travel to Egypt and you are staying for one day or couple of days, we offer Private Egypt Day tours ", card: "card3" ,text:"Whether you want to stay in the Capital or travel to other cities, we got your back!" },
              { img: img11, title: "Egypt Nile Cruise ", description: "Looking for an unforgettable travel to Egypt? Look no further! Our Egypt tour packages offer you the chance of a lifetime to cruise down the Nile, with everything included…", card: "card4" ,text:"in one neat bundle. From domestic airfare and hotels to transfers, sightseeing tours, delicious meals, and expertly guided excursions. Travel to Egypt, Egypt awaits!" }
            ].map((item, index) => (
              <div key={index} className="col-md-6">
                <Card className='secondary-color border-0 shadow-lg h-100'>
                  <Card.Img variant="top" src={item.img} className='p-2 position-relative' />
                  <Card.Body>
                    <Link className=' text-white card_img' >{item.title}</Link>
                    <Card.Text>{item.description}</Card.Text>
                    {showMoreData[item.card] && (
                      <p>{item.text}</p>
                    )}
                    <Link className="text_read" onClick={() => showMoreTour(item.card)}>
                      {showMoreData[item.card] ? 'Read Less' : 'Read More ...'}
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </section>
        <section id="EgyptTourPackages" className='egyptTourPackages py-5'>
          <div className="container">
            <h2 className="mb-5 text-center fw-bold text__color">
              Allover Egypt Tailor-Made Tour
            </h2>
            <div className="row">
              <div className="col-md-6">
                <p className='text-muted mb-5'>
                  Discover the wonders of Egypt with our Tailor-Made Tour. This fully personalized experience is crafted to your needs, interests, and budget by local travel experts. With too many Egypt tour packages to choose from, including private Egypt day tours, our Tailor-Made Tour fits you perfectly, like a bespoke suit.
                </p>
                <h5 className="mb-4 secondary-color-text">If you face any problems, contact us directly:</h5>
                <a href="https://wa.me/+201155430742?text=Hello%20Ask%20any%20Question%20%3F%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-black d-block text-decoration-none mb-4 d-flex align-items-center'
                >
                  <FaWhatsapp className='me-2  secondary-color-text icon-style ' />
                  <span>(+2) 01155430742</span>
                </a>
                <a href="mailto:Info@allover-egypt.com"
                  className='text-black text-decoration-none d-flex align-items-center mb-5'
                >
                  <CiMail className='me-2  secondary-color-text icon-style ' />
                  <span>Info@allover-egypt.com</span>
                </a>
              </div>
              <div className="col-md-6">
                <DataForm />
              </div>
            </div>
          </div>
        </section>
        <section id='swiper' className="py-5">
          <h2 className="mb-5 text-center fw-bold text__color">Best-Selling Egypt Tour Packages</h2>
          <p className='text-center text-muted'>Discover our best-selling Egypt Tour Packages based on customer feedback. Explore exciting excursions and activities covering the must-visit sites in Egypt.</p>
          <MySwiper />
          <div className="text-center mt-3">
            <Link to="/egyptTourPackage" className='p-3  rounded-1 secondary-color text-black'>
              See all tour packages
            </Link>
          </div>
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
          <h2 className="mb-5 text-center fw-bold text__color">
            Best-Selling Egypt Tour Packages
          </h2>
          <p className='text-center text-muted'>We understand that when it comes to finding the right tour experience, it can be hard to know what’s best for you. That’s why we’ve gone above and beyond to select the best-selling Egypt Tour Packages around based on customer feedback. Featuring an array of exciting excursions and activities, each tour takes you to the very best of what Egypt has to offer, Covering the most important sites you must visit in Egypt.</p>
          <MySwiper />
          <div className="text-center mt-3">
            <Link to="/egyptTourPackage" className='p-3  rounded-1 secondary-color text-black'>
              See all tour packages
            </Link>
          </div>
        </section>
        <section id='why-book-with-us' className='py-5'>
          <h2 className="mb-4 text__color fw-bold text-center">Why Book With Us</h2>
          <p className='text-center text-muted'>
            Booking with Allover Egypt Tours ensures a journey through the land of Ancient Wonders filled with joy and excitement. With experienced tour guides, you're in capable hands. With over 15 years of experience leading tours throughout the nation, we know all the secret spots to explore and provide expert advice on how to make the most out of your Egyptian experience. We offer well-crafted day tours, multi-day packages, and customized packages tailored to fit your needs and budget. Our friendly team provides excellent customer service during every stage of your trip for a worry-free vacation!
          </p>
          <div className="row align-items-center g-4 mt-4">
            {points.map((point, index) => (
              <div key={index} className="col-md-4">
                <div className="d-flex align-items-center">
                  <div className="done__icon rounded-circle me-3 d-flex justify-content-center align-items-center text-white">
                    <MdOutlineDone  />
                  </div>
                  <p className='mb-0'>{point.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="faq-section" className='py-5'>
          <h2 className="mb-4 text__color fw-bold text-center">Allover Egypt Tours FAQs</h2>
          <Accordions />
        </section>
      </main>
    </div>
  );
};
export default Home;