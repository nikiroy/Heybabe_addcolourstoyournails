import React, { useRef } from "react";
import Logo from "../assets/images/logo.png";


const Navbar = () => {
  const navbarRef = useRef();

  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active")

  };


  return (
    <>
      <header className="header">
        <a href="/" className="logo">
          <img src={Logo} alt="" />
        </a>
        <nav className="navbar" ref={navbarRef}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#service">Service</a>
          <a href="#work">Work</a>
          <a href="#review">Review</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="icons">
          {/* <a href="/" className="btn">
            Call:+123456789          </a> */}
          <div
            className="fas fa-bars"
            id="menu-btn"
            onClick={navbarHandler}
          ></div>
        </div>

      </header>
    </>
  );
};

export default Navbar;
