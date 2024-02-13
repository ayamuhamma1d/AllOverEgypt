
// import React, { useState } from "react";
// import { Container } from "react-bootstrap";
// import Slider from "../swiper/Slider";
// import Breadcrumb from "react-bootstrap/Breadcrumb";
// import { Link } from "react-router-dom";
// import Card from "react-bootstrap/Card";
// import { FaWhatsapp } from "react-icons/fa";
// import { CiMail } from "react-icons/ci";
// import { MdOutlineDone } from "react-icons/md";
// import img2 from "../../assets/img/1 (1).jpg";
// import MySwiper from "../slider/MySwiper";
// import DataForm from "../../shared/form/DataForm";
// import Accordions from "../accordion/Accordions";

// const EgyptTourPackage = () => {
//   const [showMoreData, setShowMoreData] = useState(false);



//   const showMoreTour = () => {
//     setShowMoreData(!showMoreData);
//   };
//   return (
//     <>
//       <section id="banner" className="py-5">
//         <Container>
//           <Breadcrumb>
//             <Breadcrumb.Item className="text-black text-decoration-none page__link">
//               Home
//             </Breadcrumb.Item>
//             <Breadcrumb.Item active>Egypt Tour Packages </Breadcrumb.Item>
//           </Breadcrumb>
//           <div className="header ">
//             <div className="row align-items-center ">
//               <div className="col-md-6">
//                 <h1 className="mb-4">Egypt Tour Packages </h1>
//                 <p className="text-muted egypt_tour_text mb-5">
//                 Puzzled about where and when to spend your vacations or even your holidays? With Allover Egypt you can arrange your private Egypt tour Packages all year round...
//                 </p>
//               </div>
//               <div className="col-md-6">
//                 <Slider />
//               </div>
//             </div>
//             <p>
//             If you’re feeling puzzled about where and when to spend your next vacation or holiday, look no further than Allover Egypt Tours. With their private Egypt tour packages, you can explore the many wonders of this ancient land all year round. From the iconic Pyramids of Giza and the Sphinx to the ancient temples of Luxor and Karnak, there’s no shortage of incredible sights to discover on an Egypt tour. And with Allover Egypt Tours, you can trust that you’ll be in good hands with their knowledgeable and experienced guides. With a wide range of Egypt tour packages available, you can choose the option that works best for your schedule and budget, whether you’re interested in day tours or longer, more comprehensive packages. Don’t wait any longer to book your Egypt tour package with Allover Egypt Tours and get ready for an unforgettable journey through the great history and culture of Egypt!
//             </p>
//             <h6 className="text__color">
            
// Request your customized itinerary from Allover Egypt tour Packages experts.

//             </h6>
//             <Link className="btn shadow-lg btn-warning  px-3 py-2 my-3 text-black">
//               Try it free
//             </Link>
//           </div>
//         </Container>
//       </section>
//       <section id="info">
//         <Container>
//           <h2 className="mb-4  text__color text-center fw-bold">
//           The Best Allover Egypt Tour Packages 
//           </h2>
//           <p className="text-muted text-center mb-5">
//           Allover Egypt Tours offers a wide variety of Egypt tour packages that cater to different interests, preferences, and budgets, making it the perfect choice for solo travelers, families, and couples. With options ranging from budget-friendly to luxurious packages that offer premium experiences, there’s an Egypt tour package that suits your needs. Allover Egypt Tours also provides holiday offers during Christmas or Easter, enabling you to explore the wonders of Egypt during these special occasions. Choose from their wide selection of Egypt tour packages. Allover Egypt Tours is committed to providing visitors with a comprehensive and immersive experience of Egypt, covering all corners of the country. Their Egypt tour packages are designed to take you to the most iconic landmarks and hidden gems, ensuring that you get a full picture of the country’s rich history and culture. You can explore the bustling city of Cairo, visit the ancient temples of Luxor and Karnak, cruise down the Nile River, and even venture into the Western Desert to discover its natural wonders. With Allover Egypt Tours, the possibilities are endless. Choose from their wide selection of Egypt tour packages and let them take you on a journey through this fascinating land.
//           </p>
//           <div className="row g-4">
//             <div className="col-md-3">
//               <Card className="bg-white shadow">
//                 <Card.Img
//                   variant="top"
//                   src={img2}
//                   className="p-2 position-relative"
//                 />
//                 <Card.Body>
//                   <Card.Title className="main_Color text-white  card_imgLayer ">
//                     {" "}	
//   Standard Tour Packages
//                   </Card.Title>
              
