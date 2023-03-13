import React from "react";
import logoimg from "../images/logo.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavItem = ({ navName, pageRef }) => {
  return (
    <li className="nav-item">
      <Link
        to={pageRef}
        className="nav-link food-panda-red"
        aria-current="page"
      >
        {navName}
      </Link>
    </li>
  );
};

const NavBar = () => {
  const CartItems = useSelector((store)=> store.cart.items)

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logoimg} alt="" width="100" height="26" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="nav justify-content-end">
              <NavItem navName={"Home"} pageRef={"/"} />
              <NavItem navName={"ABOUT US"} pageRef={"#about_us"} />
              <NavItem navName={"CAREERS"} pageRef={"#careers"} />
              <NavItem navName={"PRESS"} pageRef={"#press"} />
              <NavItem navName={"CONTACT"} pageRef={"#contact"} />
              <li className="nav-item">
                <Link
                  to={"/cart"}
                  className="nav-link food-panda-red"
                  aria-current="page"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bag"
                    viewBox="0 0 16 16"
                  >
                    {console.log(CartItems)}
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg><span className="cart-count">{CartItems.length}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default NavBar;
