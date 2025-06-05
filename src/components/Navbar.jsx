import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./Navbar/ResponsiveMenu";
import { NavLink, Link } from "react-router";

export default function Navbar() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-5 px-16">
          <div>Minana</div>
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
                      Contact
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
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  );
}
