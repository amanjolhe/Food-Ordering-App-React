import React from "react";
import logo from "../images/food-panda-logo-vector.png";
import fbLogo from "../images/ic_social_facebook.svg";
import linkdeanLogo from "../images/ic_social_linkedin.svg";

const FooterComponent = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container d-flex">
          <div className="col-12 col-lg-6 col-md-6 footer-nav">
            <a className="navbar-brand" href="#">
              <img
                src={logo}
                alt=""
                width="100"
                height="26"
              />
            </a>
          </div>
          <div className="col-12 col-lg-6 col-md-6 justify-content-flex-end footer-nav text-end">
            <ul className="nav justify-content-end footer-nav">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <img src={fbLogo} alt="" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  <img src={linkdeanLogo} alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-6 footer-nav col-md-6 fw-normal">
            © 2022
          </div>
          <div className="col-lg-6 col-md-6"></div>
        </div>
      </nav>
    </>
  );
};

export default FooterComponent