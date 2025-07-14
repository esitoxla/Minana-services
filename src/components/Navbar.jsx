import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { NavLink, Link } from "react-router";
import { AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import logo from "../assets/images/mina.logo1.png";
import { MdShoppingCartCheckout } from "react-icons/md";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-5 px-16 h-[4rem]">
          <div>
            <img src={logo} alt="logo img" />
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              <li>
                <NavLink to="/">
                  {({ isActive }) => (
                    <span
                      className={`relative ${isActive ? "text-red-500" : ""}`}
                    >
                      Home
                      {isActive && (
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                        </div>
                      )}
                    </span>
                  )}
                </NavLink>
              </li>

              <li>
                <NavLink to="/about">
                  {({ isActive }) => (
                    <span
                      className={`relative ${isActive ? "text-red-500" : ""}`}
                    >
                      About us
                      {isActive && (
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                        </div>
                      )}
                    </span>
                  )}
                </NavLink>
              </li>

              <li>
                <NavLink to="/product">
                  {({ isActive }) => (
                    <span
                      className={`relative ${isActive ? "text-red-500" : ""}`}
                    >
                      Products
                      {isActive && (
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                        </div>
                      )}
                    </span>
                  )}
                </NavLink>
              </li>

              <li>
                <NavLink to="/testimonial">
                  {({ isActive }) => (
                    <span
                      className={`relative ${isActive ? "text-red-500" : ""}`}
                    >
                      Testimonials
                      {isActive && (
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                        </div>
                      )}
                    </span>
                  )}
                </NavLink>
              </li>

              <li>
                <NavLink to="/gallery">
                  {({ isActive }) => (
                    <span
                      className={`relative ${isActive ? "text-red-500" : ""}`}
                    >
                      Gallery
                      {isActive && (
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                        </div>
                      )}
                    </span>
                  )}
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact">
                  {({ isActive }) => (
                    <span
                      className={`relative ${isActive ? "text-red-500" : ""}`}
                    >
                      Get in touch
                      {isActive && (
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                        </div>
                      )}
                    </span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart" className="flex items-center gap-2">
                  {({ isActive }) => (
                    <span
                      className={`relative ${
                        isActive ? "text-red-500" : ""
                      } flex items-center gap-2`}
                    >
                      <MdShoppingCartCheckout /> Cart
                      {isActive && (
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                        </div>
                      )}
                    </span>
                  )}
                </NavLink>
              </li>
            </ul>
          </div>
          {/* hamburgar */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              <FaTimes className="text-2xl" />
            ) : (
              <MdMenu className="text-4xl" />
            )}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {open && (
            <div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.3 }}
              className="absolute  top-20 left-0 w-full h-screen z-20 md:hidden"
            >
              <div className="text-xl font-semibold uppercase bg-green-500 text-white py-5 m-6 rounded-3xl">
                <ul className="flex flex-col justify-center items-center gap-10">
                  <li>
                    <Link to="/" onClick={() => setOpen(false)}>
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link to="/about" onClick={() => setOpen(false)}>
                      About us
                    </Link>
                  </li>

                  <li>
                    <Link to="/product" onClick={() => setOpen(false)}>
                      Products
                    </Link>
                  </li>

                  <li>
                    <Link to="/testimonial" onClick={() => setOpen(false)}>
                      Testimonials
                    </Link>
                  </li>

                  <li>
                    <Link to="/gallery" onClick={() => setOpen(false)}>
                      Gallery
                    </Link>
                  </li>

                  <li>
                    <Link to="/contact" onClick={() => setOpen(false)}>
                      Contact
                    </Link>
                  </li>

                  <li>
                    <Link to="/cart" onClick={() => setOpen(false)}>
                      <span className="flex gap-2 items-center font-medium">
                        {" "}
                        <MdShoppingCartCheckout /> Cart
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </AnimatePresence>
      </nav>
      {/* <ResponsiveMenu open={open} setOpen={setOpen} /> */}
    </>
  );
}
