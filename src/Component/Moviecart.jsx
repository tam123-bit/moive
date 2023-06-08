import React, { useState } from "react";
import { Data } from "../Data/Data";
import { Link } from "react-router-dom";

const Moviecart = () => {
  const [loading, setloading] = useState(16);
  const loader = () => {
    setloading((prev) => prev + 4);
  };
  return (
    <section>
      <div className="fire">
        <i class="fa-solid fa-fire"></i>
        <h1>Popular Movies</h1>
      </div>
      <div className="moviecart">
        {Data?.slice(0, loading).map((item) => (
          <Link to={`movie/${item.title}`}>
            <div className="movieitem">
              <img src={item.img}></img>
              <h1>{item.title}</h1>
              <div className="heart">
                <i class="fa-solid fa-heart"></i>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="loading">
        <button onClick={loader}>
          loading<i class="fa-solid fa-spinner"></i>
        </button>
      </div>
    </section>
  );
};

export default Moviecart;
