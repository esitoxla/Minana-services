import React from "react";
import gallery6 from "../assets/images/gallery6.jpeg";
import gallery7 from "../assets/images/gallery7.jpeg";
import image1 from "../assets/images/cannedPalmoil.jpeg";
import product2 from "../assets/images/product2.jpeg";
import gallery8 from "../assets/images/gallery8.jpeg";
import gallery9 from "../assets/images/gallery9.jpeg";

const gallery = [
  {
    image: gallery6,
    title: "Palm oil",
  },
  {
    image: gallery7,
    title: "Minana Crop Axis",
  },
  {
    image: gallery8,
    title: "Palm Stearin",
  },
  {
    image: gallery9,
    title: "Palm free fatty acids",
  },
  {
    image: image1,
    title: "Canned Palm oil",
  },
  {
    image: product2,
    title: "Bottled Palm oil",
  },
];

export default function GalleryImages() {
  return (
    <>
      <div className="w-full md:px-20  md:py-12 px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg md:w-[350px] "
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-fit max-w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold text-center px-4">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
