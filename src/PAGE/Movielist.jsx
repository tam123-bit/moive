import React from "react";
import { Link } from "react-router-dom";
const Movielist = ({ item }) => {
  return (
    <section>
      <Link  style={{textDecoration:'none'}} to={`${item.title}`}>
        <div className="listimg">
          <img src={item.img}></img>
          <h1>{item.title}</h1>
        </div>
      </Link>
    </section>
  );
};

export default Movielist;
