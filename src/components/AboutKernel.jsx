import React from 'react'
import kernel1 from "../assets/images/kernel1.1.jpeg"
import kernel2 from "../assets/images/kernel2.jpeg"
import kernel3 from "../assets/images/kernel3.png"
import kernel4 from "../assets/images/kernel4.jpeg"

export default function AboutKernel() {
  return (
    <div className="my-12 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        <div className="w-full md:w-1/2">
          <img
            src={kernel3}
            alt="coconut image"
            className="object-cover w-full h-[20rem] md:h-[20rem] rounded-xl"
          />
        </div>
        <div className="w-full md:w-1/2 py-8 md:px-6 px-3  shadow-sm bg-white bg-base-100 rounded-xl transition-transform duration-300 hover:-translate-y-2">
          <h2 className="text-2xl pb-5">Palm Kernel Oil</h2>
          <p className=" text-gray-700 leading-loose ">
            Palm kernel oil is extracted from the seeds of the oil palm fruit
            and is valued for its high lauric acid content, making it stable and
            long-lasting. It is commonly used in soaps, cosmetics, and household
            products due to its moisturizing and foaming qualities, and its
            cost-effective production makes it useful in both industrial and
            domestic settings.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row py-12 gap-4">
        <img
          src={kernel2}
          alt="about image"
          className="object-cover rounded-xl h-[20rem] md:h-[25rem] w-full md:w-1/2"
        />
        <img
          src={kernel4}
          alt="about image"
          className="object-cover rounded-xl h-[20rem] md:h-[25rem] w-full md:w-1/2"
        />
      </div>
    </div>
  );
}
