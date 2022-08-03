import React from "react";
import "./RightSidebar.css";

const RightSidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <div>
          <form className="d-flex" role="search">
            <input
              className="form-control search-icon me-2"
              type="search"
              placeholder="&#xF002; Search"
              aria-label="Search"
            />
          </form>
        </div>
        <div className="mt-5">
          <h3>Trends for you</h3>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
