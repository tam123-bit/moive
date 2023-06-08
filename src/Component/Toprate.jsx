import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { Data } from "../Data/Data";
const Toprate = () => {
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="toplist">
      <div className="topitem">
        <i class="fa-solid fa-sun"></i>
        <h1>top rate</h1>
      </div>
      <div>
        <div className="topslider">
          <Slider {...settings}>
            {Data?.map((item) => (
              <Link to={`movie/${item.title}`}>
                <div className="topiwrap">
                  <div className="topimg">
                    <img src={item.img}></img>
                    <div className="topicon">
                      <div className="topheart">
                        <i class="fa-solid fa-heart"></i>
                      </div>
                      <h1>{item.title}</h1>
                      <div className="topstart">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Toprate;
