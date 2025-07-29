import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function LoginPage() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden m-0 p-0">

      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('../../src/assets/images/hero-bg-5.jpg')",
        }}
      ></div>

      {/* Main Login Container */}
      <div className="relative z-10 transform -translate-y-18 w-full max-w-6xl md:h-[700px] flex flex-col md:flex-row bg-gray-50 bg-opacity-90 rounded-none md:rounded-2xl shadow-2xl">

        {/* Left Panel - Sign In */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-8 py-6 md:px-16 md:py-12">
          <h2 className="text-4xl font-bold mb-6 text-center md:text-left">Sign In</h2>

          <div className="bg-yellow/70 border-2 border-red-500 rounded-xl p-2 flex flex-col items-center text-center">
            <div className="flex flex-col items-center mb-4">
              <h4 className="text-xl font-bold text-gray-900 font-poppins">Important</h4>
            </div>
            <p className="text-sm text-gray-700 font-poppins leading-relaxed">
              This system is integrated with the <b>National Instrument Database (NID)</b>.Use your existing <b>NID username</b> and <b>password</b> to sign in. No need to create a new account.
            </p>
          </div>

          <p className="text-md text-gray-500 mb-4 text-center mt-5 font-poppins">
            Please log in to access the Instrument Care System.
          </p>

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-4 border rounded-md text-md font-poppins"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-4 border rounded-md text-md font-poppins"
          />

          <p className="text-sm text-right text-blue-600 mb-5 cursor-pointer font-poppins">Forget Your Password?</p>

          <button className="w-full bg-orange-400 text-white py-3 rounded-md text-lg font-semibold font-poppins hover:bg-orange-500">
            SIGN IN
          </button>
        </div>

        {/* Right Panel - Greeting (hidden on mobile) */}
        <div
          className="hidden md:flex w-1/2 h-full flex-col justify-center items-center px-12 text-white rounded-2xl"
          style={{
            background: "linear-gradient(135deg, #e78f0c, #e78f0c)",
            borderTopLeftRadius: "120px",
            borderBottomLeftRadius: "120px",
          }}
        >
          <h2 className="text-4xl font-bold mb-3 font-poppins">Join as a Technician</h2>
          <p className="text-lg text-center mb-8 font-poppins">
            Ready to help others and grow your career?
            Set up your technician profile and start accepting service requests!
          </p>
          <Link to="/auth/tech-registration">
            <button className="border border-white px-8 py-2 rounded-md hover:bg-white hover:text-orange-600 transition text-lg font-poppins font-semibold">
              I'M TECHNITIAN
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
