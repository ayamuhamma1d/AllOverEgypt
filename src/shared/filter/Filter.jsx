import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { FaRegClock } from "react-icons/fa6";
import { db } from "./../../components/config/firebase";
import { collection, getDocs } from "firebase/firestore";
import Nav from 'react-bootstrap/Nav';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';


import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import './filterTrip.css';

const Filter = () => {
    const [tripData, setTripData] = useState([]);
    const [selectedType, setSelectedType] = useState(null);
    const [selectedDestination, setSelectedDestination] = useState(null);
    const params = new URLSearchParams(useLocation().search);
    const selectedItem = params.get('packages');
    const packages = params.get('type');
    const destination = params.get('destination');
    const duration = params.get('duration');
    const [selectedDuration, setSelectedDuration] = useState(0);
    const [maxDuration, setMaxDuration] = useState(12);
    useEffect(() => {
        window.scrollTo(0, 0);
        setSelectedType(selectedItem);
    }, [selectedItem]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "trips"));
                const trips = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));

                let filteredTrips = trips;

                if (selectedType) {
                    if (selectedType === "pk") {
                        filteredTrips = filteredTrips.filter((trip) => trip.offer);
                    } else {
                        filteredTrips = filteredTrips.filter((trip) => trip.type.includes(selectedType));
                    }
                }
                if (packages) {
                    filteredTrips = filteredTrips.filter((trip) => trip.type.includes(packages) || trip.destination.includes(packages) || trip.duration.includes(packages));
                }
                if (destination) {
                    filteredTrips = filteredTrips.filter((trip) => trip.destination.includes(destination));
                }
                if (duration) {
                    filteredTrips = filteredTrips.filter((trip) => trip.destination.includes(duration));
                }
                if (selectedDestination) {
                    filteredTrips = filteredTrips.filter((trip) => trip.destination.includes(selectedDestination));
                }

                if (selectedDuration > 0) {
                    filteredTrips = filteredTrips.filter(trip => trip.duration == selectedDuration);
                }
                filteredTrips = filteredTrips.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
                setTripData(filteredTrips);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, [selectedType, selectedDestination, packages, selectedDuration]);


    const handleTypeClick = (type) => {
        setSelectedType(type);

    };

    const handleDestinationClick = (destination) => {
        setSelectedDestination(prevDestination => prevDestination === destination ? null : destination);
    };
    const handleDurationChange = (e) => {
        setSelectedDuration(parseInt(e.target.value));

    };
    const handleTypeClicked = (type) => {

        setSelectedType(type === "All" ? null : type);
        if (type === "All") {
            setSelectedDestination(null);

            const currentSearchParams = new URLSearchParams(window.location.search);
            currentSearchParams.delete("destination");
            window.history.replaceState({}, '', `${window.location.pathname}?${currentSearchParams}`);
        }

    };

    return (
        <>
            <main className="page catalog-page bg-dark-subtle" id="filter">
                <section className="clean-block clean-catalog banner-img banner ">
                    <div className="layer w-100 h-100 py-5  position-relative">
                        <h1 className="my-4 text-white text-center py-5">Allover Egypt Tours</h1>
                        <div className="container tour-package-img">
                            <Nav fill variant="tabs" defaultActiveKey={`/${selectedType}`} onSelect={handleTypeClick}>

                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={0}
                                    variant="tabs"
                                    className="bg-transparent p-0 rounded-3 m-0 w-m-75 m-m-auto"
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 3,
                                            spaceBetween: 2,
                                        },
                                        768: {
                                            slidesPerView:3,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                        },
                                        1200: {
                                            slidesPerView: 3,
                                        },
                                    }}
                                >
                                    <SwiperSlide>
                                        <Nav.Item>
                                            <Nav.Link eventKey="StandardFourPackages" className='text-black' ><Link to={{
                                                pathname: '/filter',
                                                search: `?packages=StandardFourPackages`
                                            }}>Egypt Packages Tours</Link></Nav.Link>
                                        </Nav.Item>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Nav.Item>
                                            <Nav.Link eventKey="DayTour" className='text-black'>
                                                <Link to={{
                                                    pathname: '/filter',
                                                    search: `?packages=dayTours`
                                                }}>Egypt Day Tours</Link>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Nav.Item>
                                            <Nav.Link eventKey="nileCruise" className='text-black'><Link to={{
                                                pathname: '/filter',
                                                search: `?packages=nileCruise`
                                            }}>Nile Cruise</Link></Nav.Link>
                                        </Nav.Item>
                                    </SwiperSlide>
                                </Swiper>


                            </Nav>
                            <div className="content mt-5 p-3">
                                <div className=" d-flex justify-content-between ">
                                    <div className="">
                                        <div className=" d-md-block">
                                            <div className="filters">
                                                <div className="filter-item">
                                                    <h3 className='mb-3 secondary-color-text'>Type</h3>
                                                    <div className="form-check">
                                                        <input type="radio" className="form-check-input" id="formCheck-type-all" onChange={() => handleTypeClicked("All")} checked={!selectedType} />
                                                        <label className="form-check-label" htmlFor="formCheck-type-all">All</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input type="radio" className="form-check-input" id="formCheck-type-offers" onChange={() => handleTypeClicked("pk")} checked={selectedType === "pk"} />
                                                        <label className="form-check-label" htmlFor="formCheck-type-offers">Offers</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" d-md-block">
                                            <div className="filters">
                                                <div className="filter-item">
                                                    <h3 className='my-3 secondary-color-text'>Destination</h3>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="formCheck-destination-1" onChange={() => handleDestinationClick("cairo")} />
                                                        <label className="form-check-label" htmlFor="formCheck-destination-1" onChange={() => handleDestinationClick("cairo")}>Cairo</label>
                                                    </div>    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="formCheck-destination-2" onChange={() => handleDestinationClick("giza")} />
                                                        <label className="form-check-label" htmlFor="formCheck-destination-2" onChange={() => handleDestinationClick("giza")}>Giza</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="formCheck-destination-3" onChange={() => handleDestinationClick("alexandria")} />
                                                        <label className="form-check-label" htmlFor="formCheck-destination-3" onChange={() => handleDestinationClick("alexandria")}>Alexandria</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="formCheck-destination-4" onChange={() => handleDestinationClick("luxor")} />
                                                        <label className="form-check-label" htmlFor="formCheck-destination-4" onChange={() => handleDestinationClick("luxor")}>Luxor</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="formCheck-destination-5" onChange={() => handleDestinationClick("aswan")} />
                                                        <label className="form-check-label" htmlFor="formCheck-destination-5" onChange={() => handleDestinationClick("aswan")}>Aswan</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="formCheck-destination-6" onChange={() => handleDestinationClick("sharm El Sheikh")} />
                                                        <label className="form-check-label" htmlFor="formCheck-destination-6" onChange={() => handleDestinationClick("sharm El Sheikh")}>Sharm El Sheikh</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="formCheck-destination-7" onChange={() => handleDestinationClick("dahab")} />
                                                        <label className="form-check-label" htmlFor="formCheck-destination-7" onChange={() => handleDestinationClick("dahab")}>Dahab</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="formCheck-destination-8" onChange={() => handleDestinationClick("hurghada")} />
                                                        <label className="form-check-label" htmlFor="formCheck-destination-8" onChange={() => handleDestinationClick("hurghada")}>Hurghada</label>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                        <div className="d-md-block">
                                            <div className="filters">

                                                <div className="filter-item">
                                                    <h3 className='my-3 secondary-color-text'>Duration</h3>
                                                    <input
                                                        type="range"
                                                        min="0"
                                                        max="12"
                                                        value={selectedDuration}
                                                        onChange={handleDurationChange}
                                                        className="progress-bar mb-2"
                                                    />
                                                    <ProgressBar now={(selectedDuration) * selectedDuration} label={`${selectedDuration <= 0 ? "0 Day" : selectedDuration} Days`} />
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="">
                                        <div className="products">
                                            <div className="row g-4 flex-wrap justify-center">
                                                {tripData.map((trip) => (
                                                    <div key={trip.id} className="col-md-6 col-lg-4 col-xl-3 mb-5">
                                                        <Link to={`/trips/${trip.id}`}>
                                                            <img src={trip.image} alt={trip.tripTitle} className="w-100 trip__img" />
                                                        </Link>
                                                        <Link to={`/trips/${trip.id}`}>
                                                            <h6 className="text-start fw-bold lh-base fst-italic text__color trip-overview-title">
                                                                {trip.tripTitle}
                                                            </h6>
                                                        </Link>
                                                        <p className="text-start text-muted trip-overview">
                                                            {trip.overview.split(" ").slice(0, 12).join(" ")}
                                                        </p>
                                                        <hr className="text__color" />
                                                        <div className="row">
                                                            <div className="col-md-7">
                                                                <div className="day text-start d-flex align-items-center mb-3">
                                                                    <FaRegClock className="me-2 text-beige fs-6" />{" "}
                                                                    <span className="fs-6">{trip.type.includes("dayTours")?`${trip.duration} Hours`:`${trip.duration} Days`}</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-5">
                                                                {trip && trip.pricePackages && trip.pricePackages.length > 0 && (
                                                                    <>
                                                                        <h5 className="text-slate-900 fw-bold mb-0 text-start price">
                                                                            <span className="text-lg text-beige ">$ </span>
                                                                            {
                                                                                Math.min(
                                                                                    ...trip.pricePackages.flatMap((pricePackage) =>
                                                                                        pricePackage.options.map((option) => option.price)
                                                                                    )
                                                                                )
                                                                            }
                                                                        </h5>
                                                                    </>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </main >
        </>
    );
}

export default Filter;
