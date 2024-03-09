import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import logo from "./../../assets/img/logo (2).png";
import "./customNavbar.css";

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [linkColor, setLinkColor] = useState('text-white');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <nav className={`navbar navbar-expand-lg shadow-sm fixed-top tour-package-img  ${scrolled ? 'tour-package-img ' : ''}`}>
      <Container>
        <NavLink to="/" className="navbar-brand">
          <img className='logo' src={logo} alt="Company Logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavbarToggle}
          aria-controls="basic-navbar-nav"
          aria-expanded={expanded ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto my-2 my-lg-0 py-2 d-flex">
            <li className="nav-item">
              <NavLink className={`nav-link px-4  text-black `} to="/home" active='is-active'>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link px-4 text-black `} to="/egyptDayTours" active='is-active'>Egypt Day Tours</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link px-4 text-black `} to="/egyptTourPackage" active='is-active'>Egypt Tour Package</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link px-4  text-black `} to="/nileCruise" active='is-active'>Nile Cruise</NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default CustomNavbar;
