import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { MdOutlineDone } from "react-icons/md";
import { Container } from "react-bootstrap";
import { FaCircleQuestion } from "react-icons/fa6";
import Trips from "./../../shared/trip/Trip";
import img1 from "./../../assets/img/real estate4 (1).jpg";
import { MdOutlinePriceChange } from "react-icons/md";
import { GrOverview } from "react-icons/gr";
import { CgSandClock } from "react-icons/cg";
import { TiHome } from "react-icons/ti";
import { db } from './../../components/config/firebase';
import Table from 'react-bootstrap/Table';
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import SelectCountryList from 'react-select-country-list';
import "./../trip/trips.css";
import DataForm from "./../../shared/form/DataForm";
const Trip = () => {
    const { id } = useParams();
    const [tripData, setTripData] = useState({});
    const [activeTab, setActiveTab] = useState("overview");
    const countryOptions = [{ value: 'us', label: 'United States' }];
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [countryCode, setCountryCode] = useState('');
    const [scrolled, setScrolled] = useState(false);

    const [scrollPosition, setScrollPosition] = useState(0);
    const [isScrollingUp, setIsScrollingUp] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.pageYOffset;
            console.log("currentPosition", currentPosition);
            setIsScrollingUp(currentPosition > 896);
            setScrollPosition(currentPosition);
            if(0<currentPosition<840){
                setActiveTab('overview'); 
            }
            if(currentPosition>850){
                setActiveTab('itinerary'); 
            }
            if(currentPosition>1600){
                setActiveTab('cost'); 

            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);
    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            try {
                const tripDocRef = doc(db, "trips", id);
                const tripDocSnapshot = await getDoc(tripDocRef);
                if (tripDocSnapshot.exists()) {
                    const data = tripDocSnapshot.data();
                    console.log("Trip Data:", data);
                    setTripData(data);
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
   
        fetchData();
    }, [id]);

    const handleCountryChange = (value) => {
        setSelectedCountry(value);
        setCountryCode(value?.value || '');
    };

    const handleCountryCodeChange = (event) => {
        setCountryCode(event.target.value);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        console.log(tab);
    
    };
    return (
        <Container className="pt-4 my-5">
            <div className="links offset-lg-1 pt-4 d-flex align-content-center align-items-center  mb-4 flex-wrap">
                <Link to="/">Home</Link>
                <IoMdArrowDropright className="mx-2" />
                <Link to="/filter">Destination</Link>
                <IoMdArrowDropright className="mx-2" />
                {tripData && tripData.destination && (
                    <Link to={{
                        pathname: '/filter',
                        search: `?destination=${tripData.destination[0]}`
                    }}>
                        {tripData.destination[0]}
                    </Link>
                )}
            </div>
            <div >
                <div className="row  ">
                    <div className=" col-lg-7 offset-lg-1">
                        <div className="header">
                            <div className="row   mb-lg-5">
                                <figure>
                                    <img className="w-100 trip-img" src={tripData.image} alt="" />
                                </figure>
                                <div className="row justify-content-between flex-wrap w-100">
                                    <div className=" col-lg-10">  <h1 className=" fw-bold  fs-3  ">{tripData.tripTitle} </h1></div>

                                    <div className="days mt-2 d-none d-lg-inline col-md-2">
                                        <div className="number__day shadow-lg  p-5  d-flex justify-content-center w-50 py-1 m-auto">
                                            <h4 className="fw-bold">{tripData.duration}</h4>
                                        </div>
                                        {tripData.type && (
                                            <div className="bg-white shadow-lg p-5 d-flex justify-content-center fw-bold w-50   m-auto py-1 day rounded-bottom-1">
                                                {tripData.type.includes("dayTours") ? "Hours" : "Days"
                                                }
                                            </div>
                                        )}
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 ">
                        <div className=" shadow-lg p-4   trip-card-info">
                            <div className="row">
                                <div className="col-md-12 ">
                                    <p className="period mb-1">From</p>
                                    {tripData && tripData.pricePackages && tripData.pricePackages.length > 0 && (
                                        <>
                                            <h4 className="fw-bold">
                                                <span className="text-lg text-beige ">$ </span>  {
                                                    Math.min(
                                                        ...tripData.pricePackages.flatMap(pricePackage =>
                                                            pricePackage.options.map(option => option.price)
                                                        )
                                                    )
                                                }
                                                <span className="period ms-1">/ Adult</span>
                                            </h4>
                                        </>
                                    )}

                                </div>

                                <div className="row">
                                    <div className="col-md-12 mt-3 ">
                                        <div className="d-flex  align-items-center text-fees">
                                            <MdOutlineDone className="secondary-color-text  me-2" />
                                            <p className="mb-0 me-2"> Best Price Guaranteed</p>{" "}
                                        </div>
                                    </div>
                                    <div className="col-md-12 mt-3 ">
                                        <div className="d-flex  align-items-center text-fees">
                                            <MdOutlineDone className="secondary-color-text  me-2" />
                                            <p className="mb-0 me-2">
                                                {" "}
                                                Professional Local Guide
                                            </p>{" "}
                                        </div>
                                    </div>
                                    <div className="col-md-12 mt-3 ">
                                        <div className="d-flex  align-items-center text-fees">
                                            <MdOutlineDone className="secondary-color-text  me-2" />
                                            <p className="mb-0 me-2"> No Booking Fees</p>
                                        </div>
                                    </div>
                                    <div className="col-md-12 my-3 mb-4">
                                        <div className="d-flex  align-items-center text-fees">
                                            <MdOutlineDone className="secondary-color-text  me-2" />
                                            <p className="mb-0 me-2"> No Over Price</p>{" "}
                                        </div>
                                    </div>
                                    <button className="check__btn py-3  w-100 m-auto">inquire now</button>
                                    <p className="text-fees mt-4 text-black">
                                        {" "}
                                        Need help with booking?{" "}
                                        <a className="ms-2 text__color" href="#form">
                                            {" "}
                                            Send Us A Message{" "}
                                        </a>{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className={`tabs position-sticky  tour-package-img shadow rounded-5 trip-nav m-auto ${scrollPosition > 600 && scrollPosition < 2500 ? 'sticky ' : ''}`}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-around py-3 border-bottom">
                            <div
                                className={`text-center ${activeTab === "overview" ? "active" : ""
                                    }`}
                            >
                                <p className="mb-0">
                                    <GrOverview className="secondary-color-text" />
                                </p>
                                <a href="#overview"
                                    onClick={() => handleTabClick("overview")}
                                    className="text-center pb-3 "
                                >
                                    Overview
                                </a>
                            </div>
                            <div
                                className={`text-center ${activeTab === "itinerary" ? "active" : ""
                                    }`}
                            >
                                <p className="mb-0">
                                    <CgSandClock className="secondary-color-text" />
                                </p>
                                <a href="#itinerary"
                                    onClick={() => handleTabClick("itinerary")}
                                    className="text-center pb-3 "
                                >
                                    Itinerary
                                </a>
                            </div>

                            <div
                                className={`text-center ${activeTab === "cost" ? "active" : ""
                                    }`}
                            >
                                <div className="mb-0">
                                    <MdOutlinePriceChange className="secondary-color-text" />
                                </div>
                                <a href="#cost"
                                    onClick={() => handleTabClick("cost")}
                                    className="text-center pb-3 "
                                >
                                    Cost
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section>
                <div className="offset-lg-1 col-lg-10 py-3 tabs__tab  " id="overview" >
                    <h3 className="border__green my-4 fw-bold   " ><span className="ms-3 ">Overview</span></h3>
                    <p className="lh-lg mb-5 text-muted bg-white  p-3 itinerary-description rounded-3">{tripData.overview}</p>
                    <div className="highlights mb-5  ">
                        <h5 className="fw-bold secondary-color-text   ">Highlights</h5>
                    </div>
                    {tripData && tripData.highlights && tripData.highlights.map((highlight, index) => (
                        <div key={index}>
                            <div className="col-md-12 mt-3">
                                <div className="d-flex align-items-center text-fees">
                                    {highlight != "" ? <MdOutlineDone className="text__color me-2  trip-card-info shadow-lg rounded-circle" /> : <MdOutlineDone className=" d-none" />}
                                    <p className="mb-0 me-2 text-muted">{highlight}</p>{" "}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className=" itinerary my-5" id="itinerary">
                        <h3 className="border__green my-4 fw-bold "><span className="ms-3 ">Itinerary</span></h3>
                        {tripData && tripData.itinerary && tripData.itinerary.map((itinerary, index) => (
                            <div key={index}>
                                <div className="itinerary__cards">
                                    <div className="itinerary__content shadow-2  mb-4 rounded-2  bg-white  p-3 itinerary-description rounded-3">
                                        <h5 className="mb-3 fw-bold">
                                            <span className="secondary-color-text me-2 itinerary__content__day fw-bolder">  {tripData.type.includes("dayTours") ? '' : ` Day ${index + 1} :`}</span>
                                            {itinerary.title}
                                        </h5>
                                        <p className="lh-lg text-muted itinerary-description">{itinerary.description}.</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="row" id="cost" >
                            <div className="col-md-5 mb-5">
                                <div className="d-flex align-items-center mb-3">
                                    <h5 className="fw-bold"><IoIosCheckmarkCircle className="me-2 fs-5 text__color" />  What's Included</h5>
                                </div>
                                <div className="cost__include">
                                    {tripData && tripData.costInclude && tripData.costInclude.map((cost) => (
                                        <>
                                            <div className="d-flex a mb-3">
                                                <IoIosCheckmarkCircle className="me-2 fs-5 text__color opacity-45 mb-3" /> {cost}

                                            </div>
                                        </>
                                    ))}
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="d-flex   mb-4">
                                    <h5 className="fw-bold">                                    <IoCloseCircle className="me-2 fs-5 cost__excluded " />        What's excluded
                                    </h5>                                </div>
                                <div className="cost__include">
                                    {tripData && tripData.costExclude && tripData.costExclude.map((cost) => (
                                        <>
                                            <div className="d-flex  mb-3">
                                                {cost != "" ? <IoCloseCircle className='me-2 fs-5 cost__excluded opacity-45 mb-3' /> : <IoCloseCircle className='me-2 fs-5 cost__excluded opacity-45 mb-3 d-none' />}
                                                {cost}

                                            </div>
                                        </>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </section>
            <section id="form"> 
                <div className="p-5  bg__form trip__form m-auto  mb-5">
                    <h4 className="mb-4 text__color mb-5 opacity-100 text-black fw-bold">
                        You can send your enquiry via the form below.{" "}
                    </h4>
                    <div className="row justify-content-center align-items-center" >
                        <DataForm tripTitle={tripData.tripTitle}  />

                    </div>
                </div>
            </section>
            <section className=" pb-5 offset-lg-1">
                <h2 className="fw-bold  text-black fs-3">Related trips you might interested in</h2>
                <div className="row justify-content-center">
                    <Trips destination={tripData.destination} />
                </div>
            </section>



        </Container >
    );
};

export default Trip;
