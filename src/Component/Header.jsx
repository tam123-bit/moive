import React from "react";
import logo from "../asset/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate()
 const logos = () =>{
    navigate('/')
 }
  return (
    <header>
      <nav>
        <div className="logo" onClick={logos} >
          <img src={logo}></img>
        </div>
        <div className="search">
          <input placeholder="search movie item"></input>
          <div className="solid">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="movie">
              <a>movies</a>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="about">
              <a>about us</a>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="contact">
              <a>contact us</a>
            </Link>
          </li>
        </ul>
        <div>
          <Link to="login">
            <a>
              <i class="fa-solid fa-user-tie"></i>
            </a>
          </Link>
        </div>
        <Link to="favorite">
          <div className="user">
            <i class="fa-solid fa-heart"></i>
            <span>0</span>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
