import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black shadow-lg ">
      <MDBFooter bgColor='light' className='text-center text-lg-start text-black mb-0 shadow-lg tour-package-img '>

        <section className='p-5'>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="6" className='mx-auto mb-4 '>
                <h4 className='text-uppercase fw-bold mb-4 secondary-color-text'>
                  <MDBIcon icon="gem" className="" />
                  Allover Egypt
                </h4>
                <p className='text-muted'>
                  "Embark on a Journey with Us: Discover Egypt's Rich Wonders and Hidden Gems!
                  Welcome to our exclusive travel platform, your gateway to unforgettable adventures in the heart of Egypt.
                </p>
              </MDBCol>
              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 useful-links '>
                <h6 className='text-uppercase fw-bold mb-4 secondary-color-text'>Useful links</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    About
                  </a>
                </p>
                <p>
                  <Link to="/egyptDayTours" className='text-reset'>
                    Egypt Day Tours                </Link>
                </p>
                <p>
                  <Link to="/egyptTourPackage" className='text-reset'>
                    Egypt Tour Package                </Link>
                </p>
                <p>
                  <Link to="/nileCruise" className='text-reset'>
                    Nile cruise
                  </Link>
                </p>
              </MDBCol>
              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4 useful-links'>
                <h6 className='text-uppercase fw-bold mb-4 secondary-color-text'>Contact</h6>
                <a href="mailto:Info@allover-egypt.com"
                  className='text-black text-decoration-none d-flex align-items-center mb-3 link-position'
                >
                  <CiMail className='me-2  secondary-color-text icon-style ' />
                  <span className='text-black '>Info@allover-egypt.com</span>
                </a>
                <a href="https://wa.me/+201155430742?text=Hello%20Ask%20any%20Question%20%3F%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-black d-block text-decoration-none mb-4 d-flex  align-items-center link-position'
                >
                  <FaWhatsapp className='me-2  secondary-color-text icon-style ' />
                  <span className='text-black  '>(+2) 01155430742</span>
                </a>            </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-center p-4  ' >
          <span className='me-2'>  © Copyright 2024 <Link className=' text-black fw-bold ms-1 ' to='/home'>
            Allover Egypt Tours .com
          </Link>  <span>
             , Site created by{' '}
              <a
                href="https://github.com/ayamuhamma1d?tab=repositories"
                target="_blank"
                className="text-black fw-bold text__color"
                title="About Aya Muhammad"
                rel="author"
              >
                Aya Muhammad
              </a>
            </span> </span>
        </div>
      </MDBFooter>
    </footer>
  );
}