import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { imagecdn } from "./Constant";
import no_image from "../images/noimage.jpg";

const OrderConformationPage = () => {
  const { OrderId } = useParams();
  const Store = useSelector((store) => store.orderDetails);
  const orderDetails = Store.orders[OrderId];
  debugger;
  return (
    <div className="container mt-5 mb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="text-left logo p-2 px-5">
              <img src="https://i.imgur.com/2zDU056.png" width={50} />
            </div>
            <div className="invoice p-5">
              <h5>Your order Confirmed!</h5>
              <span className="font-weight-bold d-block mt-4">
                Hello, {orderDetails.firstName + " " + orderDetails.lastName}
              </span>
              <span>
                You order has been confirmed and will be shipped in few minutes!
              </span>
              <div className="payment border-top mt-3 mb-3 border-bottom table-responsive">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        <div className="py-2">
                          <span className="d-block text-muted">Order Date</span>
                          <span>{orderDetails.orderDate}</span>
                        </div>
                      </td>
                      <td>
                        <div className="py-2">
                          <span className="d-block text-muted">Order No</span>
                          <span>{orderDetails.orderId}</span>
                        </div>
                      </td>
                      <td>
                        <div className="py-2">
                          <span className="d-block text-muted">Payment</span>
                          <span>{orderDetails.paymentMethod}</span>
                        </div>
                      </td>
                      <td>
                        <div className="py-2">
                          <span className="d-block text-muted">
                            Shiping Address
                          </span>
                          <span>
                            {orderDetails.address +
                              " " +
                              orderDetails.address2 +
                              " " +
                              orderDetails.country +
                              " " +
                              orderDetails.state +
                              orderDetails.zip}
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="product border-bottom table-responsive">
                <table className="table table-borderless">
                  <tbody>
                    {orderDetails.orderItems.map((item) => (
                      <tr>
                        <td width="20%">
                          <img
                            src={
                              item.cloudinaryImageId
                                ? imagecdn + item.cloudinaryImageId
                                : no_image
                            }
                            width={90}
                          />
                        </td>
                        <td width="60%">
                          <span className="font-weight-bold">{item.name}</span>
                          <div className="product-qty">
                            <span className="d-block">
                              Quantity:{item.quantity}
                            </span>
                          </div>
                        </td>
                        <td width="20%">
                          <div className="text-right">
                            <span className="font-weight-bold">
                              ₹ {item.price / 100}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="row d-flex justify-content-end">
                <div className="col-md-5">
                  <table className="table table-borderless">
                    <tbody className="totals">
                      <tr className="border-top border-bottom">
                        <td width="50%">
                          <div className="text-left">
                            <span className="font-weight-bold">Subtotal</span>
                          </div>
                        </td>
                        <td>
                          <div className="text-right">
                            <span className="font-weight-bold">
                              ₹ {orderDetails.orderTotal}
                            </span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p>
                We will be sending shipping confirmation email when the item
                shipped successfully!
              </p>
              <p className="font-weight-bold mb-0">
                Thanks for shopping with us!
              </p>
              <span>FoodPanda Team</span>
            </div>
            <div className="d-flex justify-content-between footer p-3">
              <span>
                Need Help? visit our <a href="#"> help center</a>
              </span>
              <span>{orderDetails.orderDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderConformationPage;
