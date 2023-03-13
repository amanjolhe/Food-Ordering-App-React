import React from "react";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "./Hooks/useRestrautmenu";
import RestrauntRatingWidget from "./Widget/RestrauntRatingWidget";
import MenuItemComponent from "./MenuItemComponent";

const RestaurantMenuComponent = () => {
  const { ResId } = useParams();
  const restrauntInfo = useRestrauntMenu(ResId);
  if (restrauntInfo.length >= 0) {
    return null;
  }
  return (
    <>
      {console.log(restrauntInfo)}
      <div className="container mt-5 restaurants_list menu_component_mobile">
        <div className="p-3 d-flex">
          <div className="col-8">
            <div className="fw-bold fs-5 text-capitalize">
              {restrauntInfo.name}
            </div>
            <div className="fw-light text-muted fs-6 text-capitalize">
              {restrauntInfo.cuisines.join(", ")}
            </div>
            <div className="fw-light text-muted fs-6 text-capitalize">
              {restrauntInfo.area +
                ", " +
                restrauntInfo.sla.lastMileDistanceString}
            </div>
          </div>
          <div className="col-4">
            <RestrauntRatingWidget
              rating={restrauntInfo.avgRatingString}
              totalRatingsString={restrauntInfo.totalRatingsString}
            />
          </div>
        </div>
        <hr className="restraunt_menu_headig"></hr>

        {Object.values(restrauntInfo.menu?.items).map((item) => (
          <MenuItemComponent key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenuComponent;
