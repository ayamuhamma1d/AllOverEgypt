import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { SiYourtraveldottv } from "react-icons/si";
import { NavLink, Link } from 'react-router-dom';
import logo from "./../../assets/img/logo (2).png"
import "./customNavbar.css"

const CustomNavbar = () => {
  return (
    <>
  <Container className='py-3  position-relative'>
                <div className="row ">
                    <div className="col-md-4 col-lg-7 ">
                        <NavLink className="px-4 text-black page__link  " to=""> <img className='logo' src={logo} alt="" /></NavLink>
                    </div>
                    <div className="col-md-4 col-lg-2 hidden">
                        <p className='mb-1 text-muted '>Quick question? Email Us</p>
                        <Link className='text__color'>info@allover-egypt.com</Link>
                    </div>
                    <div className="col-md-4 col-lg-3 d-flex align-align-items-end hidden">
                        <button className='btn text-center rounded-pill bg-white shadow px-4 py-2 text__color text-capitalize text-muted'>All over Egypt Trips <SiYourtraveldottv className='icon__color' /></button>
                    </div>
                </div>
            </Container>
         
      <Navbar expand="lg" className="main_Color shadow-lg text-white ">
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <Nav className="m-auto my-2 my-lg-0 py-2 d-flex" navbarScroll>
              <NavLink className="px-4 text-white page__link" to="/home">Home</NavLink>
              <NavLink className="px-4 text-white page__link" to="/egyptDayTours">Egypt Day Tours</NavLink>
              <NavLink className="px-4 text-white page__link" to="/egyptTourPackage">Egypt Tour Package</NavLink>
              <NavLink className="px-4 text-white page__link" to="/nileCruise">Nile Cruise</NavLink>
              <NavLink className="px-4 text-white page__link" to="/trips">Trips</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
