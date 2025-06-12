import React, { useEffect, useState } from 'react'
import gallery1 from "../assets/images/gallery1.jpeg"
import gallery2 from "../assets/images/gallery2.jpeg"
import gallery3 from "../assets/images/gallery3.jpeg"
import gallery4 from "../assets/images/gallery4.jpeg"
import gallery5 from "../assets/images/gallery5.jpeg"

const images = [
  {
    image: gallery1,
    title: "The Dedicated team ",
    description: "We are a focused, committed to achieving our goals.",
  },
  {
    image: gallery2,
    title: "The Dedicated team ",
    description: "We are a focused, committed to achieving our goals.",
  },
  {
    image: gallery3,
    title: "The Dedicated team ",
    description: "We are a focused, committed to achieving our goals.",
  },
  {
    image: gallery4,
    title: "The Dedicated team ",
    description: "We are a focused, committed to achieving our goals.",
  },
  {
    image: gallery5,
    title: "The Dedicated team ",
    description: "We are a focused, committed to achieving our goals.",
  },
];

export default function GalleryCarousel() {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
          setCurrent((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [])


  return (
    <>
      <div className="flex items-center justify-center pb-12 pt-12">
        <div className="flex-1 h-0.5 bg-red-300 max-w-xs"></div>
        <h1 className="text-2xl uppercase text-red-500  px-8">
          Gallery
        </h1>
        <div className="flex-1 h-0.5 bg-red-300 max-w-xs"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto p-4">
        <div className="relative h-[30rem] rounded-xl overflow-hidden shadow-lg">
          <img
            src={images[current].image}
            alt={images[current].title}
            className="w-fit h-full object-cover m-auto transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/5 flex items-end p-6">
            <div>
              <h2 className="text-white text-2xl font-semibold mb-2">
                {images[current].title}
              </h2>
              <p className="text-white text-sm">
                {images[current].description}
              </p>
            </div>
          </div>

          {/* Dot Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  index === current ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
