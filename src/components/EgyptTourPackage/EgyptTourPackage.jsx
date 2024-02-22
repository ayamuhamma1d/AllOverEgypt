
// import React, { useState } from "react";
// import { Container } from "react-bootstrap";
// import Slider from "../sliderReview/Slider";
// import Breadcrumb from "react-bootstrap/Breadcrumb";
// import { Link } from "react-router-dom";
// import Card from "react-bootstrap/Card";
// import { FaWhatsapp } from "react-icons/fa";
// import { CiMail } from "react-icons/ci";
// import { MdOutlineDone } from "react-icons/md";
// import MySwiper from "../slider/MySwiper";
// import DataForm from "../../shared/form/DataForm";
// import Accordions from "../accordion/Accordions";
// import { IoMdArrowDropright } from "react-icons/io";
// import { SiYourtraveldottv } from "react-icons/si";
// import img1 from "./../../assets/img/a (20).jpg";
// import img2 from "./../../assets/img/a (17).jpg";
// import img3 from "./../../assets/img/a (12).jpg";
// import img4 from "./../../assets/img/a (23).jpg";
// import img5 from "./../../assets/img/a (14).jpg";
// import img6 from "./../../assets/daytours/Alexandria-day-tour.jpg" ;
// import img7 from "./../../assets/daytours/Aswan-day-tour-.jpg" ;
// import img8 from "./../../assets/daytours/Dahab-Day-Tours.jpg" ;
// import img9 from "./../../assets/daytours/Giza-day-tour.jpg" ;
// import img10 from "./../../assets/daytours/Hurghada-Day-Tours.jpg" ;
// import img11 from "./../../assets/daytours/Luxor-day-tour.jpg" ;
// import img12 from "./../../assets/daytours/Sharm-El-Shiekh-day-tours.jpg" ;
// import Standard from "./../../assets/tour packages/Standard-Tour-Packages.jpg";
// import solo from "./../../assets/tour packages/solo-traveler-s.jpg";
// import Budget from"./../../assets/tour packages/Budget-Tour-Packages.jpg";
// import  Diamond from "./../../assets/tour packages/Diamond-Tour-Packages.jpg";
// import  Easter from "./../../assets/tour packages/Easter-Tour-Packages.jpg";
// import  christmas from "./../../assets/tour packages/christmas-tour-packages.jpg";
// import Family from "./../../assets/tour packages/Family-Tour-Packages.jpg";
// import Honeymoon from "./../../assets/tour packages/Honeymoon-Tour-Packages.jpg";
// import Luxury from "./../../assets/tour packages/Luxury-Tour-Packages.jpg";
// const EgyptTourPackage = () => {
//   const images = [img1, img2, img3, img4, img5];
//   const location=[img6,img7,img8,img9,img10,img11,img12];
//   const [showMoreData, setShowMoreData] = useState({
//     card1: false,
//     card2: false,
//     card3: false,
//     card4: false
//   });
//   const showMoreTour = (card) => {
//     setShowMoreData(prevState => ({
//       ...prevState,
//       [card]: !prevState[card]
//     }));
//   };
//   return (
//     <>
//       <section id="banner" className="py-5">
//         <Container>
//           <div className="links d-flex align-content-center align-items-center  mb-4">
//             <Link to="/" className="text-decoration-none">Home</Link>
//             <IoMdArrowDropright className="mx-2" />
//             <Link to="/egyptTourPackage" className="text-black">Egypt Tour Packages </Link>
//           </div>
//           <div className="row align-items-center ">
//               <div className="col-md-6">
//                 <h2 className="mb-4 header-color fs-1 fw-bold">Egypt Tour Packages </h2>
//                 <p className="text-muted egypt_tour_text mb-5">
//                   Puzzled about where and when to spend your vacations or even your holidays? With Allover Egypt you can arrange your private Egypt tour Packages all year round...
//                 </p>
//               </div>
//               <div className="col-md-6 mb-5">
//                 <Slider images={images}/>
//               </div>
//               <div className="col-md-12">
//               <p>
//               If you’re feeling puzzled about where and when to spend your next vacation or holiday, look no further than Allover Egypt Tours. With their private Egypt tour packages, you can explore the many wonders of this ancient land all year round. From the iconic Pyramids of Giza and the Sphinx to the ancient temples of Luxor and Karnak, there’s no shortage of incredible sights to discover on an Egypt tour. And with Allover Egypt Tours, you can trust that you’ll be in good hands with their knowledgeable and experienced guides. With a wide range of Egypt tour packages available, you can choose the option that works best for your schedule and budget, whether you’re interested in day tours or longer, more comprehensive packages. Don’t wait any longer to book your Egypt tour package with Allover Egypt Tours and get ready for an unforgettable journey through the great history and culture of Egypt!
//             </p>
//             <h6 className="text__color  mb-4">

