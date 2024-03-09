import React from 'react'
import { MdOutlineDone } from "react-icons/md";

const WhyBook = () => {
  return (
    <div className='p-5'>      
    
    <h2 className="mb-4 text__color fw-bold text-center">Why Book With Us</h2>
    <p>
      Booking with Allover Egypt Tours is the perfect way to ensure that
      your journey through the land of Ancient Wonders is full of joy and
      excitement. With our experienced tour guides, you can rest assured
      knowing you are in the most capable hands. With over 15 years of
      experience leading tours throughout the nation, we know all the
      secret spots to explore and provide expert advice on how to make the
      most out of your Egyptian experience. Not only do we offer
      well-crafted day tours and multi-day packages, but we also customize
      packages that fit your needs and budget perfectly. Additionally, our
      friendly team always goes above and beyond to provide excellent
      customer service during every stage of your trip so you can enjoy a
      worry-free vacation!
    </p>

    <div className="row align-items-center g-4 mt-4 ">
      <div className="col-md-4 ">
        <div className="d-flex align-items-center ">
          <div className="done__icon rounded-circle me-3 d-flex justify-content-center align-items-center text-white">
            <MdOutlineDone />
          </div>
          <p className="mb-0">24/7 Customer Service</p>
        </div>
      </div>
      <div className="col-md-4 ">
        <div className="d-flex align-items-center ">
          <div className="done__icon rounded-circle me-3 d-flex justify-content-center align-items-center text-white">
            <MdOutlineDone />
          </div>
          <p className="mb-0">100% Tailor-Made Tour</p>
        </div>
      </div>
      <div className="col-md-4 ">
        <div className="d-flex align-items-center  ">
          <div className="done__icon rounded-circle me-3 d-flex justify-content-center align-items-center text-white">
            <MdOutlineDone />
          </div>
          <p className="mb-0">Best Price Guaranteed</p>
        </div>
      </div>
      <div className="col-md-4 ">
        <div className="d-flex align-items-center  ">
          <div className="done__icon rounded-circle me-3 d-flex justify-content-center align-items-center text-white">
            <MdOutlineDone />
          </div>
          <p className="mb-0">Local Expert</p>
        </div>
      </div>
      <div className="col-md-4 ">
        <div className="d-flex align-items-center  ">
          <div className="done__icon rounded-circle me-3 d-flex justify-content-center align-items-center text-white">
            <MdOutlineDone />
          </div>
          <p className="mb-0">Private Guided Tours</p>
        </div>
      </div>
      <div className="col-md-4 ">
        <div className="d-flex align-items-center  ">
          <div className="done__icon rounded-circle me-3 d-flex justify-content-center align-items-center text-white text-center">
            <MdOutlineDone />
          </div>
          <p className="mb-0">Partial Booking Payment</p>
        </div>
      </div>
    </div>

</div>
  )
}

export default WhyBook