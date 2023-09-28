import React from "react";
import Logo from "../assets/img/logoimg.svg";

import "./Navbar.css";
function Navbar(props) {
  const {navList} = props
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-bg-clr text-center">
        <div className="container">
          <a
            className="navbar-brand d-flex justify-content-center fs-4 fw-bolder"
            href="#"
          >
            <img src={Logo} alt="Logo" className="me-2 img-fluid" />
            Warkinon
          </a>
          <div className="position-absolute top-0 start-0"></div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse text-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item fs-6 fw-bolder">
                <a className="nav-link" aria-current="page" href="#">
                  {navList.home}
                </a>
              </li>
              <li className="nav-item fs-6 fw-bolder">
                <a className="nav-link" aria-current="page" href="#">
                  {navList.casestudies}
                </a>
              </li>
              <li className="nav-item fs-6 fw-bolder">
                <a className="nav-link" aria-current="page" href="#">
                  {props.navList.blog}
                </a>
              </li>
              <li className="nav-item fs-6 fw-bolder">
                <a className="nav-link" aria-current="page" href="#">
                  {props.navList.services}
                </a>
              </li>
              <li className="nav-item fs-6 fw-bolder">
                <a className="nav-link" aria-current="page" href="#">
                {props.navList.contact}
                </a>
              </li>
            </ul>
            <div className="d-flex column-gap-3 ms-auto justify-content-center">
              <a
                className="navbar-brand fs-6 fw-semibold px-3 rounded-pill hero-btn2 text-white"
                href="#"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
