import React from "react";
import './HeroSection.css';
import HeroImage3 from '../assets/img/heroimg3.svg'

function HeroSectionThree() {
  return (
    <>
      <div className="container p-5">
        <div className="row d-flex justify-content-center align-items-center centered-column">
          <div className="col-md-12 col-lg-6 col-sm-12 col-12 pb-5">
            <h1 className="heading-1 fw-bold">
              Peed Of Creative Service For Your Business Growth
            </h1>
            <p>
              We recruit doctors with the best honors and graduates at their
              universities, with a very broad and extraordinary experience they
              grow into professional doctors
            </p>
            <p>
              then received extraordinary supplies, guided for 2 years, they
              already understand very well about existing diseases and how to
              handle them properly
            </p>
            <button
              type="button"
              className="btn hero-btn text-white fw-semibold rounded-pill px-4 py-2"
            >
              HIRE ME
            </button>
          </div>
          <div className="col-md-12 col-lg-6 col-sm-12 col-12">
            <img src={HeroImage3} alt="Hero Car Image" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSectionThree;
