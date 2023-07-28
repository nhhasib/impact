import React from "react";

const NavBar = () => {
  return (
    <div className="flex bg-nav text-white items-center flex-col justify-center">
      <div className="bg-[rgba(0,0,0,.6)] navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Gallery</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a>Registration</a>
              </li>
            </ul>
          </div>
          <a className="normal-case flex items-center text-[40px] text-white gap-[13px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="63"
              height="45"
              viewBox="0 0 63 45"
              fill="none"
            >
              <circle
                cx="22.5"
                cy="22.5"
                r="21"
                stroke="white"
                stroke-width="3"
              />
              <circle
                cx="40.5"
                cy="22.5"
                r="21"
                stroke="white"
                stroke-width="3"
              />
            </svg>
            IMPACT
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Gallery</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>Registration</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
