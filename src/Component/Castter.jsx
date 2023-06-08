import React, { useState } from "react";
import { Data } from "../Data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Castter = () => {
 
 const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section>
      <div className="castuser">
        <i class="fa-solid fa-user"></i>
        <h1>castter</h1>
      </div>
       <div>
       <Slider {...settings}>
       {Data.map((item) => item.cast.slice(0,1).map((items) =>(
        <div className="castitems">
            <div className="castitem">
            <img src={items}></img>
            </div>
            <h1>{item.title}</h1>
        </div>
       )))}
       </Slider>
       </div>
    </section>
  );
};

export default Castter;
