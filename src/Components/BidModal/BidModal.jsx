import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

const BidModal = ({ isOpen, onClose, product, onBidSuccess }) => {
  if (!isOpen) return null;
  const { _id: productId } = product;

  const { user } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const bid = form.bid.value;

    console.log(name, email, bid, productId);

    const newBid = {
      product: productId,
      buyer_name: name,
      buyer_email: email,
      buyer_image: user.photoURL,
      bid_price: bid,
      status: "pending",
      created_at: new Date(),
    };

    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after placing bid", data);
        if (data.insertedId) {
          Swal.fire({
            title: "Bid Placed Successfully",
            icon: "success",
            timer: 2000,
          });
          onBidSuccess?.(); // ✅ Refresh bids in ProductDetails
        }
      })
      .catch((err) => console.error("Bid Error:", err));

    onClose();
  };

  return (
    <div>
      <div className="fixed inset-0 flex justify-center items-center z-50 bg-transparent bg-opacity-40">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 relative border border-gray-200">
          <h2 className="text-xl font-semibold mb-5 text-center text-gray-800">
            Give Seller Your Offered Price
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Buyer Info */}
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Buyer Name
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user.displayName}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-purple-400 transition"
                  required
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Buyer Email
                </label>
                <input
                  type="email"
                  defaultValue={user.email}
                  name="email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-purple-400 transition"
                  required
                />
              </div>
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Buyer Image URL
              </label>
              <input
                type="url"
                readOnly
                name="imageUrl"
                defaultValue={user.photoURL}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-purple-400 transition"
              />
            </div>

            {/* Price Offer */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Place Your Price
              </label>
              <input
                type="number"
                name="bid"
                placeholder="e.g. 25,000 BDT"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-purple-400 transition"
              />
            </div>

            {/* Contact Info */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Contact Info
              </label>
              <input
                type="text"
                name="contact"
                placeholder="e.g. +8801777XXXXXX"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-purple-400 transition"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-3 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
              >
                Submit Bid
              </button>
            </div>
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default BidModal;
