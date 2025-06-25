import React from "react";
import about3 from "../assets/images/about3.jpeg";
import about1 from "../assets/images/about1.jpeg";
import about4 from "../assets/images/about4.jpeg";
import about5 from "../assets/images/about5.jpeg";
import about6 from "../assets/images/about6.jpeg";
import about7 from "../assets/images/about7.jpeg";
import about8 from "../assets/images/about8.jpeg";
import about9 from "../assets/images/about9.jpeg";
import about10 from "../assets/images/about10.jpeg";
import about11 from "../assets/images/about11.jpeg";

const Palm = [
  {
    image: about1,
    description: "Palm oil",
  },
  {
    image: about4,
    description: "Harvesting palm fruits",
  },
  {
    image: about5,
    description: "Transporting palmnut fruits from farm",
  },
  {
    image: about6,
    description: " Separating fruits and stalk.",
  },
  {
    image: about7,
    description: "Cleaning of palm fruits",
  },
  {
    image: about8,
    description: "Steaming of palm fruits",
  },
  {
    image: about9,
    description: "Extraction of liquid from palmnuts",
  },
  {
    image: about10,
    description: "Separating oil from liquid by boiling",
  },
  { image: about11, description: "By-products" },
];

export default function AboutPalm() {
    return (
      <div className="my-12 px-4 md:px-8 lg:px-16 ">
        <div className="flex items-center justify-center mb-12">
          <div className="flex-1 h-0.5 bg-red-300 max-w-xs"></div>
          <h1 className="text-2xl uppercase text-red-500 px-4 text-center">
            Our Products
          </h1>
          <div className="flex-1 h-0.5 bg-red-300 max-w-xs"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <div className="w-full md:w-1/2 py-5 md:px-6 px-3  shadow-sm bg-white bg-base-100 rounded-xl transition-transform duration-300 hover:-translate-y-2">
            <h2 className="text-2xl pb-5">Palm Oil</h2>

            <p className="text-gray-700 leading-loose ">
              Minana services employs a unique process for the production of our
              fair trade and organic palm oil. It is modeled after the
              village-style oil production common in the Ashanti Region of
              Ghana. It deliberately avoids large-scale plantations and heavy
              machinery. Everything begins in the fields where our organic palm
              bunches are harvested and then taken to our oil mill in Juaso. The
              following gallery provides an overview of our production of red
              palm oil.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <img
              className="object-cover w-full h-[18rem] md:h-[20rem] rounded-xl"
              src={about3}
              alt="about image"
            />
          </div>
        </div>

        {/* Palm Oil Gallery Grid */}
        <div className="w-full py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Palm.map((item, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.description}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                  <h3 className="text-white text-lg md:text-xl font-semibold text-center px-4">
                    {item.description}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
      
}