//                   <Card.Text>
//                   Our Standard Egypt tour packages are a great way for anyone to explore all that this fascinating culture has to offer. You’ll have experienced guides there with you every step of the way.
//                   </Card.Text>
//                   {showMoreData && (
//                     <p>
//                       From exploring the Giza pyramids and Sphinx to cruising
//                       downriver on a felucca, these Egypt day tours are suitable
//                       for any traveler who wants to get the most out of their
//                       trip.{" "}
//                     </p>
//                   )}
//                   <Link className="text_read" onClick={showMoreTour}>
//                     {showMoreData ? "Read Less" : "Read More ..."}
//                   </Link>
//                 </Card.Body>
//               </Card>
//             </div>
//             <div className="col-md-3">
//               <Card className="bg-white shadow">
//                 <Card.Img
//                   variant="top"
//                   src={img2}
//                   className="p-2 position-relative"
//                 />
//                 <Card.Body>
//                   <Card.Title className="main_Color text-white  card_imgLayer ">
//                     {" "}
//                     Easter  Packages                  </Card.Title>
         
//                   <Card.Text>
//                   Our Private Easter Egypt Tour Packages are the perfect way to experience the incredible sights and culture of this beautiful country. We have carefully designed our Egypt 
//                   </Card.Text>
//                   {showMoreData && (
//                     <p>
//                       From exploring the Giza pyramids and Sphinx to cruising
//                       downriver on a felucca, these Egypt day tours are suitable
//                       for any traveler who wants to get the most out of their
//                       trip.{" "}
//                     </p>
//                   )}
//                   <Link className="text_read" onClick={showMoreTour}>
//                     {showMoreData ? "Read Less" : "Read More ..."}
//                   </Link>
//                 </Card.Body>
//               </Card>
//             </div>
//             <div className="col-md-3">
//               <Card className="bg-white shadow">
//                 <Card.Img
//                   variant="top"
//                   src={img2}
//                   className="p-2 position-relative"
//                 />
//                 <Card.Body>
//                   <Card.Title className="main_Color text-white  card_imgLayer ">
//                     {" "}
//                     Luxury Tour Packages
//                   </Card.Title>
              
//                   <Card.Text>
//                   Our Luxury Egypt tour packages are ideal for travelers seeking a unique and opulent experience. We ensure that your trip is luxurious in every way;
//                   </Card.Text>
//                   {showMoreData && (
//                     <p>
//                       From exploring the Giza pyramids and Sphinx to cruising
//                       downriver on a felucca, these Egypt day tours are suitable
//                       for any traveler who wants to get the most out of their
//                       trip.{" "}
//                     </p>
//                   )}
//                   <Link className="text_read" onClick={showMoreTour}>
//                     {showMoreData ? "Read Less" : "Read More ..."}
//                   </Link>
//                 </Card.Body>
//               </Card>
//             </div>
//             <div className="col-md-3">
//               <Card className="bg-white shadow">
//                 <Card.Img
//                   variant="top"
//                   src={img2}
//                   className="p-2 position-relative"
//                 />
//                 <Card.Body>
//                   <Card.Title className="main_Color text-white  card_imgLayer ">
//                     {" "}
//                     Honeymoon Packages                  </Card.Title>
            
