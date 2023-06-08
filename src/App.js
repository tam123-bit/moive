import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./PAGE/Home";
import Movie from "./PAGE/Movie";
import Contact from "./PAGE/Contact";
import Login from "./PAGE/Login";
import Favorite from "./PAGE/Favorite";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import About from "./PAGE/About";
import Movidetai from "./PAGE/Movidetai";
import Watch from "./PAGE/Watch";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="movie" element={<Movie />}></Route>
          <Route path="movie/:title" element={<Movidetai />}></Route>
          <Route path="watch/:title" element={<Watch />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="about" element={<About/>}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="favorite" element={<Favorite />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
