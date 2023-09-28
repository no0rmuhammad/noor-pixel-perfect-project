import React from "react";
import "./Testimonial.css";
import TestimonialImg1 from "../assets/img/testimonialimg.svg";

function TestimonialSection() {
  return (
    <div className="tes-bg-clr p-5 position-relative">
      <div className="container">
        <div className="text-center pt-5 pb-4">
          <h1>Our Testimonials</h1>
          <p>We believe scaling startups require a radically different kind of agency</p>
        </div>
        <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 g-4 border">
          {/* First Testimonial Card */}
          <div className="col">
            <div className="card py-4 px-2 border-0">
              <div className="card-body d-flex justify-content-center align-items-center">
                <img
                  src={TestimonialImg1}
                  alt="TestimonialImg1"
                  className="img-fluid me-3"
                />
                <div>
                  <p className="card-text">
                    The experts easily identified the wand guided us through the creation of the c.
                  </p>
                  <h6 className="border-bottom pb-3">I love Sway</h6>
                  <h6 className="clr-blue fw-bolder">
                    Vincent Smith <span className="clr-grey fw-semibolder">CEO at Ritmo</span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          {/* Second Testimonial Card */}
          <div className="col">
            <div className="card py-4 px-2 border-0">
              <div className="card-body d-flex justify-content-center align-items-center">
                <img
                  src={TestimonialImg1}
                  alt="TestimonialImg1"
                  className="img-fluid me-3"
                />
                <div>
                  <p className="card-text">
                    The experts easily identified the wand guided us through the creation of the c.
                  </p>
                  <h6 className="border-bottom pb-3">I love Sway</h6>
                  <h6 className="clr-blue fw-bolder">
                    Vincent Smith <span className="clr-grey fw-semibolder">CEO at Ritmo</span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          {/* Third Testimonial Card */}
          <div className="col">
            <div className="card py-4 px-2 border-0">
              <div className="card-body d-flex justify-content-center align-items-center">
                <img
                  src={TestimonialImg1}
                  alt="TestimonialImg1"
                  className="img-fluid me-3"
                />
                <div>
                  <p className="card-text">
                    The experts easily identified the wand guided us through the creation of the c.
                  </p>
                  <h6 className="border-bottom pb-3">I love Sway</h6>
                  <h6 className="clr-blue fw-bolder">
                    Vincent Smith <span className="clr-grey fw-semibolder">CEO at Ritmo</span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
