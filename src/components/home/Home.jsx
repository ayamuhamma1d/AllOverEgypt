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


        <Container>
          <section className='card-slider my-5  tour-package-img px-5 py-3 shadow-inner rounded-3 ' id='cardSliderSec'>
            <h2 className='mb-4 fw-bold  text-center '>Egypt Top Destinations</h2>
            <CardSlider />
          </section>
          <section className="tour-packages-section my-5   rounded-3  tour-package-img shadow-inner">

            <div className="row justify-content-between align-items-center p-5">
              <div className="col-md-4">
                <h5 className='text-muted mb-2 fw-bold'>Explore</h5>

                <h2 className="mb-4 fw-bold ">Allover Egypt Tours</h2>
                <p>
                  We offer a wide range of
                  Tours that are tailored to
                  meet your needs                </p>

              </div>
              <div className="col-md-8"><div className=" position-relative d-flex flex-wrap row gy-4 gx-3">
                {[
                  { img: img10, route: "StandardFourPackages", title: "Tour Packages", description: "Allover Egypt offers mesmerizing Private Egypt Tour Packages to fill your stay with joy.", card: "card1", text: "Discover the magical essence of Egypt's great history and explore our selection based on your interests.", packages: ['HoneyMoonT.P', 'DiamondT.P', 'FamilyT.P', 'SoloTourPackages', 'Budget'] },
                  { img: img8, route: "LuxorDayTours", title: "Day Tours", description: "Explore Egypt with our Private Day Tours, whether you're staying for one day or a few.", card: "card3", text: "Choose to stay in the Capital or explore other cities with our guided tours.", packages: ['cairo', 'giza', 'alexandria', 'luxor', 'aswan'] },
                  { img: img11, route: "nileCruise", title: "Nile Cruise", description: "Embark on an unforgettable journey down the Nile with our Egypt tour packages.", card: "card4", text: "Experience domestic airfare, hotels, transfers, sightseeing tours, meals, and expertly guided excursions all in one bundle.", packages: ['4', '5', '7', '8', '10'] }
                ].map((item, index) => (
                  <div key={index} className="col-md-4   ">
                    <Card className=" border-0  h-100  shadow-inner ">
                      <Card.Img variant="top" src={item.img} alt={item.title} className=" position-relative" />
                      <Card.Body className='text-center'>
                        <Link className=" fw-bold text-muted tour-packages-title  " to={{
                          pathname: '/filter',
                          search: `?type=${item.route}`
                        }}><h5 className='mb-3 fw-bold  '>{item.title}</h5></Link>
                        <div className="row g-2 mb-2 justify-content-center align-items-center">
                          {
                            item.packages.map((type, index2) => (
                              <div className="col-md-6 ">
                                <div className="  tour-package-border ">
                                  <Link
                                    className=""
                                    to={{
                                      pathname: '/filter',
                                      search: `?type=${type}`
                                    }}
                                  > <p className='mb-0 text-capitalize'> {index === 2 ? `${type}D-${parseInt(type) - 1}N` : type.split(" ").slice(0, 1).join(" ")}</p> </Link>
                                </div>
                              </div>
                            ))
                          }
                        </div>
                        <Link
                          className="fw-bold "
                          to={{
                            pathname: '/filter',
                            search: `?packages=${item.route}`
                          }}
                        >
                          View More
                        </Link>                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </div></div>
            </div>
          </section>
          <section id='Best-Selling' className=" Best-Selling tour-package-img shadow-inner rounded-3 p-5 my-5">
            <h2 className="mb-3 text-center fw-bold text__color">Best-Selling Egypt Tour Packages</h2>
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
          <section id='Best-Selling' className=" Best-Selling tour-package-img shadow-inner rounded-3 p-5 my-5">
            <div className="row align-items-center">
              <div className="col-md-3">
                <h2 className='secondary-color-text text-center fw-bold fs-4'>Allover Egypt Offers</h2>
              </div>
              <div className="col-md-9">
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
              </div>
            </div>
            <div className="">
              {content}
            </div>
          </section>
          <section className="py-5 tour-package-img  rounded-3 shadow-inner">
            <WhyBook />
          </section>
          <section id="faq-section" className='py-5'>
            <h2 className="mb-4 text__color fw-bold text-center">Allover Egypt Tours FAQs</h2>
            <Accordions />
          </section>

        </Container>
      </main>
    </>
  );
};
export default Home;