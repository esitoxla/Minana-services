import React from "react";
import { FaArrowRight } from "react-icons/fa";
import HeroCarousel from '../Hero/HeroCarousel'



export default function Hero() {
  return (
    <>
      <section className="overflow-x-hidden">
        <HeroCarousel>
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[450px] relative m-auto xl:px-12 py-20">
            {/* info info */}
            <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left px-6 sm:px-10 md:px-16 py-16 leading-relaxed xl:leading-normal ">
              <div className="relative">
                <div className="absolute left-0 top-1/2 w-18 h-0.5 bg-green-500"></div>
                <p className="text-white  text-xl xl:max-w-[500px] pl-20">
                  Since 2014
                </p>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-white leading relaxed xl:leading-normal">
                Minana Services Limited
              </h1>
              <p className="text-white text-base xl:max-w-[500px]">
                Quality supplier of edible oils in Ghana.
              </p>
              <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer w-[170px] mt-4">
                <FaArrowRight /> View Products
              </button>
            </div>
          </div>
        </HeroCarousel>
      </section>
    </>
  );
}
