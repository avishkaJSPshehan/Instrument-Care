import React, { useEffect } from "react";
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
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100 ">
      <div className="w-full max-w-6xl h-full md:h-[700px] flex flex-col md:flex-row m-0 p-0 rounded-2xl shadow-2xl bg-white">

        {/* Left Panel - Sign In */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center p-10 md:p-16">
          <h2 className="text-4xl font-bold mb-8 text-center md:text-left">Sign In</h2>

          {/* Social Logins */}
          <div className="flex gap-5 justify-center md:justify-start mb-6">
            <button className="p-3 border rounded-full"><FcGoogle size={24} /></button>
            <button className="p-3 border rounded-full text-blue-600"><FaFacebookF size={18} /></button>
            <button className="p-3 border rounded-full text-black"><FaGithub size={20} /></button>
            <button className="p-3 border rounded-full text-blue-700"><FaLinkedinIn size={20} /></button>
          </div>

          <p className="text-md text-gray-500 mb-5 text-center md:text-left">
            or use your email password
          </p>

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-4 border rounded-md text-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-4 border rounded-md text-md"
          />

          <p className="text-sm text-right text-blue-600 mb-5 cursor-pointer">Forget Your Password?</p>

          <button className="w-full bg-green-600 text-white py-3 rounded-md text-lg font-semibold">
            SIGN IN
          </button>
        </div>

        {/* Right Panel - Greeting (hidden on mobile) */}
        <div
          className="hidden md:flex w-1/2 h-full flex-col justify-center items-center px-12 text-white rounded-2xl"
          style={{
            background: "linear-gradient(135deg, #3083DC, #3298BA)",
            borderTopLeftRadius: "120px",
            borderBottomLeftRadius: "120px"
          }}
        >
          <h2 className="text-4xl font-bold mb-3">Hello, Friend!</h2>
          <p className="text-lg text-center mb-8">
            Register with your personal details to use all of site features
          </p>
          <button className="border border-white px-8 py-2 rounded-md hover:bg-white hover:text-blue-600 transition text-lg">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
}
