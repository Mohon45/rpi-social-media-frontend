import React from "react";
import { Link } from "react-router-dom";
import notfound from "../../images/404.jpg";

const NotFound = () => {
  return (
    <div className="container text-center">
      <img className="w-75 " src={notfound} alt="" /> <br />
      <button className="btn btn-info">
        {" "}
        <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
          Back To Home
        </Link>
      </button>
    </div>
  );
};

export default NotFound;
