import React from "react";
import { Link } from "react-router";

const Product = ({ product }) => {
  const {_id, title, price_min, price_max, image, status, condition } = product;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 max-w-xs h-[350px] flex flex-col">
      {/* Product Image */}
      <div className="w-full h-[160px] bg-gray-200 flex items-center justify-center overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <span className="text-gray-400 text-sm">No Image Available</span>
        )}
      </div>

      {/* Card Content */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          {/* Badge */}
          {status && (
            <span className="inline-block text-xs text-purple-600 bg-purple-100 font-medium px-2 py-1 rounded-full mb-2">
              {status}
            </span>
          )}

          {/* Title */}
          <h3 className="text-gray-900 font-semibold text-sm mb-1 line-clamp-2">
            {title} {condition && `[ ${condition} ]`}
          </h3>

          {/* Price */}
          <p className="text-purple-600 font-semibold mb-3">
            ${price_min} - {price_max}
          </p>
        </div>

        {/* Button */}
        <Link to={`/productDetails/${_id}`} className=" btn w-full border border-purple-500 text-purple-600 text-sm font-medium py-2 rounded-md hover:bg-purple-50 hover:cursor-pointer transition">
          View Details
              </Link>
              
      </div>
    </div>
  );
};

export default Product;
