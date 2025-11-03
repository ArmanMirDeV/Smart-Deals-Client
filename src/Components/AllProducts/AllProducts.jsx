import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-10">
        All <span className="text-purple-600">Products</span>
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow-sm p-4 flex flex-col border border-gray-100 hover:shadow-md transition"
          >
            <div className="h-48 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
              {product.image ? (
                <img
                    src={product.image}
                
                  alt={product.title}
                  className="w-full h-full object-fill"
                />
              ) : (
                <span className="text-gray-400 text-sm">No Image</span>
              )}
            </div>

            <div className="mt-3 flex flex-col flex-grow">
              {product.status && (
                <span
                  className={`inline-block text-xs font-semibold rounded px-2 py-1 mb-2 w-fit ${
                    product.status === "sold"
                      ? "bg-red-100 text-red-600"
                      : "bg-purple-100 text-purple-600"
                  }`}
                >
                  {product.status === "sold" ? "Sold" : "On Sale"}
                </span>
              )}

              <h3 className="text-sm font-medium text-gray-800 leading-snug mb-1">
                {product.title.length > 40
                  ? product.title.slice(0, 40) + "..."
                  : product.title}
              </h3>

              <p className="text-purple-600 text-sm font-semibold mb-4">
                ${product.price_min}
                {product.price_min !== product.price_max
                  ? ` - ${product.price_max}`
                  : ""}
              </p>

              <div className="mt-auto">
                <Link
                  to={`/productDetails/${product._id}`}
                  className="block w-full border border-purple-400 text-purple-600 text-center py-2 rounded-md font-medium text-sm hover:bg-purple-600 hover:text-white transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
