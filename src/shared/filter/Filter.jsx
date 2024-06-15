import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { FaRegClock } from "react-icons/fa6";
import { db } from "./../../components/config/firebase";
import { collection, getDocs } from "firebase/firestore";
import Nav from 'react-bootstrap/Nav';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import { MdKeyboardArrowDown } from "react-icons/md";
import PaginationFilter from "../../shared/pagination/PaginationFilter";
import { MdKeyboardArrowUp } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import './filterTrip.css';

const Filter = () => {
    const [tripData, setTripData] = useState([]);
    const [selectedType, setSelectedType] = useState(null);
    const [selectedDestinations, setSelectedDestinations] = useState([]);
    const [selectedDuration, setSelectedDuration] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalTrips, setTotalTrips] = useState(0);
    const [showMoreDestinations, setShowMoreDestinations] = useState(false);

    const itemsPerPage = 10;
    const params = new URLSearchParams(useLocation().search);
    const selectedItem = params.get('packages');
    const packages = params.get('type');
    const destination = params.get('destination');
    const duration = params.get('duration');

    useEffect(() => {
        window.scrollTo(0, 0);
        setSelectedType(selectedItem);
    }, [selectedItem, currentPage]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "trips"));
                const trips = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

                let filteredTrips = trips;

                if (selectedType) {
                    if (selectedType === "pk") {
                        filteredTrips = filteredTrips.filter(trip => trip.offer);
                    } else {
                        filteredTrips = filteredTrips.filter(trip => trip.type.includes(selectedType));
                    }
                }

                if (packages) {
                    filteredTrips = filteredTrips.filter(trip => trip.type.includes(packages) || trip.destination.includes(packages) || trip.duration.includes(packages));
                    setSelectedType(packages);

                }

                if (destination) {
                    filteredTrips = filteredTrips.filter(trip => trip.destination.includes(destination));
                    setSelectedDestinations([destination]);
                }

                if (duration) {
                    filteredTrips = filteredTrips.filter(trip => trip.destination.includes(duration));
                }

                if (selectedDestinations.length > 0) {
                    filteredTrips = filteredTrips.filter(trip =>
                        selectedDestinations.some(dest => trip.destination.includes(dest))
                    );
                }

                if (selectedDuration > 0) {
                    filteredTrips = filteredTrips.filter(trip => parseInt(trip.duration) === selectedDuration);
                }

                filteredTrips = filteredTrips.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));

                const startIndex = (currentPage - 1) * itemsPerPage;
                const paginatedTrips = filteredTrips.slice(startIndex, startIndex + itemsPerPage);

                setTripData(paginatedTrips);
                setTotalTrips(filteredTrips.length);

            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, [selectedType, selectedDestinations, packages, selectedDuration, currentPage]);

    const handleTypeClick = type => {
        setSelectedType(type);
        setCurrentPage(1);
        setSelectedDestinations([]);
    };

    const handleDestinationClick = destination => {
        setSelectedDestinations(prevDestinations =>
            prevDestinations.includes(destination)
                ? prevDestinations.filter(d => d !== destination)
                : [...prevDestinations, destination]
        );
        setCurrentPage(1);
    };

    const handleDurationChange = e => {
        setSelectedDuration(parseInt(e.target.value));
        setCurrentPage(1);
    };

    const handlePageChange = page => {
        setCurrentPage(page);
    };

    const handleShowMoreDestinations = () => {
        setShowMoreDestinations(!showMoreDestinations);
    };
    return (
        <>
            <main className="page catalog-page bg-dark-subtle" id="filter">
                <section className="clean-block clean-catalog bg-white">
                    <div className="layer w-100 h-100 py-5  position-relative bg-white">
                        <h1 className="my-4 text-black text-center py-5 not-found-title ">Allover Egypt Tours</h1>
                        <div className="container tour-package-img shadow">
                            <Nav fill variant="tabs" defaultActiveKey={selectedType} onSelect={handleTypeClick}>
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
                                            slidesPerView: 3,
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
                                            <Nav.Link eventKey="StandardFourPackages" defaultValue="StandardFourPackages" className='text-black' ><Link to={{
                                                pathname: '/filter',
                                                search: `?packages=StandardFourPackages`
                                            }}>Egypt Packages Tours</Link></Nav.Link>
                                        </Nav.Item>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Nav.Item>
                                            <Nav.Link eventKey="dayTours" className='text-black'>
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
                                    <div className="item1">
                                        <div className=" d-md-block">
                                            <div className="filters">
                                                <div className="filter-item">
                                                    <h5 className='my-3 fw-bold'>Where to go</h5>
                                                    <div className="form-check">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                            id="formCheck-destination-1"
                                                            onChange={() => handleDestinationClick("cairo")}
                                                            checked={selectedType !== "StandardFourPackage" && selectedDestinations.includes("cairo")}
                                                        />
                                                        <label className="form-check-label text-muted" htmlFor="formCheck-destination-1">Cairo</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                            id="formCheck-destination-2"
                                                            onChange={() => handleDestinationClick("giza")}
                                                            checked={selectedType !== "StandardFourPackage" && selectedDestinations.includes("giza")}
                                                        />
                                                        <label className="form-check-label text-muted" htmlFor="formCheck-destination-2">Giza</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                            id="formCheck-destination-3"
                                                            onChange={() => handleDestinationClick("alexandria")}
                                                            checked={selectedType !== "StandardFourPackage" && selectedDestinations.includes("alexandria")}
                                                        />
                                                        <label className="form-check-label text-muted" htmlFor="formCheck-destination-3">Alexandria</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                            id="formCheck-destination-4"
                                                            onChange={() => handleDestinationClick("luxor")}
                                                            checked={selectedType !== "StandardFourPackages" && selectedDestinations.includes("luxor")}
                                                        />
                                                        <label className="form-check-label text-muted" htmlFor="formCheck-destination-4">Luxor</label>
                                                    </div>
                                                    {showMoreDestinations && (
                                                        <div>
                                                            <div className="form-check">
                                                                <input
                                                                    type="checkbox"
                                                                    className="form-check-input"
                                                                    id="formCheck-destination-5"
                                                                    onChange={() => handleDestinationClick("aswan")}
                                                                    checked={selectedType !== "StandardFourPackages" && selectedDestinations.includes("aswan")}
                                                                />
                                                                <label className="form-check-label text-muted" htmlFor="formCheck-destination-5">Aswan</label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input
                                                                    type="checkbox"
                                                                    className="form-check-input"
                                                                    id="formCheck-destination-6"
                                                                    onChange={() => handleDestinationClick("sharm El Sheikh")}
                                                                    checked={selectedType !== "StandardFourPackages" && selectedDestinations.includes("sharm El Sheikh")}
                                                                />
                                                                <label className="form-check-label text-muted" htmlFor="formCheck-destination-6">Sharm El Sheikh</label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input
                                                                    type="checkbox"
                                                                    className="form-check-input"
                                                                    id="formCheck-destination-7"
                                                                    onChange={() => handleDestinationClick("dahab")}
                                                                    checked={selectedType !== "StandardFourPackages" && selectedDestinations.includes("dahab")}
                                                                />
                                                                <label className="form-check-label text-muted" htmlFor="formCheck-destination-7">Dahab</label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input
                                                                    type="checkbox"
                                                                    className="form-check-input"
                                                                    id="formCheck-destination-8"
                                                                    onChange={() => handleDestinationClick("hurghada")}
                                                                    checked={selectedType !== "StandardFourPackages" && selectedDestinations.includes("hurghada")}
                                                                />
                                                                <label className="form-check-label text-muted" htmlFor="formCheck-destination-8">Hurghada</label>
                                                            </div>
                                                        </div>
                                                    )}
                                                    <button
                                                        className="btn btn-link text-decoration-none mx-0 p-0 mt-2 secondary-color-text text-capitalize"
                                                        onClick={handleShowMoreDestinations}
                                                    >
                                                        {showMoreDestinations ? (
                                                            <>
                                                                Show Less <MdKeyboardArrowUp />
                                                            </>
                                                        ) : (
                                                            <>
                                                                Show all <MdKeyboardArrowDown />
                                                            </>
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-md-block">
                                            <div className="filters mt-5">

                                                {selectedType !== "dayTours" && (
                                                    <div className="filter-item">
                                                        <h5 className='my-3 fw-bold '>Duration</h5>
                                                        <input
                                                            type="range"
                                                            min="0"
                                                            max="12"
                                                            value={selectedDuration}
                                                            onChange={handleDurationChange}
                                                            className="progress-bar mb-2 w-75 "
                                                        />
                                                        <ProgressBar className="w-75 " now={(selectedDuration) * selectedDuration} label={`${selectedDuration <= 0 ? "0 Day" : selectedDuration} Days`} />
                                                    </div>
                                                )}

                                            </div>
                                        </div>

                                    </div>
                                    <div className="item2 mx-auto  ">
                                        <div className="products">

                                            {tripData.map((trip) => (
                                                <div key={trip.id} className="d-flex justify-content-between mb-3">
                                                    <div className="trip-imgs">
                                                        <Link to={`/trips/${trip.id}`}>
                                                            <img src={trip.image} alt={trip.tripTitle} className="w-100 trip__img" />
                                                        </Link>
                                                    </div>
                                                    <div className="trip-content">
                                                        <Link to={`/trips/${trip.id}`}>
                                                            <h5 className="text-start fw-bold lh-base  text-dark mt-3 ">
                                                                {trip.tripTitle}
                                                            </h5>
                                                        </Link>
                                                        <div className="row mb-3">
                                                            <div className="col-md-7">
                                                                <div className="day text-start d-flex align-items-center mb-2">
                                                                    <IoLocationOutline className="me-2  secondary-color-text" />
                                                                    <span>{trip.destination.join(' , ')}</span>
                                                                </div>
                                                                <div className="day  text-start d-flex align-items-center ">
                                                                    <FaRegClock className="me-2 trip-icon secondary-color-text" />{" "}
                                                                    <span className="">{trip.type.includes("dayTours") ? `${trip.duration} Hours` : `${trip.duration} Days  - ${trip.duration - 1} Nights`}</span>
                                                                </div>


                                                            </div>
                                                            <div className="col-md-5">
                                                                {trip && trip.pricePackages && trip.pricePackages.length > 0 && (
                                                                    <>
                                                                        {trip.offer ? (
                                                                            <h5 className="text-slate-900 fw-bold mb-0 text-start price d-flex">
                                                                                <span className="text-decoration-line-through price-package d-flex align-items-center me-2 ">
                                                                                    ${Math.min(
                                                                                        ...trip.pricePackages.flatMap(pricePackage =>
                                                                                            pricePackage.options.map(option => option.price)
                                                                                        )
                                                                                    )}

                                                                                </span>
                                                                                <span className="text-slate-900 fw-bolder mb-0 text-start  text-danger ">
                                                                                    ${(Math.min(
                                                                                        ...trip.pricePackages.flatMap(pricePackage =>
                                                                                            pricePackage.options.map(option => option.price)
                                                                                        )
                                                                                    ) * 0.9).toFixed(0)}

                                                                                </span>
                                                                            </h5>

                                                                        ) : <h5 className="text-slate-900 fw-bold mb-0 text-start price">
                                                                            <span className="text-lg ">$ </span>
                                                                            {Math.min(
                                                                                ...trip.pricePackages.flatMap(pricePackage =>
                                                                                    pricePackage.options.map(option => option.price)
                                                                                )
                                                                            )}
                                                                        </h5>}

                                                                    </>
                                                                )}
                                                            </div>

                                                        </div>
                                                        <p className="text-start text-black trip-overview w-75">
                                                            {trip.overview.split("").splice(0, 300).join('')}
                                                        </p>


                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <PaginationFilter
                                            totalTrips={totalTrips}
                                            currentPage={currentPage}
                                            onPageChange={handlePageChange}
                                        />
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