//                   <Card.Text>
//                     Allover Egypt Tours will get you there comfortably and
//                     quickly. With knowledgeable Cairo day tour guides to show
//                     you the best of what this bustling city has to offer.
//                   </Card.Text>
//                   {showMoreData && (
//                     <p>
//                       From exploring the Giza pyramids and Sphinx to cruising
//                       downriver on a felucca, these Egypt day tours are suitable
//                       for any traveler who wants to get the most out of their
//                       trip.{" "}
//                     </p>
//                   )}
//                   <Link className="text_read" onClick={showMoreTour}>
//                     {showMoreData ? "Read Less" : "Read More ..."}
//                   </Link>
//                 </Card.Body>
//               </Card>
//             </div>
//             <div className="col-md-3">
//               <Card className="bg-white shadow">
//                 <Card.Img
//                   variant="top"
//                   src={img2}
//                   className="p-2 position-relative"
//                 />
//                 <Card.Body>
//                   <Card.Title className="main_Color text-white  card_imgLayer ">
//                     {" "}
//                     Aswan Day Tours
//                   </Card.Title>
//                   <Card.Title>Cairo is a fantastic </Card.Title>
//                   <Card.Subtitle className="mb-2 text-muted">
//                     location for day tours.
//                   </Card.Subtitle>
//                   <Card.Text>
//                     Allover Egypt Tours will get you there comfortably and
//                     quickly. With knowledgeable Cairo day tour guides to show
//                     you the best of what this bustling city has to offer.
//                   </Card.Text>
//                   {showMoreData && (
//                     <p>
//                       From exploring the Giza pyramids and Sphinx to cruising
//                       downriver on a felucca, these Egypt day tours are suitable
//                       for any traveler who wants to get the most out of their
//                       trip.{" "}
//                     </p>
//                   )}
//                   <Link className="text_read" onClick={showMoreTour}>
//                     {showMoreData ? "Read Less" : "Read More ..."}
//                   </Link>
//                 </Card.Body>
//               </Card>
//             </div>
//             <div className="col-md-3">
//               <Card className="bg-white shadow">
//                 <Card.Img
//                   variant="top"
//                   src={img2}
//                   className="p-2 position-relative"
//                 />
//                 <Card.Body>
//                   <Card.Title className="main_Color text-white  card_imgLayer ">
//                     {" "}
//                     Hurghada Day Tours
//                   </Card.Title>
//                   <Card.Title>Cairo is a fantastic </Card.Title>
//                   <Card.Subtitle className="mb-2 text-muted">
//                     location for day tours.
//                   </Card.Subtitle>
//                   <Card.Text>
//                     Allover Egypt Tours will get you there comfortably and
//                     quickly. With knowledgeable Cairo day tour guides to show
//                     you the best of what this bustling city has to offer.
//                   </Card.Text>
//                   {showMoreData && (
//                     <p>
//                       From exploring the Giza pyramids and Sphinx to cruising
//                       downriver on a felucca, these Egypt day tours are suitable
//                       for any traveler who wants to get the most out of their
//                       trip.{" "}
//                     </p>
//                   )}
//                   <Link className="text_read" onClick={showMoreTour}>
//                     {showMoreData ? "Read Less" : "Read More ..."}
//                   </Link>
//                 </Card.Body>
//               </Card>
//             </div>
//             <div className="col-md-3">
//               <Card className="bg-white shadow">
//                 <Card.Img
//                   variant="top"
//                   src={img2}
//                   className="p-2 position-relative"
//                 />
//                 <Card.Body>
//                   <Card.Title className="main_Color text-white  card_imgLayer ">
//                     {" "}
//                     Sharm El Sheikh Tours
//                   </Card.Title>
//                   <Card.Title>Cairo is a fantastic </Card.Title>
//                   <Card.Subtitle className="mb-2 text-muted">
//                     location for day tours.
//                   </Card.Subtitle>
//                   <Card.Text>
//                     Allover Egypt Tours will get you there comfortably and
//                     quickly. With knowledgeable Cairo day tour guides to show
//                     you the best of what this bustling city has to offer.
//                   </Card.Text>
//                   {showMoreData && (
//                     <p>
//                       From exploring the Giza pyramids and Sphinx to cruising
//                       downriver on a felucca, these Egypt day tours are suitable
//                       for any traveler who wants to get the most out of their
//                       trip.{" "}
//                     </p>
//                   )}
//                   <Link className="text_read" onClick={showMoreTour}>
//                     {showMoreData ? "Read Less" : "Read More ..."}
//                   </Link>
//                 </Card.Body>
//               </Card>
//             </div>
//             <div className="col-md-3">
//               <Card className="bg-white shadow">
//                 <Card.Img
//                   variant="top"
//                   src={img2}
//                   className="p-2 position-relative"
//                 />
//                 <Card.Body>
//                   <Card.Title className="main_Color text-white  card_imgLayer ">
//                     Dahab Day Tours
//                   </Card.Title>
//                   <Card.Title>Cairo is a fantastic </Card.Title>
//                   <Card.Subtitle className="mb-2 text-muted">
//                     location for day tours.
//                   </Card.Subtitle>
//                   <Card.Text>
//                     Allover Egypt Tours will get you there comfortably and
//                     quickly. With knowledgeable Cairo day tour guides to show
//                     you the best of what this bustling city has to offer.
//                   </Card.Text>
//                   {showMoreData && (
//                     <p>
//                       From exploring the Giza pyramids and Sphinx to cruising
//                       downriver on a felucca, these Egypt day tours are suitable
//                       for any traveler who wants to get the most out of their
//                       trip.{" "}
//                     </p>
//                   )}
//                   <Link className="text_read" onClick={showMoreTour}>
//                     {showMoreData ? "Read Less" : "Read More ..."}
//                   </Link>
//                 </Card.Body>
//               </Card>
//             </div>
//           </div>
//         </Container>
//       </section>
//       <section className="py-5">
//         <Container>
//           <h2 className="mb-4 text__color text-center fw-bold">
//             Popular Egypt Day Tours you may like
//           </h2>
//           <p>
//             If you’re looking for the best way to experience the beauty and
//             wonder of Egypt, look no further than Allover Egypt Tours’ popular
//             Egypt day tours. With a variety of options to choose from, including
//             tours of Cairo, Alexandria, Luxor, and Aswan, there’s something for
//             every interest and preference. Whether you’re a history buff looking
//             to explore ancient ruins and tombs, or an adventurer seeking
//             thrilling experiences like hot air balloon rides and camel treks,
//             there’s a day tour for you. And with Allover Egypt Tours, you can
//             trust that you’ll be in good hands with their knowledgeable and
//             experienced tour guides. Choose from their popular Egypt day tours
//             and get ready for an unforgettable journey through this fascinating
//             country.
//           </p>
//           <MySwiper />
//         </Container>
//       </section>
//       <section className="py-4 text-center bg__form ">
//         <Container>
//           <h2 className="mb-4 text__color mb-5 opacity-100 fw-bold">
//             The Best Allover Egypt Day Tours{" "}
//           </h2>
//           <div className="row justify-content-center align-items-center">
//             <div className="col-md-6">
//               <DataForm />
//             </div>

