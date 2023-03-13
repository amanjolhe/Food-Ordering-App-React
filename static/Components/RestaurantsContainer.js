import React, { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";

const RestaurantsComponent = () => {
  const [allRestraunts, setAllRestraunt] = useState([]);

  useEffect(() => {
    getRestrauntInfo();
    console.log(allRestraunts)
  },[]);

  async function getRestrauntInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json)
    setAllRestraunt(json?.data?.cards[2]?.data?.data?.cards)
  }

  return (
    <>
      <h3 className="mb-5">
        Popular <span className="food-panda-red">restaurants</span>{" "}
      </h3>
      <div className="row" key={134233}>
        {
          allRestraunts.map((restrant)=>(
            <RestrauntCard {...restrant.data}/>
          ))
        }
      </div>
    </>
  );
};

export default RestaurantsComponent;
