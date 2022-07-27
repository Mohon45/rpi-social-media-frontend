import React from "react";
import useAuth from "../../hooks/useAuth";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import MainBody from "../MainBody/MainBody";
import RightSidebar from "../RightSidebar/RightSidebar";

const Home = () => {
  const { user } = useAuth();
  console.log(user.displayName, user.email);
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
