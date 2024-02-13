import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Slider from "../swiper/Slider";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { MdOutlineDone } from "react-icons/md";
import DataForm from "../../shared/form/DataForm";
import Accordions from "../accordion/Accordions";
import Trip from "../../shared/trip/Trip";

function nileCruise() {
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
            <Breadcrumb.Item className="text-black text-decoration-none page__link">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Egypt Nile Cruise</Breadcrumb.Item>
          </Breadcrumb>
          <div className="header ">
            <div className="row align-items-center ">
              <div className="col-md-6">
                <h1 className="mb-4">Egypt Nile Cruise </h1>
                <p className="text-muted egypt_tour_text mb-5">
                  If you are a big fan of river cruises, then Egypt is your destination. Allover Egypt will arrange a Nile Cruise to you and your beloved ones through Luxor to Aswan.                </p>
              </div>
              <div className="col-md-6">
                <Slider />
              </div>
            </div>

            <h6 className="text__color">

              Request your customized itinerary from Allover Egypt tour Packages experts.

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
            The Best Allover Egypt Nile Cruise          </h2>
          <p className="text-muted  mb-5">
            Throughout your tour in the middle of the Nile River, you’ll be visiting the East Bank of the Nile in Luxor, your gate to Temple of Karnak and Luxor Temple.
            With a warm local ambiance, enjoy our warmly cooked full board meals, along with our night shows.

            Not only that, there’s still more to explore on the West Bank of the Nile. Witnessing the glory of history will not end, as you get to see the Valley of the Kings along with the Valley of the Queens and Hatshepsut Temple.

            Blow your mind with their gigantic statues and enormous walls filled with the Hieroglyphic writings.

            Get to enjoy a relaxing night sail to the city of Edfu half the way from Luxor to Aswan to energize for a morning full of more explorations.

            Passing through Edfu and Kom Ombo, you’ll get to explore the Temple of Kom Ombo, and the Temple of Horus, the god of kingship and the sky.          </p>

        </Container>
      </section>
      <section className="py-5">
        <Container>
          <h2 className="mb-4 text__color text-center fw-bold">

          Egypt Nile Cruise Packages
          </h2>
          <p className="text-center mb-5">
          If you’re worried about $$, Allover Egypt Nile Cruise has tailored a variety of different packages depending on your budget.
          </p>
 
      
            <Trip />
   
        </Container>
      </section>
      <section className="py-4 text-center bg__form ">
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
      <section className="py-5">
        <Container>
          <h2 className="mb-4 text__color fw-bold text-center">Why Book With Us</h2>
          <p>
            Booking with Allover Egypt Tours is the perfect way to ensure that
            your journey through the land of Ancient Wonders is full of joy and
            excitement. With our experienced tour guides, you can rest assured
            knowing you are in the most capable hands. With over 15 years of
            experience leading tours throughout the nation, we know all the
            secret spots to explore and provide expert advice on how to make the
            most out of your Egyptian experience. Not only do we offer
            well-crafted day tours and multi-day packages, but we also customize
            packages that fit your needs and budget perfectly. Additionally, our
            friendly team always goes above and beyond to provide excellent
            customer service during every stage of your trip so you can enjoy a
            worry-free vacation!
          </p>

          <div className="row align-items-center g-4 mt-4 ">
            <div className="col-md-4 ">
              <div className="d-flex align-items-center ">
                <div className="done__icon rounded-circle me-3 d-flex justify-content-center align-items-center text-white">
                  <MdOutlineDone />
                </div>
                <p className="mb-0">24/7 Customer Service</p>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="d-flex align-items-center ">
                <div className="done__icon rounded-circle me-3 d-flex justify-content-center align-items-center text-white">
                  <MdOutlineDone />
                </div>
                <p className="mb-0">100% Tailor-Made Tour</p>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="d-flex align-items-center  ">
                <div className="done__icon rounded-circle me-3 d-flex justify-content-center align-items-center text-white">
                  <MdOutlineDone />
                </div>
                <p className="mb-0">Best Price Guaranteed</p>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="d-flex align-items-center  ">
                <div className="done__icon rounded-circle me-3 d-flex justify-content-center align-items-center text-white">
                  <MdOutlineDone />
                </div>
                <p className="mb-0">Local Expert</p>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="d-flex align-items-center  ">
                <div className="done__icon rounded-circle me-3 d-flex justify-content-center align-items-center text-white">
                  <MdOutlineDone />
                </div>
                <p className="mb-0">Private Guided Tours</p>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="d-flex align-items-center  ">
                <div className="done__icon rounded-circle me-3 d-flex justify-content-center align-items-center text-white text-center">
                  <MdOutlineDone />
                </div>
                <p className="mb-0">Partial Booking Payment</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section id="Accordion" className="py-5">
        <Container>
          <h2 className="mb-4 text__color fw-bold text-center">Allover Egypt Tours FAQs</h2>
          <Accordions />
        </Container>
      </section>
   
    </>
  )
}

export default nileCruise