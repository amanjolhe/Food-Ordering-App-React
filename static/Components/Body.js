import React from "react";
import RestaurantsComponent from "./RestaurantsContainer";
import AboutUs from "./AboutUs";
import PressCompoent from "./PressComponent";
import CareersComponent from "./CareersComponent";
import ContactUsComponent from "./ContactUsComponent";

const BodyComponent = () => {
  return (
    <>
      <div className="container mb-5 mt-5 restaurants_list menu_component_mobile">
        <RestaurantsComponent />
        <AboutUs />
        <CareersComponent />
        <PressCompoent />
        <ContactUsComponent />
      </div>
    </>
  );
};

export default BodyComponent;
