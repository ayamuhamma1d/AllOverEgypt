import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import logo from "./../../assets/img/logo (2).png";
import "./customNavbar.css";

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar expand="lg" className="shadow-lg secondary-color " expanded={expanded} collapseOnSelect>
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img className='logo' src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleNavbarToggle} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto my-2 my-lg-0 py-2 d-flex" navbarScroll>
            <NavLink className="px-4 text-black page__link" to="/home" activeclassname='is-active'>Home</NavLink>
            <NavLink className="px-4 text-black page__link" to="/egyptDayTours" activeclassname='is-active'>Egypt Day Tours</NavLink>
            <NavLink className="px-4 text-black page__link" to="/egyptTourPackage" activeclassname='is-active'>Egypt Tour Package</NavLink>
            <NavLink className="px-4 text-black page__link" to="/nileCruise" activeclassname='is-active'>Nile Cruise</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
