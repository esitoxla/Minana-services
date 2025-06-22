import React from "react";
import coconut2 from "../assets/images/coconut2.png";
import coconut3 from "../assets/images/coconut3.jpg";
import coconut4 from "../assets/images/coconut4.jpg";

export default function AboutCoconut() {
  return (
    <div className="my-12 px-4 md:px-8 lg:px-16">
      <div className="flex items-center justify-center mb-12">
        <div className="flex-1 h-0.5 bg-red-300 max-w-xs"></div>
        <h1 className="text-2xl uppercase text-red-500 px-4 text-center">
          Coconut Oil
        </h1>
        <div className="flex-1 h-0.5 bg-red-300 max-w-xs"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-center">
        <div className="w-full md:w-1/2">
          <img
            src={coconut3}
            alt="coconut image"
            className="object-cover w-full h-[20rem] md:h-[20rem] rounded-xl"
          />
        </div>
        <p className="py-8 text-gray-700 leading-loose w-full md:w-1/2">
          Coconut oil is extracted from the meat of mature coconuts, using
          methods like cold pressing for virgin oil or drying and pressing for
          refined oil. Rich in lauric acid, it offers antimicrobial and
          moisturizing benefits. It is widely used in cooking, skincare,
          haircare, and natural health products. Its pleasant flavor, high smoke
          point, and long shelf life make it a versatile oil for both culinary
          and cosmetic purposes.
        </p>
      </div>

      <div className="flex flex-col md:flex-row py-12 gap-4">
        <img
          src={coconut4}
          alt="about image"
          className="object-cover rounded-xl h-[20rem] md:h-[25rem] w-full md:w-1/2"
        />
        <img
          src={coconut2}
          alt="about image"
          className="object-cover rounded-xl h-[20rem] md:h-[25rem] w-full md:w-1/2"
        />
      </div>
    </div>
  );
}
