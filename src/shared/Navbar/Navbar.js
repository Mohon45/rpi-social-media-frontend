import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <div>
      <nav class="navbar bg-custom">
        <div class="container">
          <a class="navbar-brand me-auto" href="#">
            CMT &nbsp; 19-20
          </a>

          <div className="nav-profile-section">
            <button className="btn btn-outline-secondary" onClick={logOut}>
              Log out
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
