import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItemComponent from "./CartItemComponent";
const CartComponent = () => {
  const Store = useSelector((store) => store.cart);
  debugger;
  return (
    <>
      <div className="container">
        <h3>Cart Review</h3>
        {Store.items == 0 ? (
          <div className="text-center mb-2">
            <h3>Your cart is empty</h3>
            <div>You can go to home page to view more restaurants</div>
            <div><Link to={"/"} className="btn btn-warning">See restaurants near you</Link></div>
          </div>
        ) : (
          Store.items?.map((item) => (
            <CartItemComponent key={item.id} {...item} />
          ))
        )}
        {Store.cartTotal > 0 ? (
          <>
            <div className="m-2 p-2 d-flex">
              <div className="col-8 h6 text-end">Total :</div>
              <div className="col-4 h6 ms-2">{Store.cartTotal}</div>
            </div>
            <div className="p-2 m-2 text-center">
              <Link to={"/checkout"} className="btn btn-success">
                Continue{" "}
              </Link>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
export default CartComponent;
