import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allProducts">All Products</NavLink>
      </li>
      <li>
        <NavLink to="/myProducts">My Products</NavLink>
      </li>
      <li>
        <NavLink to="/myBids">My Bids</NavLink>
      </li>
      <li>
        <NavLink to="/createProduct">Create Product</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <a className="btn btn-ghost normal-case text-2xl font-bold">
          <span className="text-black">Smart</span>
          <span className="text-purple-500">Deals</span>
        </a>
      </div>

      {/* Desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Auth buttons */}
      <div className="navbar-end space-x-2">
        <NavLink
          to="/login"
          className="btn border border-purple-500 text-purple-600 hover:bg-purple-100"
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          className="btn bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-none hover:from-purple-600 hover:to-indigo-600"
        >
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
