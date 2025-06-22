import React from "react";
import gallery1 from "../assets/images/gallery1.jpeg";
import gallery3 from "../assets/images/gallery3.jpeg";
import gallery4 from "../assets/images/gallery4.jpeg";
import gallery5 from "../assets/images/gallery5.jpeg";

export default function AboutTeam() {
  return (
    <>
      <div className="my-10 px-4 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex-1 h-0.5 bg-red-300 max-w-xs"></div>
          <h1 className="text-2xl uppercase text-red-500 px-4 md:px-8 text-center">
            Our Team
          </h1>
          <div className="flex-1 h-0.5 bg-red-300 max-w-xs"></div>
        </div>

        {/* Text and Image Side-by-Side (Stacks on Mobile) */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <div className="w-full md:w-1/2 flex flex-col gap-4 py-6 text-gray-700 leading-loose">
            <p>
              Minana Services is the result of more than 10 years of teamwork. A
              professional management team runs production operations, as well
              as agricultural and fair trade projects on the ground. Today the
              team is made up of 5 highly motivated professionals working in
              agriculture, accounting, HR management, and technology, headed by
              Managing Director Philomena Asante.
            </p>
            <p>
              We are invested in the well-being and success of our team and in
              creating a culture of belonging where everyone is welcome and
              where inclusion and diversity are valued and respected.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="object-cover w-full h-[20rem] md:h-[25rem] rounded-xl"
              src={gallery3}
              alt="about image"
            />
          </div>
        </div>

        
        <div className="flex flex-col md:flex-row py-12 gap-4">
          <img
            src={gallery4}
            alt="about image"
            className="object-cover rounded-xl h-[20rem] md:h-[25rem] w-full md:w-1/2"
          />
          <img
            src={gallery1}
            alt="about image"
            className="object-cover rounded-xl h-[20rem] md:h-[25rem] w-full md:w-1/2"
          />
        </div>

        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <div className="w-full md:w-1/2">
            <img
              src={gallery5}
              alt="about image"
              className="object-cover w-full h-[20rem] md:h-[23rem] rounded-xl"
            />
          </div>
          <p className="py-8 text-gray-700 leading-loose w-full md:w-1/2">
            We believe in building a company where every team member, partner,
            and stakeholder receives a fair share of the rewards. Our commitment
            goes beyond profit. We are deeply driven by purpose. We strive to
            create lasting, positive impact in the communities we serve,
            empowering people, supporting local livelihoods, and contributing to
            sustainable growth. At the heart of our work is a strong belief in
            shared success, collaboration, and integrity.
          </p>
        </div>
      </div>
    </>
  );
}
