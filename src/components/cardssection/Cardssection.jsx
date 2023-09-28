import React from "react";
import "./Cardssection.css";
import CardImg1 from "../assets/img/cardimg1.png";
import CardImg2 from "../assets/img/cardimg2.png";
import CardImg3 from "../assets/img/cardimg3.png";

function Cardssection() {
  return (
    <>
      <div className="cards-bg-clr">
        <div className="container p-4">
          <div className="row">
            <div className="text-center pt-5 pb-4">
              <h1 className="fw-bold">I want company feature</h1>
              <p>
                We believe scaling startups require a radically different kind
                of agency
              </p>
            </div>
            {/* First Card */}
            <div className="col-sm-12 col-md-12 col-lg-4 col-12">
              <div className="card card-bgwhite-clr shadow py-4 px-3 rounded">
                <div className="card-body text-center">
                  <img src={CardImg1} alt="" />
                  <h3 className="card-title pt-3 pb-2">Easy to purchase</h3>
                  <p className="card-text">
                    A complete set of tools to enable marketing teams to curate,
                    personalize, contextualize, send, integrate and track
                    campaigns - no coding required.
                  </p>
                </div>
              </div>
            </div>
            {/* Second Card */}
            <div className="col-sm-12 col-md-12 col-lg-4 col-12 ">
              <div className="card card-bg-clr py-4 py-3 shadow rounded">
                <div className="card-body text-center text-white">
                  <img src={CardImg2} alt="" />
                  <h3 className="card-title pt-2 pb-2">Strategy</h3>
                  <p className="card-text">
                    A complete set of tools to enable marketing teams to curate,
                    personalize, contextualize, send, integrate and track
                    campaigns - no coding required.
                  </p>
                </div>
              </div>
            </div>
            {/* Third Card */}
            <div className="col-sm-12 col-md-12 col-lg-4 col-12">
              <div className="card card-bgwhite-clr shadow py-4 py-3 rounded">
                <div className="card-body text-center ">
                  <img src={CardImg3} alt="" />
                  <h3 className="card-title pt-3 pb-2">Agency Web</h3>
                  <p className="card-text">
                    A complete set of tools to enable marketing teams to curate,
                    personalize, contextualize, send, integrate and track
                    campaigns - no coding required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cardssection;
