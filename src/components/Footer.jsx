import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  
} from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 ">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 text-sm px-10">
        {/* About Us */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold ">About Us</h3>
          <p>
            We are currently offering our prompt services in numerous countries
            and utilizing the best resources to boost productivity.
          </p>
          <div className="flex gap-5 mt-5 text-[19px]">
            <a
              href="https://www.facebook.com/share/1HhdZcHmv8/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-green-400 cursor-pointer" />
            </a>

            <a
              href="https://www.instagram.com/minana_edibleoil?igsh=NXc1MjVoNDV5aGR2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-green-400 cursor-pointer" />
            </a>

            <a
              href="https://www.linkedin.com/company/minana-services-agric/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="hover:text-green-400 cursor-pointer" />
            </a>
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
              <Link to="/about/palm" className="hover:text-green-400">
                Palm oil
              </Link>
            </li>
            <li>
              <Link to="/about/coconut" className="hover:text-green-400">
                Coconut oil
              </Link>
            </li>
            <li>
              <Link to="/about/kernel" className="hover:text-green-400">
                Palm kernel oil
              </Link>
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
      <div className="bg-green-600 text-center py-4 mt-10 text-white text-sm px-8">
        Copyright © 2025 MINANA SERVICES LIMITED | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
