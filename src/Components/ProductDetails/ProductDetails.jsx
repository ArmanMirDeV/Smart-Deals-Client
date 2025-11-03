import React, { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router";
import BidModal from "../BidModal/BidModal";

const ProductDetails = () => {
  const product = useLoaderData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bids, setBids] = useState([]);

  console.log(bids);
  
  const {
    _id,
    title,
    price_min,
    price_max,
    email,
    category,
    created_at,
    image,
    status,
    location,
    seller_image,
    seller_name,
    condition,
    usage,
    description,
    seller_contact,
  } = product || {};

  const formattedDate = created_at
    ? new Date(created_at).toLocaleDateString()
    : "N/A";

  // ✅ Fetch bids for this product
  const fetchBids = () => {
    if (!_id) return;
    fetch(`http://localhost:3000/products/bids/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Bids for this product", data);
        data.sort((a, b) => b.bid_price - a.bid_price);
        setBids(data);
      })
      .catch((err) => console.error("Error fetching bids:", err));
  };

  useEffect(() => {
    fetchBids();
  }, [_id]);

  return (
    <div>
      <div className="max-w-6xl mx-auto py-10 px-6 bg-gray-50 min-h-screen">
        <Link
          to="/products"
          className="text-gray-600 text-sm hover:text-gray-800 inline-flex items-center mb-4"
        >
          <span className="mr-1">←</span> Back To Products
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>

        <span className="inline-block text-xs font-medium text-purple-700 bg-purple-100 rounded px-2 py-1 mb-4">
          {category}
        </span>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center overflow-hidden">
              {image ? (
                <img
                  src={image}
                  alt={title}
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-gray-400">No Image Available</span>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">
                Product Description
              </h2>
              <div className="flex justify-between text-sm font-medium text-gray-700 mb-3">
                <p>
                  <span className="text-purple-500">Condition:</span>{" "}
                  <span className="text-gray-900 font-semibold">
                    {condition}
                  </span>
                </p>
                <p>
                  <span className="text-purple-500">Usage Time:</span>{" "}
                  <span className="text-gray-900 font-semibold">{usage}</span>
                </p>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-green-600 text-2xl font-semibold mb-1">
                ${price_min}
                {price_min !== price_max ? ` - ${price_max}` : ""}
              </p>
              <p className="text-gray-500 text-sm">Price starts from</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-3">Product Details</h2>
              <p className="text-sm text-gray-700 mb-1">
                <strong>Product ID:</strong> {_id}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Posted:</strong> {formattedDate}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-3">Seller Information</h2>
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={seller_image}
                  alt={seller_name}
                  className="w-10 h-10 rounded-full object-cover border"
                />
                <div>
                  <p className="font-semibold text-gray-800">{seller_name}</p>
                  <p className="text-sm text-gray-500">{email}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                <strong>Location:</strong> {location}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Contact:</strong> {seller_contact}
              </p>
              <div className="mt-3">
                <strong>Status:</strong>{" "}
                <span
                  className={`inline-block px-2 py-1 rounded text-xs font-medium text-white ${
                    status === "sold"
                      ? "bg-red-500"
                      : status === "on sale"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                >
                  {status}
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              disabled={status === "sold"}
              className={`w-full py-3 rounded-md text-white font-semibold text-center transition ${
                status === "sold"
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-700"
              }`}
            >
              {status === "sold" ? "Sold Out" : "I Want Buy This Product"}
            </button>
          </div>
        </div>

        {/* Modal */}
        <BidModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={product}
          onBidSuccess={fetchBids} // ✅ refresh bids after placing
        />
      </div>

      {/* Bids Section */}
      <div>
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mt-10">
          <div className="bids-section">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Bids For This Products:{" "}
              <span className="text-purple-500 font-bold">
                {bids.length.toString().padStart(2, "0")}
              </span>
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-md">
                <thead className="bg-gray-50 text-gray-700 text-sm font-medium">
                  <tr>
                    <th className="py-3 px-4 text-left w-[70px]">SL No</th>
                    <th className="py-3 px-4 text-left w-[220px]">Product</th>
                    <th className="py-3 px-4 text-left w-[240px]">Buyer</th>
                    <th className="py-3 px-4 text-left w-[100px]">Bid Price</th>
                    <th className="py-3 px-4 text-left w-[160px]">Actions</th>
                  </tr>
                </thead>

                <tbody className="text-gray-700 text-sm">
                  {bids.map((bid, index) => (
                    <tr
                      key={bid._id}
                      className="border-t hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-3 px-4">{index + 1}</td>

                      {/* Product Column */}
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={image}
                            alt={title}
                            className="w-10 h-10 rounded-md object-cover bg-gray-100"
                          />
                          <div>
                            <p className="font-medium text-gray-800">{title}</p>
                            <p className="text-xs text-gray-500">
                              ${price_min}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Seller Column */}
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={bid.buyer_image}
                            alt={bid.buyer_name}
                            className="w-8 h-8 rounded-full object-cover bg-gray-100"
                          />
                          <div>
                            <p className="font-medium text-gray-800">
                              {bid.buyer_name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {bid.buyer_email}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Bid Price */}
                      <td className="py-3 px-4 font-semibold text-gray-800">
                        ${bid.bid_price}
                      </td>

                      {/* Action Buttons */}
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <button className="bg-green-100 text-green-700 px-3 py-1.5 rounded-md text-xs font-medium hover:bg-green-200 transition">
                            Accept Offer
                          </button>
                          <button className="bg-red-100 text-red-700 px-3 py-1.5 rounded-md text-xs font-medium hover:bg-red-200 transition">
                            Reject Offer
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
