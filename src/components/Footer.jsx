import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 ">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 text-sm px-16">
        {/* About Us */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold ">About Us</h3>
          <p>
            We are currently offering our prompt services in numerous countries
            and utilizing the best resources to boost productivity.
          </p>
          <div className="flex gap-5 mt-5">
            <FaFacebookF className="hover:text-green-400 cursor-pointer" />
            <FaTwitter className="hover:text-green-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-green-400 cursor-pointer" />
            <FaYoutube className="hover:text-green-400 cursor-pointer" />
          </div>
        </div>

        {/* Main Menu */}
        <div>
          <h3 className="font-bold mb-4">Main Menu</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <Link to="/" className="hover:text-green-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/product" className="hover:text-green-400">
                Products
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-green-400">
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* Product Categories */}
        <div>
          <h3 className="font-bold mb-4">Product Categories</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="#" className="hover:text-green-400">
                Palm oil
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400">
                Coconut oil
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400">
                Palm kernel oil
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold ">Contact Us</h3>
          <p>
            <strong>Address:</strong> Juaso Asante Akyem, Ashanti Region, Ghana.
          </p>
          <p>
            <strong>Phone:</strong>+233 54 719 3895
          </p>
          <p>
            <strong>Email:</strong> Philomena@minana.com
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-green-600 text-center py-4 mt-10 text-white text-sm">
        Copyright © 2025 MINANA SERVICES LIMITED | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