//               Request your customized itinerary from Allover Egypt tour Packages experts.

//             </h6>
//             <button className=" px-4 secondary-color shadow btn py-3 rounded-5 border-none mb-4 d-flex align-items-center"><span className='me-2'>Try it free</span> <SiYourtraveldottv className='icon__color' /></button>

//               </div>
//           </div>
     
//         </Container>
//       </section>
//       <section id="info"className="pb-5">
//         <Container>
//           <h2 className="mb-4  text__color text-center fw-bold">
//             The Best Allover Egypt Tour Packages
//           </h2>
//           <p className="text-muted text-center mb-5">
//             Allover Egypt Tours offers a wide variety of Egypt tour packages that cater to different interests, preferences, and budgets, making it the perfect choice for solo travelers, families, and couples. With options ranging from budget-friendly to luxurious packages that offer premium experiences, there’s an Egypt tour package that suits your needs. Allover Egypt Tours also provides holiday offers during Christmas or Easter, enabling you to explore the wonders of Egypt during these special occasions. Choose from their wide selection of Egypt tour packages. Allover Egypt Tours is committed to providing visitors with a comprehensive and immersive experience of Egypt, covering all corners of the country. Their Egypt tour packages are designed to take you to the most iconic landmarks and hidden gems, ensuring that you get a full picture of the country’s rich history and culture. You can explore the bustling city of Honeymoon, visit the ancient temples of Luxor and Karnak, cruise down the Nile River, and even venture into the Western Desert to discover its natural wonders. With Allover Egypt Tours, the possibilities are endless. Choose from their wide selection of Egypt tour packages and let them take you on a journey through this fascinating land.
//           </p>
//           <div className="row g-4">

      
//             {[
//               { name: "Honeymoon Packages ", img: Honeymoon, title: "Honeymoon  Tours  Packages", description: "We understand that a honeymoon should be as special as possible; it’s a once-in-a-lifetime occasion that deserves a lifetime experience. That’s why we offer Honeymoon Egypt tour packages for couples looking to explore", card: "card1", text: "the history and beauty of this magical country. There’s no better way to start your relationship off with a bang than an Egyptian adventure, and our tours are perfect for newlyweds who want to take in the breathtaking architecture, marvel at ancient relics, wander the warm desert sands, and savor unforgettable romantic moments together. Our experienced guides will show you around this cultural oasis, pointing out only the hottest spots so that you can spend your days discovering new places and experiences that will bring you closer together." },
//               { name: " Diamond Packages" , img: Diamond, title: "Diamond  Tours  Packages", description: "Our Allover Egypt Tours offers Diamond Luxury Private Egypt Tour Packages that will provide you with a once-in-a-lifetime experience. Our tours are designed to immerse you in the rich history and culture of this fascinating country.", card: "card2", text: "Our luxurious accommodations will make you feel like royalty as we book the most Luxurious and expensive hotels in Egypt, and our expert well known guides will take you to all the must-see sights while also giving you insider knowledge about lesser-known gems. You’ll get to indulge in delicious local cuisine and even cruise down the Nile River on a Premium 5-stars Cruise or Dahabiya Criuse. With personalized attention and top-notch service every step of the way, our Egypt tours are an unforgettable adventure. Get ready to create memories that will last a lifetime!" },
//               { name: "Budget Packages",  img: Budget, title: "Budget  Tours  Packages", description: "Allover Egypt offers Egypt tour packages for travelers on a budget who wants to experience all the wonders of Egypt’s ancient culture. Our Egypt tour packages include accommodations in some of the most authentic Egyptian hotels", card: "card3", text: "and transport by local guides. Travel to Egypt and enjoy a fantastic journey through history and let us help plan your trip today!" },
//               { name: "solo Packages", img: solo, title: "solo  Tours  Packages", description: "Our Private Egypt Tour Packages are tailored to fit solo travelers, so there’s no need to worry about having to find other people to join you. Traveling around Egypt will give you the opportunity to discover", card: "card4", text: "its vast and rich culture firsthand. And with our detailed itineraries and friendly guides on hand, you can explore in comfort without having to worry about organizing everything yourself. So, make your dreams come true and explore this historic land like never before with one of our Egypt tour packages today!" },

