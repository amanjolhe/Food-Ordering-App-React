import React from "react";
import { imagecdn } from "./Constant";
import no_image from "../images/noimage.jpg";
import veglogo from "../images/veg.jpg";
import nonveglogo from "../images/nonveg.jpg";
import { useDispatch } from "react-redux";
import { addToCart } from "../Utils/CartSlice";

const MenuItemComponent = (item) => {debugger
  const dispatch = useDispatch();
  function handleAddAction(item) {
    dispatch(addToCart(item));
  }
  return (
    <>
      <div className="menu-card p-2 m-2">
        <div className="d-flex">
          <div className="col-6 text-start">
            <div>
              <img
                src={
                  item.attributes.vegClassifier === "VEG" ? veglogo : nonveglogo
                }
                width="25px"
                height="25px"
              ></img>
              <span>Best Seller</span>
            </div>
            <div>{item.name}</div>
            <div>{item.price/100}</div>
          </div>
          <div className="col-6 text-center">
            <img
              className="img-thumbnail menu-image"
              src={
                item.cloudinaryImageId
                  ? imagecdn + item.cloudinaryImageId
                  : no_image
              }
            />
            <button
              className="btn add-item-button btn-outline-success"
              onClick={() => handleAddAction(item)}
            >
              ADD
            </button>
          </div>
        </div>
      </div>
      <div className="menu-card-divider"></div>
    </>
  );
};

export default MenuItemComponent;
