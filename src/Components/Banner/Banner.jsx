import React from "react";
import { FaSearch } from "react-icons/fa";

const Banner = () => {
  return (
    <section
      className="
        relative flex flex-col items-center justify-center text-center 
        min-h-[80vh] px-4
        bg-[url('/images/bg-left.png'),url('/images/bg-right.png')]
        bg-no-repeat bg-[length:contain,contain]
        bg-[position:left_top,right_bottom]
        bg-gradient-to-br from-purple-200 via-indigo-200 to-cyan-200
      "
    >
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
          Deal Your <span className="text-purple-600">Products</span>
          <br />
          In A <span className="text-purple-600">Smart</span> Way !
        </h1>

        <p className="text-gray-600 mt-4">
          SmartDeals helps you sell, resell, and shop from trusted local sellers
          — all in one place!
        </p>

        {/* Search Bar */}
        <div className="flex items-center justify-center bg-white shadow-md rounded-full mt-6 overflow-hidden w-full max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search For Products, Categories..."
            className="flex-1 px-4 py-2 text-gray-700 outline-none"
          />
          <button
            className="
              bg-gradient-to-r from-purple-600 to-indigo-600 
              text-white p-3 
              hover:from-indigo-600 hover:to-purple-600
              transition-all duration-300
            "
          >
            <FaSearch />
          </button>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button
            className="
              bg-gradient-to-r from-purple-600 to-indigo-600 
              text-white px-6 py-2 rounded-md font-medium 
              hover:from-indigo-600 hover:to-purple-600 
              transition-all duration-300 shadow-md hover:shadow-lg
            "
          >
            Watch All Products
          </button>

          <button
            className="
              border border-purple-600 text-purple-600 
              px-6 py-2 rounded-md font-medium 
              hover:bg-purple-50 transition-all duration-300
            "
          >
            Post an Product
          </button>
        </div>
      </div>

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-purple-100/30 -z-10"></div>
    </section>
  );
};

export default Banner;