//             <div className="col-md-3">
//               <p>If you face any problem Send Your Inquiry Directly to :</p>
//             </div>
//             <div className="col-md-3">
//               <Link className="text-black d-block text-decoration-none mb-3">
//                 {" "}
//                 <FaWhatsapp className="me-2 text-success" />
//                 +201155430742 / +201283488559
//               </Link>
//               <Link className="text-black text-decoration-none">
//                 <CiMail className="me-2 text-success" /> <CiMail className='me-2  text-success' />Info@allover-egypt.com
//               </Link>
//             </div>
//           </div>
//         </Container>
//       </section>
//       <section className="py-5">
//         <Container>
//           <h2 className="mb-4 text__color fw-bold text-center">Why Book With Us</h2>
//           <p>
//             Booking with Allover Egypt Tours is the perfect way to ensure that
//             your journey through the land of Ancient Wonders is full of joy and
//             excitement. With our experienced tour guides, you can rest assured
//             knowing you are in the most capable hands. With over 15 years of
//             experience leading tours throughout the nation, we know all the
//             secret spots to explore and provide expert advice on how to make the
//             most out of your Egyptian experience. Not only do we offer
//             well-crafted day tours and multi-day packages, but we also customize
//             packages that fit your needs and budget perfectly. Additionally, our
//             friendly team always goes above and beyond to provide excellent
//             customer service during every stage of your trip so you can enjoy a
//             worry-free vacation!
//           </p>

//           <div className="row align-items-center g-4 mt-4 ">
//             <div className="col-md-4 ">
//               <div className="d-flex align-items-center ">
//                 <div className="done__icon rounded-circle me-3 d-flex justify-content-center align-items-center text-white">
//                   <MdOutlineDone />
//                 </div>
//                 <p className="mb-0">24/7 Customer Service</p>
//               </div>
//             </div>
//             <div className="col-md-4 ">
//               <div className="d-flex align-items-center ">
//                 <div className="done__icon rounded-circle me-3 d-flex justify-content-center align-items-center text-white">
//                   <MdOutlineDone />
//                 </div>
//                 <p className="mb-0">100% Tailor-Made Tour</p>
//               </div>
//             </div>
//             <div className="col-md-4 ">
//               <div className="d-flex align-items-center  ">
//                 <div className="done__icon rounded-circle me-3 d-flex justify-content-center align-items-center text-white">
//                   <MdOutlineDone />
//                 </div>
//                 <p className="mb-0">Best Price Guaranteed</p>
//               </div>
//             </div>
//             <div className="col-md-4 ">
//               <div className="d-flex align-items-center  ">
//                 <div className="done__icon rounded-circle me-3 d-flex justify-content-center align-items-center text-white">
//                   <MdOutlineDone />
//                 </div>
//                 <p className="mb-0">Local Expert</p>
//               </div>
//             </div>
//             <div className="col-md-4 ">
//               <div className="d-flex align-items-center  ">
//                 <div className="done__icon rounded-circle me-3 d-flex justify-content-center align-items-center text-white">
//                   <MdOutlineDone />
//                 </div>
//                 <p className="mb-0">Private Guided Tours</p>
//               </div>
//             </div>
//             <div className="col-md-4 ">
//               <div className="d-flex align-items-center  ">
//                 <div className="done__icon rounded-circle me-3 d-flex justify-content-center align-items-center text-white text-center">
//                   <MdOutlineDone />
//                 </div>
//                 <p className="mb-0">Partial Booking Payment</p>
//               </div>
//             </div>
//           </div>
//         </Container>
//       </section>
//       <section id="Accordion" className="py-5">
//         <Container>
//           <h2 className="mb-4 text__color fw-bold text-center">Allover Egypt Tours FAQs</h2>
//           <Accordions />
//         </Container>
//       </section>
    
//     </>
//   );
// };

// export default EgyptTourPackage
