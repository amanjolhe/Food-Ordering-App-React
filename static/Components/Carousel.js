import React from "react";
const CarouselComponent = () => {
  return (
    <div className="container pt-5 pb-5">
      <div className="container pt-5 pb-5 welcome" id="home">
        <div className="pt-5 mt-5">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <h1 className="display-3 food-panda-red">Food Panda</h1>
              <h3 className="text-black overflow-auto">
                BRINGING GOOD <span className="food-panda-red">FOOD</span> INTO
                YOUR EVERYDAY
              </h3>
              <button className="btn btn-primary">Know More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
