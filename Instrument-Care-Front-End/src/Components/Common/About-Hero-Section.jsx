import React from "react";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative bg-cover bg-center py-20 px-4 overflow-hidden">
      {/* Background Image + Blur */}
      <div className="absolute inset-0">
        <img
          src="src/assets/images/about-hero-bg-2.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-xs" />
      </div>

      {/* Wider Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6">
        <div className="text-center">
            {/* <span className="text-sm font-semibold font-poppins uppercase text-amber-600 bg-orange-200 rounded-full px-4 py-1 inline-block mb-4 tracking-wide">
                ── About Extech ──
            </span> */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[#1B1B1D] font-poppins">
            We Are Revolutionizing <span className="text-[#e78f0c]">Scientific Instrument Repairs</span> Through Technology
          </h1>
          <p className="text-gray-600 mt-4 text-base leading-relaxed max-w-4xl mx-auto font-poppins">
            It’s no longer acceptable for scientific progress to stall due to faulty equipment. Instrument Care System bridges the gap between instrument owners and skilled technicians through an intelligent, secure, and streamlined platform designed for the scientific community.
          </p>
        </div>

        {/* Expanded Features */}
        <div className="mt-10 grid md:grid-cols-2 gap-12 text-left">
          <div className="flex items-start gap-4">
            <div className="bg-[#EEF0FC] p-3 rounded-full">
              <svg className="w-6 h-6 text-[#e78f0c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-md">Mission</h4>
              <p className="text-sm text-gray-600 font-poppins">
                To empower labs, researchers, and organizations by providing a fast, reliable, and transparent system for repairing and maintaining scientific instruments.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-[#EEF0FC] p-3 rounded-full">
              <svg className="w-6 h-6 text-[#e78f0c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 20l9-5-9-5-9 5 9 5z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-md">Vision</h4>
              <p className="text-sm text-gray-600 font-poppins">
                To be the leading digital ecosystem for scientific instrument care, where every broken device finds the right expert, without delay.
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-10 text-center">
          <button className="bg-[#ee8828] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#ff9900] transition mx-auto font-poppins">
            Explore More <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
