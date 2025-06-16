import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

export default function ResponsiveMenu({ open, setOpen }) {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
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
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
