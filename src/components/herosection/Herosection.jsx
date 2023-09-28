import React from "react";
import "./Herosection.css";
import HeroImage from "../assets/img/heroimg.svg";
import RightImg from '../assets/img/herosideimg.svg';
import LeftImg from '../assets/img/heroleftsideimg.svg';
import DropImg from '../assets/img/herodropsimg.svg'

function Herosection() {
  return (
    <>
      <div className="hero-bg-clr">
        <div className="container pb-5">
          <div className="row d-flex justify-content-center align-items-center centered-column">
            <div className="col-md-6 col-lg-6 col-sm-12 col-12 pb-5 pt-5">
              <img src={LeftImg} alt="LeftImg" className="position-absolute bottom-0 start-0"/>
              <img src={RightImg} alt="RightImg" className="position-absolute top-50 end-0 translate-middle-y"/>
              <h1 className="heading-1 fw-bold">
                The Better Way To <span>Success</span> In Your
                Business
              </h1>
              <p className="para">
                I seek to push the limits of creativity to create high-engaging,
                user-friendly, and memorable interactive experiences.
              </p>
              <button
                type="button"
                className="btn hero-btn text-white fw-semibold rounded-pill px-4 py-2"
              >
                HIRE ME
              </button>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12 col-12 position-relative">
              <img src={HeroImage} alt="Hero Image" className="img-fluid" />
              <div className="position-absolute bottom-0 end-0 mb-5">
              <img src={DropImg} alt="DropImg" />
              </div>
              <div className="position-absolute top-0 start-0 mt-5">
              <img src={DropImg} alt="DropImg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Herosection;
