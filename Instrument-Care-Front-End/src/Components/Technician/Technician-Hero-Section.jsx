import React from "react";

export default function TechnicianHeader() {
  return (
    <div
      className="relative w-full bg-cover bg-center py-24 px-4 md:px-10 text-white"
      style={{
        backgroundImage: "url('src/assets/images/about-hero-bg-2.jpg')", // <-- Replace with your actual path
      }}
    >
        
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Meet Our Technicians
        </h2>
        <h3 className="text-lg md:text-2xl text-orange-400 font-semibold mb-6">
          Skilled professionals, passionate about precision and performance.
        </h3>
        <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto">
          Our technicians play a key role in delivering high-quality modifications and maintenance. 
          Below are some of the most recent experts who joined our team — trained, experienced, and ready to serve.
        </p>
      </div>
    </div>
  );
}
