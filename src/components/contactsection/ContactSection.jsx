import React from "react";
import "./ContactSection.css";

function ContactSection() {
  return (
    <>
      <div className="bg-blue">
        <div className=" container text-center text-white p-5">
          <p className="pt-4 pb-2">
            WE CUSTOM BUILD WEBSITES TO MAKE YOUR BRAND STAND OUT FROM THE NOISE
          </p>
          <h4 className="pb-4">
            We start by listening and let that shape our <br /> design process, with
            our clients as partners
          </h4>
          <button type="button" className="btn contact-btn fw-semibold">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}

export default ContactSection;
