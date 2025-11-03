import React, { useState } from "react";
import { Link } from "react-router";

const CreateProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    category: "",
    minPrice: "",
    maxPrice: "",
    condition: "Brand New",
    usageTime: "",
    productImage: "",
    sellerName: "",
    sellerEmail: "",
    sellerContact: "",
    sellerImage: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-2xl">
        <Link to="/allProducts">
          <a
            
            className="text-gray-500 text-sm flex items-center mb-3 hover:underline"
          >
            ← Back To Products
          </a>
        </Link>
        <h1 className="text-3xl font-semibold text-center mb-6">
          Create <span className="text-purple-500 font-bold">A Product</span>
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-8 space-y-4"
        >
          {/* Title & Category */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">Title</label>
              <input
                type="text"
                name="title"
                placeholder="e.g. Yamaha Fz Guitar for Sale"
                value={product.title}
                onChange={handleChange}
                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 mb-1">Category</label>
              <select
                name="category"
                value={product.category}
                onChange={handleChange}
                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-purple-400"
              >
                <option value="">Select a Category</option>
                <option value="Electronics">Electronics</option>
                <option value="Instruments">Instruments</option>
                <option value="Furniture">Furniture</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Prices */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">
                Min Price You want to Sale ($)
              </label>
              <input
                type="number"
                name="minPrice"
                placeholder="e.g. 18.5"
                value={product.minPrice}
                onChange={handleChange}
                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 mb-1">
                Max Price You want to Sale ($)
              </label>
              <input
                type="number"
                name="maxPrice"
                placeholder="Optional (default = Min Price)"
                value={product.maxPrice}
                onChange={handleChange}
                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>

          {/* Condition & Usage */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex items-center gap-4 flex-1">
              <label className="block text-gray-700">Product Condition</label>
              <div className="flex gap-3">
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="condition"
                    value="Brand New"
                    checked={product.condition === "Brand New"}
                    onChange={handleChange}
                  />
                  Brand New
                </label>
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="condition"
                    value="Used"
                    checked={product.condition === "Used"}
                    onChange={handleChange}
                  />
                  Used
                </label>
              </div>
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 mb-1">
                Product Usage time
              </label>
              <input
                type="text"
                name="usageTime"
                placeholder="e.g. 1 year 3 month"
                value={product.usageTime}
                onChange={handleChange}
                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>

          {/* Product Image */}
          <div>
            <label className="block text-gray-700 mb-1">
              Your Product Image URL
            </label>
            <input
              type="url"
              name="productImage"
              placeholder="https://..."
              value={product.productImage}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Seller Info */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">Seller Name</label>
              <input
                type="text"
                name="sellerName"
                placeholder="e.g. Artisan Roasters"
                value={product.sellerName}
                onChange={handleChange}
                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 mb-1">Seller Email</label>
              <input
                type="email"
                name="sellerEmail"
                placeholder="e.g. leil31955@nrlord.com"
                value={product.sellerEmail}
                onChange={handleChange}
                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">Seller Contact</label>
              <input
                type="text"
                name="sellerContact"
                placeholder="e.g. +1-555-1234"
                value={product.sellerContact}
                onChange={handleChange}
                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 mb-1">
                Seller Image URL
              </label>
              <input
                type="url"
                name="sellerImage"
                placeholder="https://..."
                value={product.sellerImage}
                onChange={handleChange}
                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-700 mb-1">Location</label>
            <input
              type="text"
              name="location"
              placeholder="City, Country"
              value={product.location}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 mb-1">
              Simple Description about your Product
            </label>
            <textarea
              name="description"
              placeholder="e.g. I bought this product 3 month ago..."
              value={product.description}
              onChange={handleChange}
              className="w-full border rounded-md p-2 h-24 resize-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold py-3 rounded-md hover:opacity-90 transition"
          >
            Create A Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
