import React from "react";
import banner from "../asset/bannerabout.png";
import banerimg from "../asset/about2.jpg";
const About = () => {
  return (
    <section className="about">
      <div className="aboutitem">
        <img src={banner}></img>
        <h1>about us</h1>
      </div>
      <div className="aboutwrap">
        <div className="abouttext">
          <h1>Welcome to our Netflixo</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged.
          </p>
          <div className="aboutuser">
            <div className="aboutlist">
              <h1>10K</h1>
              <h2>Listed Movies</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and</p>
            </div>
            <div className="aboutx">
              <h1>8K</h1>
              <h2>Listed Movies</h2>
              <p>Completely free, without registration! Lorem Ipsum is simply</p>
            </div>
          </div>
        </div>
        <div className="aboutimg">
          <img src={banerimg}></img>
        </div>
      </div>
    </section>
  );
};

export default About;
