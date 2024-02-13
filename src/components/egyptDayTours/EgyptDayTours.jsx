import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Slider from "../swiper/Slider";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { MdOutlineDone } from "react-icons/md";
import img2 from "../../assets/img/1 (1).jpg";
import "./egyptDayTour.css";
import MySwiper from "../slider/MySwiper";
import DataForm from "../../shared/form/DataForm";
import Accordions from "../accordion/Accordions";

const EgyptDayTours = () => {
  const [showMoreText, setShowMoreText] = useState(false);
  const [showMoreData, setShowMoreData] = useState(false);

  const showMore = () => {
    setShowMoreText(!showMoreText);
  };

  const showMoreTour = () => {
    setShowMoreData(!showMoreData);
  };
  return (
    <>
      <section id="banner" className="py-5">
        <Container>
          <Breadcrumb>
            <Breadcrumb.Item  className="text-black text-decoration-none">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Egypt Day Tours</Breadcrumb.Item>
          </Breadcrumb>
          <div className="header ">
            <div className="row align-items-center ">
              <div className="col-md-6">
                <h1 className="mb-4">Egypt Day Tours </h1>
                <p className="text-muted egypt_tour_text mb-5">
                  Free for three, two or even one day during your visit to Egypt
                  ?! Then, don’t miss out our spectacular Egypt day tours...
                </p>
              </div>
              <div className="col-md-6">
                <Slider />
              </div>
            </div>
            <p>
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
            <h6 className="text__color">
              Request your customized itinerary from Allover Egypt day tour
              experts.
            </h6>
            <Link className="btn shadow-lg btn-warning  px-3 py-2 my-3 text-black">
              Try it free
            </Link>
          </div>
        </Container>
      </section>
      <section id="info">
        <Container>
          <h2 className="mb-4  text__color text-center fw-bold">
            The Best Allover Egypt Day Tours{" "}
          </h2>
          <p>
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
            <div className="col-md-3">
              <Card className="bg-white shadow">
                <Card.Img
                  variant="top"
                  src={img2}
                  className="p-2 position-relative"
                />
                <Card.Body>
                  <Card.Title className="main_Color text-white  card_imgLayer ">
                    {" "}
                    Cairo Day Tours
                  </Card.Title>
                  <Card.Title>Cairo is a fantastic </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    location for day tours.
                  </Card.Subtitle>
                  <Card.Text>
                    Allover Egypt Tours will get you there comfortably and
                    quickly. With knowledgeable Cairo day tour guides to show
                    you the best of what this bustling city has to offer.
                  </Card.Text>
                  {showMoreData && (
                    <p>
                      From exploring the Giza pyramids and Sphinx to cruising
                      downriver on a felucca, these Egypt day tours are suitable
                      for any traveler who wants to get the most out of their
                      trip.{" "}
                    </p>
                  )}
                  <Link className="text_read" onClick={showMoreTour}>
                    {showMoreData ? "Read Less" : "Read More ..."}
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card className="bg-white shadow">
                <Card.Img
                  variant="top"
                  src={img2}
                  className="p-2 position-relative"
                />
                <Card.Body>
                  <Card.Title className="main_Color text-white  card_imgLayer ">
                    {" "}
                    Giza Day Tours
                  </Card.Title>
                  <Card.Title>Cairo is a fantastic </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    location for day tours.
                  </Card.Subtitle>
                  <Card.Text>
                    Allover Egypt Tours will get you there comfortably and
                    quickly. With knowledgeable Cairo day tour guides to show
                    you the best of what this bustling city has to offer.
                  </Card.Text>
                  {showMoreData && (
                    <p>
                      From exploring the Giza pyramids and Sphinx to cruising
                      downriver on a felucca, these Egypt day tours are suitable
                      for any traveler who wants to get the most out of their
                      trip.{" "}
                    </p>
                  )}
                  <Link className="text_read" onClick={showMoreTour}>
                    {showMoreData ? "Read Less" : "Read More ..."}
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card className="bg-white shadow">
                <Card.Img
                  variant="top"
                  src={img2}
                  className="p-2 position-relative"
                />
                <Card.Body>
                  <Card.Title className="main_Color text-white  card_imgLayer ">
                    {" "}
                    Alexandria Day Tours
                  </Card.Title>
                  <Card.Title>Cairo is a fantastic </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    location for day tours.
                  </Card.Subtitle>
                  <Card.Text>
                    Allover Egypt Tours will get you there comfortably and
                    quickly. With knowledgeable Cairo day tour guides to show
                    you the best of what this bustling city has to offer.
                  </Card.Text>
                  {showMoreData && (
                    <p>
                      From exploring the Giza pyramids and Sphinx to cruising
                      downriver on a felucca, these Egypt day tours are suitable
                      for any traveler who wants to get the most out of their
                      trip.{" "}
                    </p>
                  )}
                  <Link className="text_read" onClick={showMoreTour}>
                    {showMoreData ? "Read Less" : "Read More ..."}
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card className="bg-white shadow">
                <Card.Img
                  variant="top"
                  src={img2}
                  className="p-2 position-relative"
                />
                <Card.Body>
                  <Card.Title className="main_Color text-white  card_imgLayer ">
                    {" "}
                    Luxor Day Tours
                  </Card.Title>
                  <Card.Title>Cairo is a fantastic </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    location for day tours.
                  </Card.Subtitle>
                  <Card.Text>
                    Allover Egypt Tours will get you there comfortably and
                    quickly. With knowledgeable Cairo day tour guides to show
                    you the best of what this bustling city has to offer.
                  </Card.Text>
                  {showMoreData && (
                    <p>
                      From exploring the Giza pyramids and Sphinx to cruising
                      downriver on a felucca, these Egypt day tours are suitable
                      for any traveler who wants to get the most out of their
                      trip.{" "}
                    </p>
                  )}
                  <Link className="text_read" onClick={showMoreTour}>
                    {showMoreData ? "Read Less" : "Read More ..."}
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card className="bg-white shadow">
                <Card.Img
                  variant="top"
                  src={img2}
                  className="p-2 position-relative"
                />
                <Card.Body>
                  <Card.Title className="main_Color text-white  card_imgLayer ">
                    {" "}
                    Aswan Day Tours
                  </Card.Title>
                  <Card.Title>Cairo is a fantastic </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    location for day tours.
                  </Card.Subtitle>
                  <Card.Text>
                    Allover Egypt Tours will get you there comfortably and
                    quickly. With knowledgeable Cairo day tour guides to show
                    you the best of what this bustling city has to offer.
                  </Card.Text>
                  {showMoreData && (
                    <p>
                      From exploring the Giza pyramids and Sphinx to cruising
                      downriver on a felucca, these Egypt day tours are suitable
                      for any traveler who wants to get the most out of their
                      trip.{" "}
                    </p>
                  )}
                  <Link className="text_read" onClick={showMoreTour}>
                    {showMoreData ? "Read Less" : "Read More ..."}
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card className="bg-white shadow">
                <Card.Img
                  variant="top"
                  src={img2}
                  className="p-2 position-relative"
                />
                <Card.Body>
                  <Card.Title className="main_Color text-white  card_imgLayer ">
                    {" "}
                    Hurghada Day Tours
                  </Card.Title>
                  <Card.Title>Cairo is a fantastic </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    location for day tours.
                  </Card.Subtitle>
                  <Card.Text>
                    Allover Egypt Tours will get you there comfortably and
                    quickly. With knowledgeable Cairo day tour guides to show
                    you the best of what this bustling city has to offer.
                  </Card.Text>
                  {showMoreData && (
                    <p>
                      From exploring the Giza pyramids and Sphinx to cruising
                      downriver on a felucca, these Egypt day tours are suitable
                      for any traveler who wants to get the most out of their
                      trip.{" "}
                    </p>
                  )}
                  <Link className="text_read" onClick={showMoreTour}>
                    {showMoreData ? "Read Less" : "Read More ..."}
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card className="bg-white shadow">
                <Card.Img
                  variant="top"
                  src={img2}
                  className="p-2 position-relative"
                />
                <Card.Body>
                  <Card.Title className="main_Color text-white  card_imgLayer ">
                    {" "}
                    Sharm El Sheikh Tours
                  </Card.Title>
                  <Card.Title>Cairo is a fantastic </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    location for day tours.
                  </Card.Subtitle>
                  <Card.Text>
                    Allover Egypt Tours will get you there comfortably and
                    quickly. With knowledgeable Cairo day tour guides to show
                    you the best of what this bustling city has to offer.
                  </Card.Text>
                  {showMoreData && (
                    <p>
                      From exploring the Giza pyramids and Sphinx to cruising
                      downriver on a felucca, these Egypt day tours are suitable
                      for any traveler who wants to get the most out of their
                      trip.{" "}
                    </p>
                  )}
                  <Link className="text_read" onClick={showMoreTour}>
                    {showMoreData ? "Read Less" : "Read More ..."}
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card className="bg-white shadow">
                <Card.Img
                  variant="top"
                  src={img2}
                  className="p-2 position-relative"
                />
                <Card.Body>
                  <Card.Title className="main_Color text-white  card_imgLayer ">
                    Dahab Day Tours
                  </Card.Title>
                  <Card.Title>Cairo is a fantastic </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    location for day tours.
                  </Card.Subtitle>
                  <Card.Text>
                    Allover Egypt Tours will get you there comfortably and
                    quickly. With knowledgeable Cairo day tour guides to show
                    you the best of what this bustling city has to offer.
                  </Card.Text>
                  {showMoreData && (
                    <p>
                      From exploring the Giza pyramids and Sphinx to cruising
                      downriver on a felucca, these Egypt day tours are suitable
                      for any traveler who wants to get the most out of their
                      trip.{" "}
                    </p>
                  )}
                  <Link className="text_read" onClick={showMoreTour}>
                    {showMoreData ? "Read Less" : "Read More ..."}
                  </Link>
                </Card.Body>
              </Card>
            </div>
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
          <MySwiper />
        </Container>
      </section>
      <section className="py-4 mb-5 text-center bg__form ">
        <Container>
          <h2 className="mb-4 text__color mb-5 opacity-100 fw-bold">
            The Best Allover Egypt Day Tours{" "}
          </h2>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <DataForm />
            </div>

            <div className="col-md-3">
              <p>If you face any problem Send Your Inquiry Directly to :</p>
            </div>
            <div className="col-md-3">
              <Link className="text-black d-block text-decoration-none mb-3">
                {" "}
                <FaWhatsapp className="me-2 text-success" />
                +201155430742 / +201283488559
              </Link>
              <Link className="text-black text-decoration-none">
                <CiMail className="me-2 text-success" /> Info@allover-egypt.com
              </Link>
            </div>
          </div>
        </Container>
      </section>
     
    </>
  );
};

export default EgyptDayTours;
