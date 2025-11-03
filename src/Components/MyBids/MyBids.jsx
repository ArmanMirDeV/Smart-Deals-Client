import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

const MyBids = () => {
  const { user } = useContext(AuthContext);
  const [bids, setBids] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      // Fetch all bids made by the user
      fetch(`http://localhost:3000/bids?email=${user.email}`)
        .then((res) => res.json())
        .then(async (bidsData) => {
          // Fetch product details for each bid
          const enrichedBids = await Promise.all(
            bidsData.map(async (bid) => {
              try {
                const res = await fetch(
                  `http://localhost:3000/products/${bid.product}`
                );
                const productData = await res.json();
                return { ...bid, productData };
              } catch (err) {
                console.error("Product fetch error:", err);
                return bid; // fallback if product fetch fails
              }
            })
          );

          setBids(enrichedBids);
          setLoading(false);
        });
    }
  }, [user?.email]);

  const handleDeleteBid = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/bids/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Bid has been deleted.",
                icon: "success",
                timer: 1500,
              });

              const remainingBids = bids.filter((bid) => bid._id !== _id);
              setBids(remainingBids);
            }
          });
      }
    });
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500 text-lg">
        Loading your bids...
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        My Bids:{" "}
        <span className="text-purple-600 font-extrabold">{bids.length}</span>
      </h2>

      <div className="overflow-x-auto mx-auto w-11/12 lg:w-10/12">
        <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <thead className="bg-gray-100">
            <tr className="text-gray-700 text-left">
              <th className="px-4 py-3 text-sm font-semibold">SL No</th>
              <th className="px-4 py-3 text-sm font-semibold">Product</th>
              <th className="px-4 py-3 text-sm font-semibold">Seller</th>
              <th className="px-4 py-3 text-sm font-semibold">Bid Price</th>
              <th className="px-4 py-3 text-sm font-semibold">Status</th>
              <th className="px-4 py-3 text-sm font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody>
            {bids.map((bid, index) => {
              const product = bid.productData || {};
              return (
                <tr
                  key={bid._id}
                  className="border-t hover:bg-gray-50 transition duration-200"
                >
                  <td className="px-4 py-3 text-gray-700 text-sm">
                    {index + 1}
                  </td>

                  {/* Product */}
                  <td className="px-4 py-3 flex items-center gap-3">
                    <img
                      src={product.image || "https://via.placeholder.com/40"}
                      alt={product.title}
                      className="w-10 h-10 rounded-md object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-800">
                        {product.title || "Unknown Product"}
                      </p>
                      <p className="text-sm text-gray-500">
                        ${product.price_min || "--"}
                      </p>
                    </div>
                  </td>

                  {/* Seller */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={
                          product.seller_image ||
                          "https://via.placeholder.com/40"
                        }
                        alt="Seller"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-gray-800 font-medium">
                          {product.seller_name || "N/A"}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {product.email || ""}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Bid Price */}
                  <td className="px-4 py-3 text-gray-700 font-semibold">
                    ${bid.bid_price}
                  </td>

                  {/* Status */}
                  <td className="px-4 py-3">
                    <span className="bg-yellow-400/20 text-yellow-700 text-sm font-semibold px-3 py-1 rounded-full">
                      {bid.status || "Pending"}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleDeleteBid(bid._id)}
                      className="border border-red-400 text-red-500 text-sm font-semibold px-3 py-1 rounded-md hover:bg-red-500 hover:text-white transition"
                    >
                      Remove Bid
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBids;
