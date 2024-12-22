import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/images/logo.png"; // Ensure this file exists
import userImg from "../assets/images/user.png"; // Ensure this file exists

function Navbar() {
  return (
    <div className="navbar bg-white shadow-md fixed top-0 z-50 w-full">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            <img src={logoImg} alt="Logo" className="h-8 inline-block mr-2" />
            TravelApp
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="nav-link text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/about" className="nav-link text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/location" className="nav-link text-gray-700 hover:text-blue-600">Location</Link>
            <Link to="/contact" className="nav-link text-gray-700 hover:text-blue-600">Contact</Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input type="text" placeholder="Search" className="input input-bordered w-32 md:w-64" />
            <button className="absolute right-0 top-0 mt-2 mr-2">
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={userImg} alt="User Avatar" />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white rounded-box w-52">
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li><Link to="/settings">Settings</Link></li>
              <li><Link to="/logout">Logout</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;