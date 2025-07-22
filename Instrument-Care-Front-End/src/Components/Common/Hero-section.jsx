import React from "react";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{ backgroundImage: `url('src/assets/images/hero-bg.jpg')` }}
    >
      {/* Overlay with blur */}
      <div className="absolute inset-0 bg-white/0 backdrop-blur-xs z-0" />

      {/* Content Layer */}
      <div className="relative z-10 max-w-[1740px] mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Text Content */}
        <div className="w-full lg:w-1/2">
          <span className="bg-orange-200 text-orange-500 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
            READY TO FIND YOUR TECHNICIAN
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6 font-poppins">
            A small business <br /> is only as good <br /> as its tools.
          </h1>
          <p className="text-gray-600 text-lg mb-8 font-poppins">
            We're different. Flex is the only saas business platform that lets you run your business on one platform, seamlessly across all digital channels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-400 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-500 transition">
              Request a Demo
            </button>
            <button className="bg-white border border-gray-300 text-gray-800 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
              Sign Up
            </button>
          </div>
        </div>

        {/* Right Image Content */}
        <div className="w-full lg:w-2xl">
          <img
            src="src/assets/images/hero-image-2.png"
            alt="Office Team"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
