import React from 'react'

export default function AboutCompany() {
  return (
    <div className="py-8  md:px-16 lg:px-24 leading-normal px-8 bg-white">
      <div className="flex items-center justify-center mb-12">
        <div className="flex-1 h-0.5 bg-red-300 max-w-xs"></div>
        <h1 className="text-2xl  text-red-500 uppercase px-8">Our Company</h1>
        <div className="flex-1 h-0.5 bg-red-300 max-w-xs"></div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-6 my-9 text-gray-700">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 flex-1 border border-gray-300">
          <h3 className="text-xl font-semibold mb-4 text-green-500">
            Overview
          </h3>
          <p>
            Minana Services, founded in 2014, is a palm oil production company
            engaged in cultivating oil palm and processing palm fruits into
            crude palm oil (CPO). The company offers a variety of products
            including palm oil, coconut oil, palm kernel oil, palm stearin, and
            by-products like palm kernel shells and fiber. With a strong focus
            on sustainability, Minana Services supports over 150 farmers in the
            Ashanti, Eastern, and Central regions by providing a reliable market
            for their palm and coconut harvests.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 flex-1 border border-gray-300">
          <h3 className="text-xl font-semibold mb-4 text-green-500">Mission</h3>
          <p>
            Our aim is to unlock the potential of the local economy by working
            with rural farmers to grow the finest coconuts and palm fruits. This
            allows us to produce high-quality, all-natural edible products for
            customers around the world. We are driven by a relentless passion to
            meet the needs of tomorrow's market with innovative,
            forward-thinking products. We remain open and adaptable to whatever
            the future may bring.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 flex-1 border border-gray-300">
          <h3 className="text-xl font-semibold mb-4 text-green-500">Vision</h3>
          <p>
            Minana Services empowers rural women by supporting their processing
            work and helping them earn sustainable incomes. The company also
            plans to expand into value-added products like soaps and biofuels to
            serve multiple industries while promoting environmentally friendly
            solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
