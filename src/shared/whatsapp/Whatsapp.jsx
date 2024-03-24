import React from "react";
import whatsapp from "./../../assets/img/whatsapp(2).png";

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
        </div>
      </a>
    </div>
  );
};

export default Whatsapp;
