import React from "react";
const AboutUs = () => {
  return (
    <>
      <div
        className="container mt-5 mb-5 h-2 text-center d-flex align-items-center justify-content-center foodpanda_about_us"
        id="about_us"
      >
        <div className="row">
          <h2 className="food-panda-red lh-sm fw-bold">ABOUT US</h2>
          <p className="fw-bolder">
            For us, it's not just about bringing you good food from your
            favourite restaurants. It's about making a connection, which is why
            we sit down with the chefs, dreaming up menus that will arrive fresh
            and full of flavour. Try us!
          </p>
          <button className="btn food-panda-red-button w-25 m-auto fw-bold lh-sm  fs-6">
            LEARN MORE
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutUs
