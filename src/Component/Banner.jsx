import React from "react";
import { Data } from "../Data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Banner = () => {
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        {Data?.map((item) => (
          <div className="slideritem">
            <div className="sliderimg">
              <img src={item.img}></img>
            </div>
            <div className="slidertext">
              <h1>{item.title}</h1>
              <div className="slidericon">
                <h1>horor</h1>
                <h2>
                  <i class="fa-solid fa-calendar-days"></i> 2023
                </h2>
                <h2>
                  <i class="fa-solid fa-clock"></i> 1hr
                </h2>
              </div>
              <div className="btn">
                <button>watch</button>
                <i class="fa-solid fa-heart"></i>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
