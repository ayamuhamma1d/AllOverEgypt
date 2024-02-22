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
const Trip = () => {
    const { id } = useParams();
    const [tripData, setTripData] = useState({});
    const [activeTab, setActiveTab] = useState("overview");
    const countryOptions = [{ value: 'us', label: 'United States' }];
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [countryCode, setCountryCode] = useState('');

    useEffect(() => {
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
        <Container className="pt-4">
            <div className="links d-flex align-content-center align-items-center offset-md-1 mb-4 flex-wrap">
                <Link to="/">Home</Link>
                <IoMdArrowDropright className="mx-2" />
                <Link to="/about">Destination</Link>
                {tripData && tripData.destination && Array.isArray(tripData.destination) && (
                    tripData.destination.map((des, index) => (
                        <div key={index}>
                            <IoMdArrowDropright className="mx-2" />
                            <Link to="/about">{des}</Link>
                        </div>
                    ))
                )}
                <IoMdArrowDropright className="mx-2" />
                <Link to="/about">{tripData && tripData.tripTitle}</Link>
            </div>
            <div >
                <div className="row  ">
                    <div className="offset-md-1 col-md-7">
                        <div className="header">
                            <div className="row align-content-center  justify-content-center mb-5">
                                <figure>
                                    <img className="w-100 " src={tripData.image} alt="" />
                                </figure>
                                <div className="row align-items-center lh-1">
                                    <div className="col-md-10">
                                        <h5 className=" fw-bold">{tripData.tripTitle} </h5>
                                    </div>
                                    <div className="col-md-2 ">
                                        <div className="days mt-2  justify-content-center  ">
                                            <div className="number__day shadow-lg    d-flex justify-content-center w-50 py-1">
                                                <h4 className="fw-bold">{tripData.duration}</h4>
                                            </div>
                                            <div className="bg-white shadow-lg d-flex justify-content-center fw-bold w-50 py-1 day rounded-bottom-1">
                                                {" "}
                                                Days{" "}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="bg-white shadow-lg p-5 ">
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="period mb-1">From</p>
                                    {tripData && tripData.pricePackages && tripData.pricePackages.length > 0 && (
                                        <>
                                            <h4 className="fw-bold">
                                                <span className="text-lg text-beige ">$ </span>  {
                                                    Math.max(
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
                                            <FaCircleQuestion className="text__color  me-2" />
                                        </div>
                                    </div>
                                    <div className="col-md-12 mt-3 ">
                                        <div className="d-flex  align-items-center text-fees">
                                            <MdOutlineDone className="secondary-color-text  me-2" />
                                            <p className="mb-0 me-2">
                                                {" "}
                                                Professional Local Guide
                                            </p>{" "}
                                            <FaCircleQuestion className="text__color  me-2" />
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
                                            <FaCircleQuestion className="text__color  me-2" />
                                        </div>
                                    </div>
                                    <button className="check__btn py-3">inquire now</button>
                                    <p className="text-fees mt-4">
                                        {" "}
                                        Need help with booking?{" "}
                                        <span className="ms-2 text__color">
                                            {" "}
                                            Send Us A Message{" "}
                                        </span>{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="tabs position-sticky py-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-around border-top py-3 border-bottom">
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
                                className={`text-center ${activeTab === "accommodation" ? "active" : ""
                                    }`}
                            >
                                <p className="mb-0">
                                    <TiHome className="secondary-color-text" />
                                </p>
                                <a href="#accommodation"
                                    onClick={() => handleTabClick("accommodation")}
                                    className="text-center pb-3  "
                                >
                                    Accommodation
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
                <div className="offset-1 col-md-9 py-3 tabs__tab " >
                    <h3 className="border__green my-4 fw-bold " id="overview"><span className="ms-3 ">Overview</span></h3>
                    <p className="lh-lg mb-5 text-muted">{tripData.overview}</p>
                    <div className="highlights mb-5">
                        <h5 className="fw-bold secondary-color-text">Highlights</h5>
                    </div>
                    {tripData && tripData.highlights && tripData.highlights.map((highlight, index) => (
                        <div key={index}>
                            <div className="col-md-12 mt-3">
                                <div className="d-flex align-items-center text-fees">
                                    <MdOutlineDone className="text__color me-2" />
                                    <p className="mb-0 me-2">{highlight}</p>{" "}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className=" itinerary my-5" id="itinerary">
                        <h3 className="border__green my-4 fw-bold "><span className="ms-3 ">Itinerary</span></h3>
                        {tripData && tripData.itinerary && tripData.itinerary.map((itinerary, index) => (
                            <div key={index}>
                                <div className="itinerary__cards">
                                    <div className="itinerary__content shadow-2 py-3 px-5  mb-4 rounded-2">
                                        <h5 className="mb-3">
                                            <span className="secondary-color-text me-2 itinerary__content__day">  Day {index + 1}:</span>
                                            {itinerary.title}
                                        </h5>
                                        <p className="lh-lg text-muted fs-6">{itinerary.description}.</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="Accommodation my-5" id="accommodation">
                            <h3 className="border__green my-4 fw-bold mb-5 "><span className="ms-3 ">Choose your Accommodation plan</span></h3>
                            <Table striped bordered hover className="mb-5">
                                <thead >
                                    <tr>

                                        <th className="fw-bold ">Package Type</th>
                                        <th className="fw-bold">Plan Code</th>

                                    </tr>
                                </thead>
                                <tbody >
                                    <tr>

                                        <td>Standard Package</td>
                                        <td>Plan A</td>

                                    </tr>
                                    <tr>

                                        <td>Luxury Package</td>
                                        <td>Plan B</td>

                                    </tr>
                                    <tr>

                                        <td>Diamond Package </td>
                                        <td>Plan C</td>

                                    </tr>
                                    <tr>

                                        <td> Standard Package for Easter or Christmas </td>
                                        <td>Plan A+</td>

                                    </tr>
                                    <tr>

                                        <td>Luxury Package for Easter or Christmas </td>
                                        <td>Plan B+</td>

                                    </tr>
                                    <tr>
                                        <td>Diamond Package on Easter or Christmas</td>
                                        <td>Plan C+</td>
                                    </tr>
                                </tbody>
                            </Table>
                            {
                                tripData && tripData.type && tripData.type.map((type, index) => (
                                    <>
                                        <ul>
                                            <li className="mb-4 fw-bold secondary-color-text">
                                                Accommodation Plan ({index + 1}) :     <span className="text-black ms-2">  {type}</span>
                                            </li>
                                            <p className="mb-5 text-muted">Nile cruises: MS Emilio, MS Radamis, MS Princess, MS Sara</p>

                                        </ul>
                                    </>
                                ))
                            }
                        </div>
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
                                                <IoCloseCircle className="me-2 fs-5 cost__excluded opacity-45 mb-3" /> {cost}

                                            </div>
                                        </>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </section>
            <section >
                <div className="p-5  bg__form trip__form m-auto  mb-5">
                    <h4 className="mb-4 text__color mb-5 opacity-100 text-black fw-bold">
                        You can send your enquiry via the form below.{" "}
                    </h4>
                    <div className="row justify-content-center align-items-center">
                        <Form>
                            <Form.Label className="mb-5  "> Trip name: <span className="ms-2 text-black"> 5 Days – 4 Nights Nile Cruise From Cairo by flight – Solo Traveler	</span> </Form.Label>
                            <Form.Group className="mb-4" controlId="formBasicName">
                                <Form.Label className="form__label"> Your name: *</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" className="py-3" />

                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Label className="form__label"> Your email: * </Form.Label>
                                <Form.Control type="email" placeholder="Enter email" className="py-3" />

                            </Form.Group>
                            <div className="row mb-4">
                                <div className="col-md-6">  <Form.Group className="mb-3" controlId="formBasicCountry">
                                    <Form.Label className="form__label ">Country </Form.Label>
                                    <Select

                                        value={selectedCountry}
                                        onChange={handleCountryChange}
                                        options={SelectCountryList().getData().map(({ value, label }) => ({
                                            value,
                                            label: `${label} (${value})`,
                                        }))}
                                        placeholder="Select Country"
                                    />
                                </Form.Group></div>
                                <div className="col-md-6">  <Form.Group controlId="formBasicNumber">
                                    <Form.Label className="form__label "> Contact number: *  </Form.Label>
                                    <Form.Control type="number" placeholder="Enter number" />
                                </Form.Group>
                                </div>
                                <div className="col-md-6 ">
                                    <Form.Group className="mb-3" controlId="formBasicChildren">
                                        <Form.Label className="form__label "> No. of Adults *  </Form.Label>

                                        <Form.Control type="number" placeholder="Enter your  Number of Adults * " className='py-3' />

                                    </Form.Group>
                                </div>
                                <div className="col-md-6 ">
                                    <Form.Group className="mb-3" controlId="formBasicChildren">
                                        <Form.Label className="form__label ">No. of Children  </Form.Label>

                                        <Form.Control type="number" placeholder="Enter your Number of Children" className='py-3' />

                                    </Form.Group>
                                </div>
                            </div>
                            <Form.Group className="mb-4" controlId="formBasicName">
                                <Form.Label className="form__label">Enquiry Subject:</Form.Label>
                                <Form.Control type="text" placeholder="Enquiry Subject" className="py-3" />

                            </Form.Group>
                            <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className="form__label "> Your Message   </Form.Label>
                                <Form.Control as="textarea" rows={8} placeholder='Enter your Message ' />
                            </Form.Group>
                            <Button variant="primary" type="submit" className=' main_Color border-0 rounded-0 py-3 px-5'>
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </section>
            <section className=" pb-5 offset-md-1">
                <h2 className="fw-bold ">Related trips you might interested in</h2>
                <div className="row justify-content-center">
                    <Trips />
                </div>
            </section>



        </Container >
    );
};

export default Trip;
