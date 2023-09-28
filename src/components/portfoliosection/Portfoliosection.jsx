import React from "react";
import PotfolioImg1 from "../assets/img/portfolioimg1.png";
import PotfolioImg2 from "../assets/img/portfolioimg2.png";
import PotfolioImg3 from "../assets/img/portfolioimg3.png";
import PotfolioImg4 from "../assets/img/portfolioimg4.png";

function Portfoliosection() {
  return (
    <div className="container">
      <div>
        <div>
          <h1 className="text-start">Our Impressive Portfolio</h1>
          <p className="text-start">
            We believe scaling startups require a radically different kind of
            agency
          </p>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 mb-4 text-center">
            <img src={PotfolioImg1} alt="PotfolioImg1" className="img-fluid" />
            <h3 className="pt-2">Website Design</h3>
          </div>
          <div className="col-md-6 mb-4 text-center">
            <img src={PotfolioImg2} alt="PotfolioImg2" className="img-fluid" />
            <h3>Dashboard Design</h3>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 mb-4 text-center">
            <img src={PotfolioImg3} alt="PotfolioImg3" className="img-fluid" />
            <h3>Gallery Item</h3>
          </div>
          <div className="col-md-6 mb-4 text-center">
            <img src={PotfolioImg4} alt="PotfolioImg4" className="img-fluid " />
            <h3 className=" pt-2">Mock Up Design</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfoliosection;
