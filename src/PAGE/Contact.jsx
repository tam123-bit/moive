import React from "react";
import banner from "../asset/bannerabout.png";
import banerimg from "../asset/about2.jpg";
const Contact = () => {
  return (
    <section>
      <div className="aboutitem">
        <img src={banner}></img>
        <h1>contact us</h1>
      </div>
      <div className="contactwrap">
        <div className="contacitem" >
          <i class="fa-solid fa-envelope"></i>
          <h1>email us</h1>
          <p>nguyentam@gmail.com Interactively grow backend ideas for cross-platform models.</p>
        </div>
        <div className="contacitem">
          <i class="fa-solid fa-phone"></i>
          <h1>Call Us</h1>
          <p>+255 789 456 123 Distinctively exploit optimal alignments for intuitive bandwidth</p>
        </div>
        <div className="contacitem">
          <i class="fa-solid fa-location-dot"></i>
          <h1>Location</h1>
          <p>Dar es salaam, Tanzania. 345 Kigamboni, Street No. 12,</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
