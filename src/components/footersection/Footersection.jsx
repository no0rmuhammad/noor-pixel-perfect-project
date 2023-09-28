import React from "react";
import "./FooterSection.css";

function Footersection() {
  return (
    <div className="footer-clr">
      <div className="container pt-5 pb-4">
        <div className="row text-white">
          {/* <!-- First Footer List Start --> */}
          <div className="col-md-2">
            <ul>
              <li className="size14-700w mb-3 fs-6 li-style">Company Info</li>
              <li className="mb-li">About</li>
              <li className="mb-li">About Sway</li>
              <li className="mb-li">Plans and Pricing</li>
              <li className="mb-li">Services</li>
              <li className="mb-li">Blog</li>
            </ul>
          </div>
          {/* <!-- First Footer List End --> */}

          {/* <!-- Second Footer List Start --> */}
          <div className="col-md-2">
            <ul>
              <li className="size14-700w mb-3 fs-6 li-style">Legal</li>
              <li className="mb-li">Products</li>
              <li className="mb-li">Primary Blocks</li>
              <li className="mb-li">Content Block</li>
              <li className="mb-li">Infographic Blocks</li>
              <li className="mb-li">Business Blocks</li>
            </ul>
          </div>
          {/* <!-- Second Footer List End --> */}

          {/* <!-- Third Footer List Start --> */}
          <div className="col-md-2">
            <ul>
              <li className="size14-700w mb-3 fs-6 li-style">Resources</li>
              <li className="mb-li">Support Center</li>
              <li className="mb-li">Documentation</li>
              <li className="mb-li">Newsletter</li>
              <li className="mb-li">Chanelog</li>
            </ul>
          </div>
          {/* <!-- Third Footer List End --> */}

          {/* <!-- Fourth Footer List Start --> */}
          <div className="col-md-2">
            <ul>
              <li className="size14-700w mb-3 fs-6 li-style">Follow Us</li>
              <li className="mb-li">Twitter</li>
              <li className="mb-li">Dribble</li>
              <li className="mb-li">Facebook</li>
              <li className="mb-li">Linkedin</li>
            </ul>
          </div>
          {/* <!-- Fourth Footer List End --> */}

          {/* <!-- Fifth Footer List Start --> */}
          <div className="col-md-4">
            <ul>
              <li className="size14-700w mb-3 fs-6 li-style">Contact</li>
              <li className="mb-li">
                New York. 112 W 34th St, Manhattan (1) 212-445-4320
              </li>
            </ul>
          </div>
          {/* <!-- Fifth Footer List End --> */}
          <div className="d-flex justify-content-around pt-4">
            <h6>Sways by keydesign. All Rights Reserved</h6>
            <h6>Terms of Use Privacy Policy</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footersection;
