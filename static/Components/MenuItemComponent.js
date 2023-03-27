import React from "react";
import { menuItemImageCdn } from "./Constant";
import no_image from "../images/noimage.jpg";
import veglogo from "../images/veg.jpg";
import nonveglogo from "../images/nonveg.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Utils/CartSlice";
import AddRemoveButtonComponent from "./AddRemoveButtonComponent";
import Accordion from "react-bootstrap/Accordion";

const MenuItemComponent = ({ card }) => {
  const StoreItems = useSelector((store) => store.cart.items);
  const StoreItem = StoreItems.filter((StoreItem) => {
    return StoreItem.id == card.card.id;
  });
  const dispatch = useDispatch();
  function handleAddAction(item) {
    if (StoreItem.length > 0 && StoreItem[0].quantity) {
      StoreItem[0].quantity += 1;
      dispatch(addToCart(StoreItem));

    } else {
      const newMenuItem = { ...item, quantity: 1 };
      dispatch(addToCart(newMenuItem));
    }
  }
  return (
    <>
      <Accordion defaultActiveKey="Recommended" className="bg-white">
        <Accordion.Item eventKey={card.card.title}>
          <Accordion.Header>{card.card.title}</Accordion.Header>
          <Accordion.Body>
            {Object.values(card.card.itemCards).map((card) => (
              <>
                <div className="menu-card p-2 m-2">
                  <div className="d-flex">
                    <div className="col-6 text-start">
                      <div>
                        <img
                          src={
                            card.card.info.itemAttribute.vegClassifier === "VEG"
                              ? veglogo
                              : nonveglogo
                          }
                          width="25px"
                          height="25px"
                        ></img>
                        {card.card.info.ribbon ? <span>{card.card.info.ribbon.text}</span> : <></>}
                      </div>
                      <div>{card.card.info.name}</div>
                      <div>₹ {card.card.info.price / 100}</div>
                    </div>
                    <div className="col-6 text-center">
                      <img
                        className="img-thumbnail menu-image"
                        src={
                          card.card.info.imageId
                            ? menuItemImageCdn + card.card.info.imageId
                            : no_image
                        }
                      />
                      {StoreItem.length > 0 ? (
                        <AddRemoveButtonComponent
                          clsName={"custom-input-group"}
                          {...StoreItem[0]}
                        />
                      ) : (
                        <div>
                          <button
                            className="btn btn-outline-success"
                            onClick={() => handleAddAction(card.card.info)}
                          >
                            ADD
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="menu-card-divider"></div>
              </>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default MenuItemComponent;
