import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, signout } from "../pages";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container-fluid">
        <div className="row custom-header align-items-center">
          <div className="col-lg-3">
            <Link className="navbar-brand text-white" to="/">
              Amazon
            </Link>
          </div>
          <div className="col-lg-6">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-warning" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="col-lg-3">
            <ul className="d-flex justify-content-evenly">
            {isAuthenticated()&& isAuthenticated().user.rolle ===1&&
              <>
                <li className="list-unstyled mt-2">
                    <Link
                      to="/admin/dashboard"
                      className="btn btn-warning"
                    >
                      Admin
                    </Link>
                  </li>
              </>
              }
{isAuthenticated()&& isAuthenticated().user.rolle ===0&&
              <>
                <li className="list-unstyled mt-3">
                    <Link
                      to="/user/profile"
                      className="btn btn-warning"
                    >
                      profile
                    </Link>
                  </li>
              </>
              }

              {!isAuthenticated() && (
                <>
                  <li className="list-unstyled">
                    <Link
                      to="/signin"
                      className="text-decoration-none text-white fs-5"
                    >
                      <i className="bi bi-box-arrow-in-right fs-3"></i>Signin
                    </Link>
                  </li>
                  <li className="list-unstyled">
                    <Link
                      to="/signup"
                      className="text-decoration-none text-white fs-5"
                    >
                      <i className="bi bi-person-plus-fill fs-3"></i>Signup
                    </Link>
                  </li>
                </>
              )}
              <li className="list-unstyled mt-3">
                <Link
                  to="/cart"
                  className="text-decoration-none text-white fs-5"
                >
                  <i className="bi bi-cart-plus-fill fs-3"></i>
                </Link>
              </li>
              {isAuthenticated() && (
                <button className="btn btn-outline-warning mt-2">
                  <i
                    className="bi bi-box-arrow-in-right fs-3"
                    onClick={() => {
                      signout(() => {
                        navigate("/");
                      });
                    }}
                  ></i>{" "}
                </button>
              )}
            </ul>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/deals">
                  Deals
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
