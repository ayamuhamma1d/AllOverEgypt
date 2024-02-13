import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
 <div className=" container">
     <MDBFooter bgColor='light' className='text-center text-lg-start text-muted '>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4 '>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
               All over Egypt
              </h6>
              <p>
              "Embark on a Journey with Us: Discover Egypt's Rich Wonders and Hidden Gems!

Welcome to our exclusive travel platform, your gateway to unforgettable adventures in the heart of Egypt. 
              </p>
            </MDBCol>

          
            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 '>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
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

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
           
              <p>
                <MDBIcon icon="envelope" className=""/>
                <CiMail className='me-2  text-success' />Info@allover-egypt.com
              </p>
              <Link className=' text-black d-block   text-decoration-none'> <FaWhatsapp className='me-2  text-success' />+20 115 543 0742</Link>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4  bg__form ' >
      © Copyright 2023 Allover Egypt Tours        <Link className=' fw-bold text__color' to='/home'>
      Allover Egypt Tours .com
        </Link>
      </div>
    </MDBFooter>
 </div>
  );
}