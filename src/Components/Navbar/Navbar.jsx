import React, { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allProducts">All Products</NavLink>
      </li>
      {user && (
        <>
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
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
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

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Right Side: User Info or Auth Buttons */}
      <div className="navbar-end space-x-3">
        {user ? (
          <div className="flex items-center gap-3">
            {/* User Photo */}
            {user.photoURL && (
              <img
                src={
                  user.photoURL ||
                  "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                }
                alt="User"
                className="w-10 h-10 rounded-full border border-gray-300 object-cover"
              />
            )}
            {/* Display Name */}
            <span className="font-medium text-gray-700 hidden sm:inline">
              {user.displayName || "User"}
            </span>
            {/* Sign Out Button */}
            <button
              onClick={signOutUser}
              className="btn border border-red-500 text-red-500 hover:bg-red-100"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
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
        )}
      </div>
    </div>
  );
};

export default Navbar;
