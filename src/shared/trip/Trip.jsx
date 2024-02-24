import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa6";
import { db } from "./../../components/config/firebase";
import { collection, getDocs } from "firebase/firestore"
import { IoLocationOutline } from "react-icons/io5";
;
import "./trip.css";

const Trip = () => {
  const [tripData, setTripData] = useState([]);
  const [lowestPrice, setLowestPrice] = useState(null);
  const scrollToTop=()=>{
    window.scrollTo(0, 0);

  }
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "trips"));
        const trips = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setTripData(trips);
        const prices = trips.map((trip) => parseFloat(trip.price));
        const minPrice = Math.min(...prices);
        setLowestPrice(minPrice);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="row g-4 flex-wrap justify-center">
      {tripData.map((trip) => (
        <div key={trip.id} className="col-md-3 mb-5">
          <Link to={`/trips/${trip.id}`} onClick={scrollToTop}>
            <img src={trip.image} alt={trip.tripTitle} className="w-100 trip__img" />
          </Link>
          <Link to={`/trips/${trip.id}`} onClick={scrollToTop}>             
            <h6 className="text-start fw-bold lh-base fst-italic text__color">
                  {trip.tripTitle}
                </h6></Link>
          <p className="text-start text-muted">
            {trip.overview.split(" ").slice(0, 12).join(" ")}
          </p>
          <hr className="text__color" />

          <div className="row">
            <div className="col-md-8">

              <div className="day text-start d-flex align-items-center mb-3">
              <FaRegClock className="me-2 text-beige fs-6" />{" "}
                        <span className="fs-6">{trip.duration} Days</span>
              </div>
             
            </div>
            <div className="col-md-4">
              {trip && trip.pricePackages && trip.pricePackages.length > 0 && (
                <>
                  <h5 className="text-slate-900 fw-bold mb-0 text-start">
                    <span className="text-lg text-beige ">$ </span> {
                      Math.min(
                        ...trip.pricePackages.flatMap(pricePackage =>
                          pricePackage.options.map(option => option.price)
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
  );
};

export default Trip;
