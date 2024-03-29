import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Slider from "../sliderReview/Slider";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import img1 from "./../../assets/img/1 (1).jpg";
import img2 from "./../../assets/img/1 (2).jpg";
import img3 from "./../../assets/img/2 (2).jpg";
import img4 from "./../../assets/img/1(5).jpg";
import img5 from "./../../assets/img/3.jpg";
import "./egyptDayTour.css";
import MySwiper from "../slider/MySwiper";
import DataForm from "../../shared/form/DataForm";
import { IoMdArrowDropright } from "react-icons/io";
import { SiYourtraveldottv } from "react-icons/si";
import Alexandria from "./../../assets/daytours/Alexandria-day-tour.jpg";
import Aswan from "./../../assets/daytours/Aswan-day-tour-.jpg";
import Dahab from "./../../assets/daytours/Dahab-Day-Tours.jpg";
import Giza from "./../../assets/daytours/Giza-day-tour.jpg";
import Hurghada from "./../../assets/daytours/Hurghada-Day-Tours.jpg";
import Luxor from "./../../assets/daytours/Luxor-day-tour.jpg";
import Sharm from "./../../assets/daytours/Sharm-El-Shiekh-day-tours.jpg";
import Cairo from "./../../assets/daytours/cairo.jpg";

const EgyptDayTours = () => {
  const [showMoreText, setShowMoreText] = useState(false);
  const [showMoreData, setShowMoreData] = useState({
    card1: false,
    card2: false,
    card3: false,
    card4: false,
    card5: false,
    card6: false,
  });
  const showMore = () => {
    setShowMoreText(!showMoreText);
  };

  const showMoreTour = (card) => {
    setShowMoreData(prevState => ({
      ...prevState,
      [card]: !prevState[card]
    }));
  };
  const images = [img1, img2, img3, img4, img5];

  return (
    <>
      <section id="banner" className=" my-5">
        <Container className="py-5">
          <div className="links d-flex align-content-center align-items-center  mb-4">
            <Link to="/" className="text-decoration-none">Home</Link>
            <IoMdArrowDropright className="mx-2" />
            <Link to="/egyptDayTours" className="text-black">Egypt Day Tours </Link>
          </div>
          <div className="header ">
            <div className="row align-items-center ">
              <div className="col-lg-6 mb-5">
                <Slider images={images} />
              </div>
              <div className="col-lg-6">
                <h1 className="mb-4 ">Egypt Day Tours </h1>
                <p className="text-muted egypt_tour_text mb-5">
                  Free for three, two or even one day during your visit to Egypt
                  ?! Then, don’t miss out our spectacular Egypt day tours...
                </p>
              </div>
              <div className="col-md-12"> <p>
                Allover Egypt day tours offer a unique and unforgettable way to
                explore the many wonders of this fascinating country. From the
                iconic Pyramids of Giza and the Sphinx to the ancient temples of
                Luxor and Karnak, there’s no shortage of incredible sights to
                discover on an Egypt day tour. Whether you’re interested in
                history, culture, or adventure, there’s a day tour in Egypt to
                suit your interests and preferences. With knowledgeable guides and
                convenient transportation, you can sit back and relax as you soak
                up the magic and mystery of this ancient land.
              </p>
                <h6 className="text__color mb-4">
                  Request your customized itinerary from Allover Egypt day tour
                  experts.
                </h6>
                <button className=" px-4 secondary-color text-white shadow btn py-3 rounded-5 border-none mb-4 d-flex align-items-center"><span className='me-2'>Try it free</span> <SiYourtraveldottv className='icon__color' /></button>
              </div>
            </div>

          </div>
        </Container>
      </section>
      <section id="info" className="pb-5">
        <Container>
          <h2 className="mb-4  text__color text-center fw-bold">
            The Best Allover Egypt Day Tours{" "}
          </h2>
          <p className="text-center text-muted mb-5">
            For visitors who are eager to explore all that Egypt has to offer,
            booking Egypt day tours with Allover Egypt Tours is a fantastic
            option. Their experienced and knowledgeable guides will take you on
            a journey through time, uncovering the secrets of Egypt’s ancient
            past and introducing you to the country’s vibrant culture and
            people. With a wide range of day tour options available, from Cairo
            and Alexandria to Luxor and Aswan, there’s something for everyone.
            So whether you’re already in Egypt or planning your trip, consider
            booking your Egypt day tours with Allover Egypt Tours and get ready
            for an unforgettable adventure. Allover Egypt Tours offers hotel
            pickup and drop-off for their Egypt day tours, providing visitors
            with a seamless and convenient way to explore the country’s many
            wonders. With expert tour guides and comfortable transportation,
            visitors can sit back and relax as they discover the magic of Egypt.
          </p>
          <div className="row g-4">
            {[
              { name: "cairo", img: Cairo, title: "Cairo Day Tours", description: "Cairo is a fantastic location for day tours. Allover Egypt Tours will get you there comfortably and quickly. With knowledgeable Cairo day tour guides to show you the best of what this bustling city has to offer.", card: "card1", text: "from the great temples of Karnak and Luxor to the iconic Valley of the Kings and Queens. You’ll be sure to get a full day of fascinating experiences on one of our guided excursions. From private transfers and friendly English-speaking guides to entry fees and air-conditioned transportation, we offer everything you need for an unforgettable Luxor Egypt day Tour in luxurious comfort." },
              { name: "giza", img: Giza, title: "Giza Day Tours", description: "Experience the historical and culturally important city of Giza with one of our Giza Egypt Day Tours. Our Giza Egypt day tours offer expert guides to ensure you get the most out of your day tour in Giza.", card: "card2", text: " but a highly knowledgeable guide will be with you every step of the way. You’ll get to visit some must-see temples, historical sites, and attractions such as the Philae Temple, Abu Simbel Temple Complex, and High Dam. Come join us for an Aswan Egypt Day Tour today!" },
              { name: "alexandria", img: Alexandria, title: "Alexandria Day Tours", description: "We offer amazing Alexandria Egypt Day tours that allow you to explore the city’s rich history and culture. Visit some of the most iconic landmarks such as the library, Pompey’s Pillar, the Catacombs of Kom El Shoqafa, and so much more. ", card: "card3", text: "Egyptian Day Tour with your beloved ones to make unforgettable memories of our historic sightseeing…." },
              { name: "luxor", img: Luxor, title: "Luxor Day Tours", description: "Looking for an unforgettable travel to Egypt? Look no further! Our Egypt tour packages offer you the chance of a lifetime to cruise down the Nile, with everything included…", card: "card4", text: "in one neat bundle. From domestic airfare and hotels to transfers, sightseeing tours, delicious meals, and expertly guided excursions. Travel to Egypt, Egypt awaits!" },

              { name: "aswan", img: Aswan, title: "Aswan Day Tours", description: "Our team of experienced guides will lead you through the heritage sites of this beautiful area including breathtaking views overlooking the Sinai desert. You’ll also be able to venture out into..", card: "card5", text: "the depths of the Red Sea by boat, where you can enjoy some snorkeling near colorful coral reefs, with plenty of unique photo opportunities along the way! So why not come on one of our amazing Sharm El Sheikh Egypt Day tours today?" },
              { name: "sharm El Sheikh", img: Sharm, title: "Sharm El Sheikh Tours", description: "Our team of experienced guides will lead you through the heritage sites of this beautiful area including breathtaking views overlooking the Sinai desert. You’ll also be able to venture out into..", card: "card6", text: "the depths of the Red Sea by boat, where you can enjoy some snorkeling near colorful coral reefs, with plenty of unique photo opportunities along the way! So why not come on one of our amazing Sharm El Sheikh Egypt Day tours today?" },
              { name: "dahab", img: Dahab, title: "Dahab Day Tours ", description: "Dahab is a gorgeous spot in Egypt that should not be missed! Whether you’re on a day trip or an extended stay, Dive into the clear blue waters of the Red Sea..", card: "card7", text: "snorkel around the colorful coral gardens, kayak down the meandering Blue Lagoon, and more. There are plenty of activities to keep you entertained. Get your adventure started with one of our amazing Egypt Dahab Day tours tailored to your budget and needs." },
              { name: "hurghada", img: Hurghada, title: "Hurghada  Day Tours", description: "If you’re looking for a great way to explore the beauty of Hurghada, Egypt, then one of our Hurghada Egypt Day Tours is just what you need. With adventurous activities like.. ", card: "card8", text: "Whether you want to stay in the Capital or travel to other cities, we got your back!", text: "beach BBQs and snorkeling and boat trips in crystal-clear waters, you’ll never forget your day on the Red Sea. Start your Egyptian adventure today and make unforgettable memories that last a lifetime! With our Hurghada Egypt Day tours." },

            ].map((item, index) => (
              <div key={index} className="col-md-6 col-lg-3 mb-2">
                <Card className='shadow h-100 '>
                  <div className="position-relative">   <Card.Img variant="top" src={item.img} className=' p-2' />
                    <div className=" text-white  card_imgLayer  text-center text-center d-flex justify-content-center align-items-center">
                    <Link className="secondary-color-text text-capitalize" to={{
                      pathname: '/filter',
                      search: `?destination=${item.name}`
                    }}> 
                      <h5 className=" text-white fw-bold  ">{item.title}</h5>
                      </Link>
                    </div></div>
                  <Card.Title className="text-center fw-bold   fs-5 mt-2 ">
                    <Link className="secondary-color-text text-capitalize" to={{
                      pathname: '/filter',
                      search: `?destination=${item.name}`
                    }}>  {item.name}</Link>
                  </Card.Title>

                  <Card.Body>
                    <Card.Text className="text-muted">{item.description}</Card.Text>
                    {showMoreData[item.card] && (
                      <p className="text-muted">{item.text}</p>
                    )}
                    <Link className="text_read" onClick={() => showMoreTour(item.card)}>
                      {showMoreData[item.card] ? 'Read Less' : 'Read More ...'}
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            ))}


          </div>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <h2 className="mb-4 text__color text-center fw-bold">
            Popular Egypt Day Tours you may like
          </h2>
          <p>
            If you’re looking for the best way to experience the beauty and
            wonder of Egypt, look no further than Allover Egypt Tours’ popular
            Egypt day tours. With a variety of options to choose from, including
            tours of Cairo, Alexandria, Luxor, and Aswan, there’s something for
            every interest and preference. Whether you’re a history buff looking
            to explore ancient ruins and tombs, or an adventurer seeking
            thrilling experiences like hot air balloon rides and camel treks,
            there’s a day tour for you. And with Allover Egypt Tours, you can
            trust that you’ll be in good hands with their knowledgeable and
            experienced tour guides. Choose from their popular Egypt day tours
            and get ready for an unforgettable journey through this fascinating
            country.
          </p>
          <MySwiper tripType='dayTours' />
        </Container>
      </section>


    </>
  );
};

export default EgyptDayTours;
