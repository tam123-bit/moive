import React from "react";
import mobie from '../asset/mobile.png'
const Mobie = () => {
  return (
    <section>
      <div className="mobieitem">
        <div className="mobietext">
          <h1>
            Download Your Movies Watch Offline.<br></br>Enjoy On Your Mobile
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries..
          </p>
          <div className="mobiehd">
            <h1>hd 4k</h1>
            <h2><i class="fa-solid fa-user"></i>2K</h2>
          </div>
        </div>
        <div className="mobieimg">
            <img src={mobie}></img>
        </div>
      </div>
    </section>
  );
};

export default Mobie;
