import React from "react";
import { IoLocationOutline } from "react-icons/io5";


export default function ContactDetails() {
  
  

  return (
    <div className="py-4 px-4 bg-gray-100">
      <div className="px-4 py-10 md:px-8 lg:px-16">
        <div className="flex items-center justify-center mb-12">
          <div className="flex-1 h-0.5 bg-red-300 max-w-xs"></div>
          <h1 className="text-2xl text-red-500 uppercase px-4">Contact</h1>
          <div className="flex-1 h-0.5 bg-red-300 max-w-xs"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <form
              method="post"
              action="https://formspree.io/f/myzjoped"
              className="flex flex-col gap-6 "
            >
              <input
                type="text"
                placeholder="Name"
                name="name"
                required
                className="bg-white w-full h-[50px] px-4 rounded "
              />

              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                className="bg-white w-full h-[50px] px-4 rounded "
              />

              <textarea
                placeholder="Message"
                name="message"
                className="bg-white h-[9rem] px-4 py-4 rounded  w-full"
              />
              <button
              type="submit"
                className="bg-red-500 w-full sm:w-[170px] px-4 py-2 rounded text-white cursor-pointer 
                         transition duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
            
          </div>

          {/* Contact Info + Map */}
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            <div className="flex items-start gap-2">
              <span className="text-3xl text-red-500">
                <IoLocationOutline />
              </span>
              <div>
                <span className="font-semibold">Location</span>
                <p className="text-sm">
                  Juaso Asante Akyem, Ashanti Region, Ghana.
                </p>
              </div>
            </div>
            <div className="h-[200px] md:h-[14rem] w-full rounded overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31707.847725620628!2d-1.1437371801257663!3d6.586979910822348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfd95061d09330ab%3A0xb928ab112c516da0!2sJuaso!5e0!3m2!1sen!2sgh!4v1749691496081!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
