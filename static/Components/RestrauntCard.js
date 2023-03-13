import React from "react";
import { imagecdn } from "./Constant";
import { Link } from "react-router-dom";

const RestrauntCard = ({ id, cloudinaryImageId, name, cuisines, locality, uuid }) => {
  return (
    <>
    <Link to={"restraunt/"+id} className="col-lg-3 col-md-6 menu_component mb-5" key={uuid}>
        <a href="" className="restaurants_tag">
          <img
            src={imagecdn + cloudinaryImageId}
            alt=""
            className="img-fluid img_thumbnail rounded-3"
          />
          <div className="fw-bolder restaurant_name">{name}</div>
          <div className="fw-light restaurant_dishes" title={cuisines}>{cuisines}</div>
          <div className="fw-light restaurant_address">{locality}</div>
        </a>
    </Link>
    </>
  );
};

export default RestrauntCard;
