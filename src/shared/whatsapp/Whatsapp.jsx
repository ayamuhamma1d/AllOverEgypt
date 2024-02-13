import React from "react";
import whatsapp from "./../../assets/img/real estate1.jpeg";

const Whatsapp = () => {
  return (
    <div>
      {" "}
      <a
        href="https://wa.me/+201155430742?text=Hello%20Ask%20any%20Question%20%3F%3F"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="position-relative">
          <img className="whatsapp" src={whatsapp} alt="WhatsApp" />
          <div className="whatsapp-text">WhatsApp Us</div>
        </div>
      </a>
    </div>
  );
};

export default Whatsapp;
