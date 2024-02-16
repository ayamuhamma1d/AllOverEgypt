import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa6";
import { db } from "./../../components/config/firebase";
import { collection, getDocs } from "firebase/firestore";
import "./trip.css";

const Trip = () => {
  const [tripData, setTripData] = useState([]);
  const [lowestPrice, setLowestPrice] = useState(null);

  useEffect(() => {
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
          <Link to="">
            <img src={trip.image} alt={trip.tripTitle} className="w-100" />
          </Link>
          <h6 className="text-start w-100 fw-bold m-3 ms-0">
            {trip.tripTitle}
          </h6>
          <p className="text-start text-muted">
            {trip.overview.split(" ").slice(0, 15).join(" ")}
          </p>
          <hr />
          <div className="row">
            <div className="col-md-8">
              <div className="day text-start d-flex align-items-center">
                <FaRegClock className="  me-1 clock" />
                <span>{trip.duration} Days</span>
              </div>
            </div>
            <div className="col-md-4">
              <h5 className="text-slate-900 text-start fw-bold">
                <span className="text-lg  clock">$ </span>
             
              </h5>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Trip;
