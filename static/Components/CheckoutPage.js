import React from "react";
import { useState } from "react";
import { createNewOrder } from "../Utils/OrderDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Utils/CartSlice";
import { useNavigate } from "react-router-dom";

function generateOrderConfirmationId() {
  const timestamp = Date.now().toString(36); // Convert current timestamp to base-36 string
  const randomChars = Math.random().toString(36).substr(2, 5); // Generate random string of 5 characters
  return `${timestamp}-${randomChars}`; // Combine timestamp and random string with a dash separator
}

const CheckoutPage = () => {
  const navigate = useNavigate();
  const Store = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    address2: "",
    country: "",
    state: "",
    zip: "",
    paymentMethod: "cod",
    orderId: "",
    orderItems: {},
    orderTotal: 0,
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const orderId = generateOrderConfirmationId();
    dispatch(
      createNewOrder({
        ...formData,
        orderId: orderId,
        orderTotal: Store.cartTotal,
        orderItems: Store.items,
      })
    );
    dispatch(clearCart());
    navigate("/thankyou/" + orderId);
    console.log(formData);
  };

  return (
    <div className="container">
      <main>
        <div className="py-5 text-center">
          <h2>Checkout form</h2>
        </div>
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">{Store.items.length}</span>
            </h4>
            <ul className="list-group mb-3">
              {Store.items.map((item) => (
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div className="col-8">
                    <h6 className="my-0">{item.name}</h6>
                    <small className="text-muted">{item.description}</small>
                  </div>
                  <div className="col-4">
                    <div className="text-muted">₹{item.price / 100}</div>
                    <div className="text-muted">
                      Quantity: {item.quantity}
                    </div>
                  </div>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (₹)</span>
                <strong>₹{Store.cartTotal}</strong>
              </li>
            </ul>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing address</h4>
            <form
              className="needs-validation"
              onSubmit={handleSubmit}
            >
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                    required
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                    required
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    onChange={handleChange}
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="address2" className="form-label">
                    Address 2 <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address2"
                    placeholder="Apartment or suite"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-5">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <select
                    className="form-select"
                    id="country"
                    onChange={handleChange}
                    required
                  >
                    <option value>India</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div className="col-md-4">
                  <label htmlFor="state" className="form-label">
                    State
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    placeholder="Please Enter Name of State"
                    onChange={handleChange}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    placeholder="Zipcode"
                    onChange={handleChange}
                    required
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>
              </div>
              <hr className="my-4" />
              <h4 className="mb-3">Payment</h4>
              <div className="my-3">
                <div className="form-check">
                  <input
                    id="cod"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    onChange={handleChange}
                    defaultChecked
                    required
                  />
                  <label className="form-check-label" htmlFor="cod">
                    Cash on Delivery
                  </label>
                </div>
              </div>
              <hr className="my-4" />
              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Place an Order
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};
export default CheckoutPage;
