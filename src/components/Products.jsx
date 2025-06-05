import React from 'react'
import product1 from "../assets/images/cannedPalmoil.jpeg"
import product2 from "../assets/images/product2.jpeg"
import product3 from "../assets/images/product3.jpeg"
import product4 from "../assets/images/product4.jpeg"
import product5 from "../assets/images/product5.jpeg"
import product6 from "../assets/images/product6.jpeg"
import product7 from "../assets/images/product7.jpeg"
import product8 from "../assets/images/product8.jpeg"


export default function Products() {

    const products = [
      {
        name: "Palm oil canned",
        price: "GH₵ 50",
        image: product1 ,
      },
      {
        name: "Palm oil 1L",
        price: "GH₵ 100",
        image: product2 ,
      },
      {
        name: "Palm oil 5L",
        price: "GH₵ 130",
        image: product3 ,
      },
      {
        name: "Palm oil 5L",
        price: "GH₵ 130",
        image: product4 ,
      },
      {
        name: "Coconut oil 1L",
        price: "GH₵ 100",
        image: product5 ,
      },
      {
        name: "Groundnut oil 1L",
        price: "GH₵ 100",
        image: product6 ,
      },
      {
        name: "Palm Kernel oil 1L",
        price: "GH₵ 100",
        image: product7 ,
      },
      {
        name: "Palm Sterin 1L",
        price: "GH₵ 50",
        image: product8 ,
      },

    ];


  return (
    <>
      <section className="py-12 lg:px-16 mx-8 bg-white">
        <div className="flex items-center justify-center mb-12">
          <div className="flex-1 h-0.5 bg-red-500 max-w-xs"></div>
          <h1 className="text-2xl md:text-4xl uppercase text-red-600  px-8">
            Products
          </h1>
          <div className="flex-1 h-0.5 bg-red-500 max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden transition-transform hover:-translate-y-1"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <span className="text-red-800 font-bold">
                    {product.price}
                  </span>
                </div>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-sm text-gray-800 py-2 px-4 rounded-md transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
