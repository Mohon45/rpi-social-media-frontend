import React from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();
  console.log(user);

  return (
    <div>
      <nav className="navbar bg-custom">
        <div className="container">
          <a className="navbar-brand" href="#">
            CMT &nbsp; 19-20
          </a>
          <div className="d-flex align-items-center">
            <h4 className="me-3">{user.displayName}</h4>
            <div className="dropdown profile-img me-3">
              <span
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                  width="60"
                  height="60"
                  className="rounded-circle border border-4 "
                />
              </span>

              <ul className="dropdown-menu">
                {user.email ? (
                  <>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link onClick={logout} className="dropdown-item" to="/">
                        Log out
                      </Link>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link className="dropdown-item" to="/login">
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
