import React from "react";
import {
  FaStar,
  FaRegStar,
  FaSmile,
  FaGrinStars,
  FaLaughBeam,
} from "react-icons/fa";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Gifty Agyeman",
      product: "Palm oil",
      emoji: "smile",
      rating: 5,
      comment:
        "Our school has been buying from them for the  last one year for our beans and plantain and other recipes.It's well packaged and has a flavourful taste that our school children love so much. They also have a good customer service and delivery service. It's really great to patronise their business. I never have any problem at all.",
    },
    {
      name: "Frances Adu",
      product: "Coconut oil",
      emoji: "cool",
      rating: 5,
      comment:
        "I have used the coconut oil and I must say it's exactly how i wanted it, very clear, no cloudiness and no stale smell. I will always fall on you anytime i need some. I am satisfied with your product. Thank you",
    },
    {
      name: "Yaw Mintah",
      product: "Palm Kernel oil",
      emoji: "laugh",
      rating: 4,
      comment:
        "I have used the palm kernel oil and I must say it's just what I was looking for — pure, clean, and free from any unpleasant smell. The quality is top-notch with no cloudiness or impurities. I am really satisfied with this product and will definitely come back for more. Thank you for such great quality!",
    },
  ];

  const emojiMap = {
    smile: <FaSmile className="text-3xl text-yellow-500" />,
    cool: <FaGrinStars className="text-3xl text-yellow-500" />,
    laugh: <FaLaughBeam className="text-3xl text-yellow-500" />,
  };

  return (
    <>
      <section className="py-12 px-4 bg-gray-50 text-center">
        <div className="flex items-center justify-center mb-12">
          <div className="flex-1 h-0.5 bg-red-300 max-w-xs"></div>
          <h1 className="text-2xl md:text-4xl uppercase text-red-500  px-8">
            Testimonials
          </h1>
          <div className="flex-1 h-0.5 bg-red-300 max-w-xs"></div>
        </div>

        <h1 className="text-2xl mb-6">
          See what our customers say about our edible oils made from fresh palm
          fruits and coconuts
        </h1>

        <ul className="flex flex-wrap justify-center gap-6">
          {testimonials.map((testimonial, index) => (
            <li
              key={index}
              className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm text-left transition-transform duration-300 hover:-translate-y-2 "
            >
              <div className="flex gap-5 items-center">
                <div className="mb-2">{emojiMap[testimonial.emoji]}</div>
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-green-600 font-medium mb-2">
                    {testimonial.product}
                  </p>
                </div>
              </div>

              <div className="flex text-yellow-400 mb-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
                {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                  <FaRegStar key={i} />
                ))}
              </div>
              <p className="text-gray-700 text-sm">{testimonial.comment}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
