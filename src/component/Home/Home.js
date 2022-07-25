import React from "react";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import MainBody from "../MainBody/MainBody";
import RightSidebar from "../RightSidebar/RightSidebar";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-3">
          <LeftSidebar />
        </div>
        <div className="col-md-6">
          <MainBody />
        </div>
        <div className="col-md-3">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
