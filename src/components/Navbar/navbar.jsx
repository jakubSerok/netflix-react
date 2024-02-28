import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-4xl font-bold text-red-600 cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      <div>
        <Link to="/login">
          <button className="pr-4 text-white">Sign In</button>
        </Link>
        <Link to="/signup">
          <button className="px-6 py-2 text-white bg-red-600 rounded cursor-pointer">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
