import React from 'react'
import productSum from "../assets/images/productSum.jpeg"
import { Link } from 'react-router';
import { FaArrowRight } from "react-icons/fa";

export default function ProductSum() {
  return (
    <div className="py-8  px-16 lg:px-24 leading-normal ">
      <div className="flex items-center justify-center mb-12">
        <div className="flex-1 h-0.5 bg-red-300 max-w-xs"></div>
        <h1 className="text-2xl  uppercase text-red-500  px-8">Products</h1>
        <div className="flex-1 h-0.5 bg-red-300 max-w-xs"></div>
      </div>

      <div className="flex w-full gap-10">
        <div className="w-[50%]">
          <img
            className="object-cover w-[40rem] h-[20rem] rounded-xl"
            src={productSum}
            alt="product summary"
          />
        </div>

        <div className="w-[50%] flex flex-col gap-5 py-5">
          <p className="text-gray-700 ">
            Our range of premium oils includes Crude Palm Oil, Refined Palm Oil,
            Palm Kernel Oil, and Palm Stearin, each processed to meet diverse
            culinary and industrial needs.
          </p>

          <p className="text-gray-700 ">
            We also offer Palm Fatty Acid Distillate (PFAD), ideal for soap and
            cosmetic production, as well as high-quality Coconut Oil, known for
            its versatility and health benefits. Whether for cooking,
            manufacturing, or skincare, our oils deliver purity, performance,
            and value.
          </p>
          <Link to="/product">
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer w-[170px] mt-4">
              {" "}
              <FaArrowRight /> View Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
