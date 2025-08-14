import React from "react";
import Navbar from "../component/Navbar";
import Home from "./Home";

const LandingPages = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-green-50  flex flex-col">
      <Navbar />
      <Home />
    </div>
  );
};

export default LandingPages;
