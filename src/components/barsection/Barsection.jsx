import React from "react";
import "./Barsection.css";
import FbIcon from "../assets/img/fbicon.svg";
import InstaIcon from "../assets/img/instagramicon.svg";
import TwitterIcon from "../assets/img/twittericon.svg";

function Barsection() {
  return (
    <div className="bar-clr">
      <div className="padding-btm container p-3">
        <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-center">
          <div className="left-bar mb-3 mb-md-0">
            <ul className="list-style d-flex flex-column flex-md-row justify-content-evenly gap-3">
              <li>About</li>
              <li>Services</li>
              <li>Pricing Plants</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="right-bar d-flex gap-3">
            <img src={FbIcon} alt="" />
            <img src={InstaIcon} alt="" />
            <img src={TwitterIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Barsection;
