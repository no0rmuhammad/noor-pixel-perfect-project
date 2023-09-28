import React from "react";
import './CompaniesLogo.css'
import NikeLogo from "../assets/img/nikelogo.svg";
import SpotifyLogo from "../assets/img/spotifylogo.svg";
import GoogleLogo from "../assets/img/Google.svg";
import AppleLogo from "../assets/img/applelogo.svg";
import AmazonLogo from "../assets/img/amazonlogo.svg";
import AirbnbLogo from "../assets/img/airbnblogo.svg";

function CompaniesLogo() {
  return (
    <div className="container pt-5">
      <div className="row d-flex justify-content-center align-items-center centered-column">
        <div className="col-lg-3 col-md-3 col-sm-4 col-6 img-container mb-4">
          <img src={NikeLogo} alt="Nike Logo" className="img-fluid" />
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-6 img-container mb-4">
          <img src={SpotifyLogo} alt="Spotify Logo" className="img-fluid" />
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-6 img-container mb-4">
          <img src={GoogleLogo} alt="Google Logo" className="img-fluid" />
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-6 img-container mb-4">
          <img src={AppleLogo} alt="Apple Logo" className="img-fluid" />
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-6 img-container mb-4">
          <img src={AmazonLogo} alt="Amazon Logo" className="img-fluid" />
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-6 img-container mb-4">
          <img src={AirbnbLogo} alt="Airbnb Logo" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default CompaniesLogo;
