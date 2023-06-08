import React, { useState } from "react";
import { Data } from "../Data/Data";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Castter from "../Component/Castter";
import { saveAs } from "file-saver";
import file from "../asset/video7.mp4";
const Movidetai = () => {
  const fileurl = file;
  const filename = "videocall";
  const handeldownload = () => {
    saveAs(fileurl, fileurl);
  };
  const close = () => {
    seticon(false);
  };
  const [icon, seticon] = useState(false);
  const setting = () => {
    seticon(!false);
  };
  const [movie, setmovie] = useState(Data);
  const { title } = useParams();
  const Detai = movie.find((item) => item.title === title);
  return (
    <section>
      <div className="detaiwrap">
        <div className="detaiimg">
          <img src={Detai.img}></img>
        </div>
        <div className="detaiitem">
          <div className="detaishow">
            <img src={Detai.show}></img>
          </div>
          <div className="detaitext">
            <h1>{Detai.title}</h1>
            <div className="detaihd">
              <div className="detaik">
                <h1>hd 4k</h1>
                <h2>drama</h2>
              </div>
              <div className="detaiicon">
                <i class="fa-solid fa-calendar-days"></i>
                <h2>2019</h2>
              </div>
              <div className="detaiicon">
                <i class="fa-solid fa-clock"></i>
                <h2>10 hr</h2>
              </div>
            </div>
            <div className="detaip">
              <p>
                Recently widowed Dr. Nate Daniels and his two teenage daughters
                travel to a South African game reserve managed by Martin
                Battles, an old family friend and wildlife biologist. However,
                what begins as a journey of healing soon turns into a fearsome
                fight for survival when a lion
              </p>
            </div>
            <div className="detailogo">
              <div className="detaisetting" onClick={setting}>
                <i class="fa-solid fa-gear"></i>
              </div>
              <div className="detaikore">
                <h1>language: korean</h1>
              </div>
              <Link
                style={{ textDecoration: "none" }}
                to={`/watch/${Detai.title}`}
              >
                <div className="detaiplay">
                  <i class="fa-regular fa-circle-play"></i>
                  <h1>watch</h1>
                </div>
              </Link>
            </div>
            <div className={`detaifb ${icon ? "active" : "detaifb"}`}>
              <a href="https://www.youtube.com/watch?v=miqvweuQpos">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.youtube.com/watch?v=miqvweuQpos">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/watch?v=miqvweuQpos">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.youtube.com/watch?v=miqvweuQpos">
                <i class="fa-brands fa-tiktok"></i>
              </a>
              <a href="https://www.youtube.com/watch?v=miqvweuQpos">
                <i class="fa-brands fa-youtube"></i>
              </a>
              <div className="detaiclose" onClick={close}>
                <i class="fa-regular fa-rectangle-xmark"></i>
              </div>
            </div>
            <div className="detaistart">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <Link to={`/watch/${Detai.title}`}>
              <div className="detaiview">
                <div className="detaitrai">
                  <button>trailer</button>
                </div>
                <div className="detaixem">
                  <button>xem phim</button>
                </div>
                
              </div>
            </Link>
            <div className="detaidownload" onClick={handeldownload}>
              <i class="fa-solid fa-download"></i>
              <button>download</button>
            </div>
          </div>
        </div>
      </div>
      <Castter />
    </section>
  );
};

export default Movidetai;
