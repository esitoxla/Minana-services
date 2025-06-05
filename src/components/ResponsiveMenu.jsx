import React from "react";
import { motion, AnimatePresence } from "framer-motion";

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
              <li onClick={() => setOpen(false)}>Home</li>
              <li onClick={() => setOpen(false)}>About us</li>
              <li onClick={() => setOpen(false)}>Products</li>
              <li onClick={() => setOpen(false)}>Testimonials</li>
              <li onClick={() => setOpen(false)}>Gallery</li>
              <li onClick={() => setOpen(false)}>Contact</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
