import React, { useState } from "react";
import { Data } from "../Data/Data";
import { useParams } from "react-router-dom";
const Watch = () => {
  const [video, setvideo] = useState(false);
  const xmark = () => {
    setvideo(false);
  };
  const videocall = () => {
    setvideo(!false);
  };
  const [use, setuse] = useState(Data);
  const { title } = useParams();
  const watch = use.find((item) => item.title === title);
  return (
    <div className="previtem">
      <div className="prev">
        <h1>
          <i class="fa-solid fa-arrow-left"></i>prev movie
        </h1>
        <div className="nextitem">
          <div className="next">
            <i class="fa-solid fa-heart"></i>
          </div>
          <button className="btna">download</button>
        </div>
      </div>
      <div className="watchimg">
        <img src={watch.img} alt="" />
      </div>
      <div className="videocall">
        <video
          className={`video ${video ? "show" : "video"}`}
          controls
          src={watch.video}
        ></video>
      </div>
      <div className={`closevideo${video ? "" : "close"}`} onClick={xmark}>
        <i class="fa-solid fa-circle-xmark"></i>
      </div>
      <div className="videoplay" onClick={videocall}>
        <i class="fa-solid fa-play"></i>
      </div>
    </div>
  );
};

export default Watch;
