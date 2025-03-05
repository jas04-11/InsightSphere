import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navlink navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className=" navItem navbar-brand main" href="/">
          InsightSphere
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="navItem nav-link " href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="navItem nav-link" href="#blog">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="navItem nav-link "
                  href="/uploadBlog"
                  tabIndex="-1"
                >
                  Upload Blog
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("isLoggedIn");
                  navigate("/login");
                }}
                className="btn navItem"
                type="submit"
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/*<div className="navbar flex items-center justify-between h-[100px] px-[20px] md:px-[100px] bg-[#000000] text-white">
        <div className="logo">
          <img className="w-[180px] md:w-[220px]" src={main} alt="Logo" />
        </div>

        <div className="links flex items-center gap-[10px] md:gap-[20px]">
          <Link className="navlink text-white hover:text-gray-400">Home</Link>
          <Link className="navlink text-white hover:text-gray-400">Blogs</Link>
          <Link className="hidden md:inline-block navlink text-white hover:text-gray-400">
            About
          </Link>
          <Link className="hidden md:inline-block navlink text-white hover:text-gray-400">
            Services
          </Link>
          <Link className="hidden md:inline-block navlink text-white hover:text-gray-400">
            Contact
          </Link>
        </div>
      </div>*/}
    </>
  );
};

export default Navbar;
