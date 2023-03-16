import React from "react";
import { imagecdn } from "./Constant";
import no_image from "../images/noimage.jpg";
import veglogo from "../images/veg.jpg";
import nonveglogo from "../images/nonveg.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Utils/CartSlice";
import AddRemoveButtonComponent from "./AddRemoveButtonComponent";

const MenuItemComponent = (item) => {
  const StoreItems = useSelector((store) => store.cart.items);
  const StoreItem = StoreItems.filter((StoreItem) => {
    return StoreItem.id == item.id;
  });
  const dispatch = useDispatch();
  function handleAddAction(item) {
    if (StoreItem.length > 0 && StoreItem[0].quantity) {
      debugger;
      StoreItem[0].quantity += 1;
      dispatch(addToCart(StoreItem));

      debugger;
    } else {
      const newMenuItem = { ...item, quantity: 1 };
      dispatch(addToCart(newMenuItem));
    }
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
              {item.ribbon ? <span>{item.ribbon.text}</span> : <></>}
            </div>
            <div>{item.name}</div>
            <div>₹ {item.price / 100}</div>
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
            {StoreItem.length > 0 ? (
              <AddRemoveButtonComponent clsName = {"custom-input-group"} {...StoreItem[0]} />
            ) : (
              <div><button
                className="btn btn-outline-success"
                onClick={() => handleAddAction(item)}
              >
                ADD
              </button></div>
            )}
          </div>
        </div>
      </div>
      <div className="menu-card-divider"></div>
    </>
  );
};

export default MenuItemComponent;
