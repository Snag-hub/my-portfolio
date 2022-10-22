import React from "react";

import Navbar from "./Navbar";
import Header from "./Header";

import "./MainContainer.css";

const MainContainer = () => {
  return (
    <>
      <div className="container">
        <div className="header-container">
          <Header />
        </div>
        <div className="main-container">
          <div className="main-container-content">
          </div>
          <div className="main-container-navigations">
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContainer;
