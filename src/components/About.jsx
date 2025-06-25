import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import aboutImg from "../assets/images/hero1.1.png";

export default function About() {
  return (
    <div className="py-8  md:px-16 lg:px-24 leading-normal px-8 bg-gray-50">
      <div className="flex items-center justify-center mb-12">
        <div className="flex-1 h-0.5 bg-red-300 max-w-xs"></div>
        <h1 className="text-2xl  text-red-500 uppercase px-8">About us</h1>
        <div className="flex-1 h-0.5 bg-red-300 max-w-xs"></div>
      </div>

      <div className="flex flex-col-reverse md:flex-row w-full gap-5 ">
        <div className="w-full md:h-[24rem] md:w-1/2 flex flex-col gap-5 px-5 py-3 md:py-5  shadow-sm bg-white bg-base-100 rounded-xl transition-transform duration-300 hover:-translate-y-2">
          <p className="text-gray-700 md:leading-loose ">
            Minana Services is a sustainable palm oil company in Ghana that
            produces palm and coconut-based oils while supporting over 150 rural
            farmers and women. Founded in 2014, it aims to boost the local
            economy and plans to expand into eco-friendly products like soaps
            and biofuels. The company is committed to high-quality, natural
            products for global markets. Its vision is rooted in innovation,
            community empowerment, and environmental responsibility.
          </p>

          <Link to="/about">
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer w-[170px] ">
              {" "}
              <FaArrowRight /> Learn more
            </button>
          </Link>
        </div>

        <div className="w-full md:w-1/2">
          <img
            className="object-cover w-full h-[24rem] rounded-xl"
            src={aboutImg}
            alt="product summary"
          />
        </div>
      </div>
    </div>
  );
}
