import React from "react";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "./Hooks/useRestrautmenu";
import RestrauntRatingWidget from "./Widget/RestrauntRatingWidget";
import MenuItemComponent from "./MenuItemComponent";

const RestaurantMenuComponent = () => {
  const { ResId } = useParams();
  const restrauntInfo = useRestrauntMenu(ResId);
  if (Object.keys(restrauntInfo).length
  <= 0) {
    return null;
  }
  return (
    <>
      {console.log(restrauntInfo)}
      <div className="container mt-5 restaurants_list menu_component_mobile">
        <div className="p-3 d-flex">
          <div className="col-8">
            <div className="fw-bold fs-5 text-capitalize">
              {restrauntInfo[0].name}
            </div>
            <div className="fw-light text-muted fs-6 text-capitalize">
              {restrauntInfo[0].cuisines.join(", ")}
            </div>
            <div className="fw-light text-muted fs-6 text-capitalize">
              {restrauntInfo[0].area +
                ", " +
                restrauntInfo[0].sla.lastMileDistanceString}
            </div>
          </div>
          <div className="col-4">
            <RestrauntRatingWidget
              rating={restrauntInfo[0].avgRatingString}
              totalRatingsString={restrauntInfo[0].totalRatingsString}
            />
          </div>
        </div>
        <hr className="restraunt_menu_headig"></hr>

        {Object.values(restrauntInfo[1]).map((item) => (
          <MenuItemComponent key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenuComponent;
