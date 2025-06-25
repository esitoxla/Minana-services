import React from "react";
import coconut2 from "../assets/images/coconut2.1.png";
import coconut3 from "../assets/images/coconut3.1.jpg";
import coconut4 from "../assets/images/coconut4.1.jpg";

export default function AboutCoconut() {
  return (
    <div className="my-12 px-4 md:px-8 lg:px-16 ">
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        <div className="w-full md:w-1/2">
          <img
            src={coconut3}
            alt="coconut image"
            className="object-cover w-full h-[20rem] md:h-[20rem] rounded-xl"
          />
        </div>
        <div className="py-4  w-full md:w-1/2 md:px-6 px-3  shadow-sm bg-white bg-base-100 rounded-xl transition-transform duration-300 hover:-translate-y-2">
          <h2 className="text-2xl pb-5">Coconut Oil</h2>
          <p className="text-gray-700 leading-loose">
            Coconut oil is extracted from the meat of mature coconuts, using
            methods like cold pressing for virgin oil or drying and pressing for
            refined oil. Rich in lauric acid, it offers antimicrobial and
            moisturizing benefits. It is widely used in cooking, skincare,
            haircare, and natural health products. Its pleasant flavor, high
            smoke point, and long shelf life make it a versatile oil for both
            culinary and cosmetic purposes.
          </p>
        </div>
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
