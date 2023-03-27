import React from "react";
import { menuItemImageCdn } from "./Constant";
import no_image from "../images/noimage.jpg";
import veglogo from "../images/veg.jpg";
import nonveglogo from "../images/nonveg.jpg";
import AddRemoveButtonComponent from "./AddRemoveButtonComponent";

const CartItemComponent = (item) => {
  return (
    <>
      <div className="menu-card p-2 m-2">
        <div className="d-flex">
          <div className="col-4 text-end d-none d-md-block">
            <img
              className="img-thumbnail menu-image"
              src={
                item.imageId
                  ? menuItemImageCdn + item.imageId
                  : no_image
              }
            />
          </div>
          <div className="col-4 ps-2">
            <div>
              <img
                src={
                  item?.itemAttribute.vegClassifier === "VEG"
                    ? veglogo
                    : nonveglogo
                }
                width="25px"
                height="25px"
              ></img>
              {item.ribbon ? <span>{item.ribbon.text}</span> : <></>}
            </div>
            <div>{item.name}</div>
          </div>
          <div className="d-flex align-items-center col-md-4 col-sm-8">
            <div className="col-md-2">
            <span class="me-2">₹ {item.price / 100}</span>
            </div>
            <AddRemoveButtonComponent clsName = {"cart-custom-input-group"} {...item}/>
          </div>
        </div>
      </div>
      <div className="menu-card-divider"></div>
    </>
  );
};
export default CartItemComponent;
