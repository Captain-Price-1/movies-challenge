import React from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/intro";
import ServiceProvider from "../components/serviceProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <Intro />
    </>
  );
};

export default Home;
