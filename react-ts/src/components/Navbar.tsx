import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiHeart, FiSearch, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/images/fope logo.svg";

const navItems = [
  {
    name: "ALL",
    link: "/all",
  },
  {
    name: "MALAY",
    link: "/malay",
  },
  {
    name: "ARAB",
    link: "/arab",
  },
];

const Navbar: React.FC = () => {
  return (
    <div className="top-0 z-50 sticky flex justify-between items-center gap-4 border-gray-200 bg-white shadow-sm p-5 border-b">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="hover:opacity-80w-auto h-10 transition-transform duration-300 hover:scale-110"
          />
        </Link>
      </div>

      {/* Navbar Links */}
      <div className="flex flex-grow justify-center gap-6">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="hover:opacity-80 font-extrabold text-customTeal text-lg hover:text-blue-500 tracking-wide cursor-pointertransition-transform duration-300 hover:scale-110"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Search Bar */}
      <div className="relative lg:flex items-center hidden">
        <input
          type="text"
          placeholder="Search..."
          className="border-gray-300 px-4 py-2 border rounded-full focus:ring-2 focus:ring-blue-500 w-72 text-sm focus:outline-none"
        />
        <FiSearch className="right-4 absolute w-6 h-6 text-customTeal text-xl hover:text-blue-500 cursor-pointer" />
      </div>

      {/* Cart, Wishlist, and Login/Signup */}
      <div className="lg:flex items-center gap-6 hidden">
        {/* Cart */}
        <Link to="/cart" className="relative flex items-center">
          <FiShoppingCart className="hover:opacity-80 text-2xl text-customTeal hover:text-blue-500 transition-transform duration-300 hover:scale-110" />
        </Link>

        {/* Wishlist */}
        <Link to="/wishlist" className="flex items-center">
          <FiHeart className="hover:opacity-80 w-6 h-6 text-customTeal hover:text-blue-500 text-2xltransition-transform duration-300 hover:scale-110" />
        </Link>

        {/* Login/Signup */}
        <div className="flex items-center gap-3">
          <Link to="/login" className="flex items-center gap-2">
            <FaUserCircle className="hover:opacity-80 w-6 h-6 text-customTeal text-lg hover:text-blue-500 transition-transform duration-300 hover:scale-110" />
            <span className="hover:opacity-80 font-bold text-customTeal text-sm lg:text-base hover:text-blue-500 transition-transform duration-300 hover:scale-110">
              Login
            </span>
          </Link>
          <span className="text-customTeal">|</span>

          <Link to="/signup" className="flex items-center gap-2">
            {" "}
            <span className="hover:opacity-80 font-bold text-customTeal text-sm lg:text-base hover:text-blue-500 transition-transform duration-300 hover:scale-110">
              Signup
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
