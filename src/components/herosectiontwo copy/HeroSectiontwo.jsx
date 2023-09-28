import React from "react";
import './Herosection.css'
import HeroImage2 from '../assets/img/heroimg2.svg';

function HeroSectiontwo() {
  return (
    <>
      <div className="container p-5">
        <div className="row d-flex justify-content-center align-items-center centered-column">
        <div className="col-md-6 col-lg-6 col-sm-12 col-12">
            <img src={HeroImage2} alt="Hero Car Image" className="img-fluid" />
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12 col-12 ">
            <h3 className="heading-size fw-bold">
            Let your visitors know about your features.
            </h3>
            <p className="para">
            We develop enjoyable consumer experiences, from digital strategy and content to media and analysis. Leading to meaningful results and satisfied clients.

            </p>
            <button
              type="button"
              className="btn hero-btn text-white fw-semibold rounded-pill px-4 py-2"
            >
              Our Process
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSectiontwo;
