import "bootstrap/dist/css/bootstrap.min.css";
import "./static/css/style.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./static/Components/Header";
import BodyComponent from "./static/Components/Body";
import NavBar from "./static/Components/nav";
import FooterComponent from "./static/Components/FooterComponent";
import OrderConformationPage from "./static/Components/OrderConformationPage";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useMatch,
} from "react-router-dom";
import RestaurantMenuComponent from "./static/Components/RestrauntMenuComponent";
import { Provider } from "react-redux";
import store from "./static/Utils/Store";
import CartComponent from "./static/Components/CartComponent";
import CheckoutPage from "./static/Components/CheckoutPage";

const AppLayout = () => {
  const isMatch = useMatch("/restraunt/:ResId") ? true : false;

  return (
    <>
      <Provider store={store}>
        {isMatch ? <NavBar /> : <HeaderComponent />}
        <Outlet />
        <FooterComponent />
      </Provider>
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/restraunt/:ResId",
        element: <RestaurantMenuComponent />,
      },
      {
        path: "/cart",
        element: <CartComponent />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/thankyou/:OrderId",
        element: <OrderConformationPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