//               { name: " Easter Packages",  img: Budget, title: "Budget  Tours  Packages", description: "Our team of experienced guides will lead you through the heritage sites of this beautiful area including breathtaking views overlooking the Sinai desert. You’ll also be able to venture out into..", card: "card5", text: "the depths of the Red Sea by boat, where you can enjoy some snorkeling near colorful coral reefs, with plenty of unique photo opportunities along the way! So why not come on one of our amazing Diamond El Sheikh Egypt Day tours today?" },
//               { name: "Standard Packages" , img: Standard, title: "Standard El Sheikh Tours", description: "Our Standard Egypt tour packages are a great way for anyone to explore all that this fascinating culture has to offer. You’ll have experienced guides there with you every step of the way.", card: "card6", text: "Enjoy exploring ancient cities and attractions on your own time as well as engaging in sightseeing tours and activities. Plus, our specially crafted Egypt tour packages fit into all budgets so you can truly experience this majestic country without breaking the bank!" },
//               { name: "Family Packages",  img: Family, title: "Family  Tours  Packages ", description: "If you’re looking for an exciting family holiday, there’s no better way to experience Egypt than by taking one of our Private family Egypt Tour Packages. Our itinerary also includes special activities for children", card: "card7", text: "such as camel rides and visits to archaeological sites. Enjoy a hassle-free time exploring this amazing country with your loved ones at an unbeatable price." },
//               { name: "Luxury Packages",  img: Luxury, title: "Luxury   Tours  Packages", description: "If you’re looking for a great way to explore the beauty of Hurghada, Egypt, then one of our Hurghada Egypt Day Tours is just what you need. With adventurous activities like.. ", card: "card9", text: "Whether you want to stay in the Capital or travel to other cities, we got your back!", text: "beach BBQs and snorkeling and boat trips in crystal-clear waters, you’ll never forget your day on the Red Sea. Start your Egyptian adventure today and make unforgettable memories that last a lifetime! With our Hurghada Egypt Day tours." },
//               { name: "christmas Packages  ", img: christmas, title: "christmas Tours  Packages", description: "Christmas is the perfect time to explore Egypt and immerse yourself in its culture. Our Christmas Private Egypt Tour Packages provide a unique experience that allows you to truly get the most out of your holiday travels. ", card: "card8", text: "Every night, you can rest easy knowing that our experienced guides and staff have prepared an itinerary filled with cultural learning opportunities, five-star accommodation, and delicious authentic Egyptian cuisine. All these amazing components make our Christmas Private Egypt Tour Packages truly one of a kind – so don’t miss out!" },

//             ].map((item, index) => (
//               <div key={index} className="col-md-3 mb-2">
//                 <Card className='shadow h-100 '>
//                   <div className="position-relative">   <Card.Img variant="top" src={item.img} className=' p-2' />
//                     <div className=" text-white  card_imgLayer  text-center text-center d-flex justify-content-center align-items-center">

//                       <h5 className=" text-white fw-bold  ">{item.title}</h5>

//                     </div></div>
//                   <Card.Title className="text-center fw-bold secondary-color-text  fs-5 mt-2 ">
//                     {item.name} </Card.Title>

//                   <Card.Body>
//                     <Card.Text className="text-muted">{item.description}</Card.Text>
//                     {showMoreData[item.card] && (
//                       <p className="text-muted">{item.text}</p>
//                     )}
//                     <Link className="text_read" onClick={() => showMoreTour(item.card)}>
//                       {showMoreData[item.card] ? 'Read Less' : 'Read More ...'}
//                     </Link>
//                   </Card.Body>
//                 </Card>
//               </div>
//             ))}

           
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
