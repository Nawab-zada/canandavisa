import React from "react";
import Slider from "react-slick";


function Fade() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          
        </div>
        <div>
          
        </div>
        <div>
     
        </div>
        <div>
        
        </div>
      </Slider>
    </div>
  );
}

export default Fade;