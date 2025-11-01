import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#051529] text-gray-300 py-10 px-6 rounded-xl mt-15">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-700 pb-8">
        {/* Brand */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold text-white">
            Smart<span className="text-purple-500">Deals</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            Your trusted marketplace for authentic local products. Discover the
            best deals from across Bangladesh.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-purple-400">
                All Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Login
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Register
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-purple-400">
                Electronics
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Fashion
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Home & Living
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Groceries
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Support */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact & Support</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MdEmail className="text-purple-400 text-lg" />
              support@smartdeals.com
            </li>
            <li className="flex items-center gap-2">
              <MdPhone className="text-purple-400 text-lg" />
              +880 123 456 789
            </li>
            <li className="flex items-start gap-2">
              <MdLocationOn className="text-purple-400 text-lg mt-1" />
              123 Commerce Street, <br /> Dhaka, Bangladesh
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-6">
        {/* Copyright */}
        <p className="text-sm text-gray-400 mb-3 md:mb-0">
          © 2025 SmartDeals. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-4 text-gray-400">
          <a href="#" className="hover:text-purple-400">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-purple-400">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-purple-400">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
