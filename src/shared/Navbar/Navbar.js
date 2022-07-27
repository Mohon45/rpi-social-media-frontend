import React from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <nav class="navbar bg-custom">
        <div class="container">
          <a class="navbar-brand" href="#">
            CMT &nbsp; 19-20
          </a>
          {user.email ? (
            <div className="d-flex align-items-center">
              <h4 className="me-3">{user.displayName}</h4>
              <div class="dropdown me-3">
                <span
                  className="dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                    width="60"
                    height="60"
                    class="rounded-circle border border-4 "
                  />
                </span>

                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="#">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link onClick={logout} class="dropdown-item" to="/">
                      Log out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
