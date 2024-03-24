import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Slider from '../sliderReview/Slider';
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { MdOutlineDone } from "react-icons/md";
import DataForm from "../../shared/form/DataForm";
import Accordions from "../accordion/Accordions";
import Trip from "../../shared/trip/Trip";
import { IoMdArrowDropright } from "react-icons/io";
import img1 from "./../../assets/img/b (5).jpg";
import img2 from "./../../assets/img/b (2).jpg";
import img3 from "./../../assets/img/b (1).jpg";
import img4 from "./../../assets/img/b (4).jpg";
import img5 from "./../../assets/img/b (3).jpg";
import WhyBook from "../whyBook/WhyBook";
function nileCruise() {
  const [showMoreText, setShowMoreText] = useState(false);
  const [showMoreData, setShowMoreData] = useState(false);

  const images = [img1, img2, img3, img4, img5];

  const showMore = () => {
    setShowMoreText(!showMoreText);
  };

  const showMoreTour = () => {
    setShowMoreData(!showMoreData);
  };
  return (
    <>
      <Container className="py-5 my-5">
        <div className="links d-flex align-content-center align-items-center  mb-4">
          <Link to="/" className="text-decoration-none">Home</Link>
          <IoMdArrowDropright className="mx-2" />
          <span>Nile Cruise</span>
        </div>
        <section className="header">
          <div className="row">
            <div className="col-lg-6 mb-5">
              <h1 className="mb-4">Egypt Nile Cruise</h1>
              <p className="text-muted egypt_tour_text mb-5">
                Explore the wonders of Egypt with a Nile Cruise. Allover Egypt offers unforgettable journeys from Luxor to Aswan, providing you and your loved ones with an extraordinary experience.
              </p>
              <h6 className="text-muted mb-5 ext__color">
                Request a customized itinerary from our experts at Allover Egypt Tour Packages.
              </h6>
              <Link to="/contact" className=" shadow-lg px-4 py-3 my-3 secondary-color text-white rounded-pill ">Request Itinerary</Link>
            </div>
            <div className="col-lg-6 ">
              <Slider images={images} />
            </div>
          </div>
        </section>

        <section id="info" className="py-5">

          <h2 className="mb-4  text__color text-center fw-bold">
            The Best Allover Egypt Nile Cruise          </h2>
          <p className="text-muted ">
            Throughout your tour in the middle of the Nile River, you’ll be visiting the East Bank of the Nile in Luxor, your gate to Temple of Karnak and Luxor Temple.
            With a warm local ambiance, enjoy our warmly cooked full board meals, along with our night shows.

            Not only that, there’s still more to explore on the West Bank of the Nile. Witnessing the glory of history will not end, as you get to see the Valley of the Kings along with the Valley of the Queens and Hatshepsut Temple.

            Blow your mind with their gigantic statues and enormous walls filled with the Hieroglyphic writings.

            Get to enjoy a relaxing night sail to the city of Edfu half the way from Luxor to Aswan to energize for a morning full of more explorations.

            Passing through Edfu and Kom Ombo, you’ll get to explore the Temple of Kom Ombo, and the Temple of Horus, the god of kingship and the sky.          </p>


        </section >
        <section className="py-5">
          <h2 className="mb-4 text__color text-center fw-bold">
            Egypt Nile Cruise Packages
          </h2>
          <p className="text-center mb-5">
            If you’re worried about $$, Allover Egypt Nile Cruise has tailored a variety of different packages depending on your budget.
          </p>
          <Trip tripType='nileCruise' />
        </section>

        <section className="py-5">
          <WhyBook />
        </section>
        <section id="Accordion" className="py-5">

          <h2 className="mb-4 text__color fw-bold text-center">Allover Egypt Tours FAQs</h2>
          <Accordions />

        </section>
      </Container >
    </>
  )
}

export default nileCruise