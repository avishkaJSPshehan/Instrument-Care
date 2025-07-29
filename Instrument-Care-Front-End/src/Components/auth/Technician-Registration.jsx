import React, { useEffect, useState } from "react";

export default function TechnicianAuthPage() {
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden m-0 p-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('../../src/assets/images/hero-bg-5.jpg')",
        }}
      ></div>

      {/* Main Container */}
      <div className="relative z-10 transform -translate-y-18 w-full max-w-6xl md:h-[700px] flex flex-col md:flex-row bg-gray-50 bg-opacity-90 rounded-none md:rounded-2xl shadow-2xl transition-all duration-500 ease-in-out">

        {/* Orange Side */}
        <div
          className={`hidden md:flex w-1/2 h-full flex-col justify-center items-center px-12 text-white rounded-2xl ${
            isRegistering ? 'order-2 md:order-1' : 'order-1'
          }`}
          style={{
            background: "linear-gradient(135deg, #e78f0c, #e78f0c)",
            // borderTopLeftRadius: isRegistering ? "0px" : "0px",
            // borderBottomLeftRadius: isRegistering ? "0px" : "0px",
            borderTopRightRadius: isRegistering ? "120px" : "120px",
            borderBottomRightRadius: isRegistering ? "120px" : "120px",
          }}
        >
          <h2 className="text-4xl font-bold mb-3 font-poppins">
            {isRegistering ? "Join as a Technician" : "Welcome Back"}
          </h2>
          <p className="text-lg text-center mb-8 font-poppins">
            {isRegistering
              ? "Create your profile to start serving instrument owners."
              : "Log in with your technician account to access service requests."}
          </p>
        </div>

        {/* Form Side */}
        <div className={`w-full md:w-1/2 h-full flex flex-col justify-center px-8 py-6 md:px-16 md:py-12 ${isRegistering ? 'order-1' : 'order-2'}`}>
          <h2 className="text-4xl font-bold mb-6 text-center md:text-left font-poppins">
            {isRegistering ? "Technician Registration" : "Technician Login"}
          </h2>

          {isRegistering ? (
            <>
              <input type="text" placeholder="Full Name" className="w-full mb-4 p-4 border rounded-md text-md font-poppins" />
              <input type="email" placeholder="Email" className="w-full mb-4 p-4 border rounded-md text-md font-poppins" />
              <input type="text" placeholder="Phone Number" className="w-full mb-4 p-4 border rounded-md text-md font-poppins" />
              <input type="text" placeholder="Technical Skills" className="w-full mb-4 p-4 border rounded-md text-md font-poppins" />
              <input type="password" placeholder="Password" className="w-full mb-4 p-4 border rounded-md text-md font-poppins" />
              <input type="password" placeholder="Confirm Password" className="w-full mb-4 p-4 border rounded-md text-md font-poppins" />
              <button className="w-full bg-orange-400 text-white py-3 rounded-md text-lg font-semibold font-poppins hover:bg-orange-500">
                REGISTER
              </button>
              <p className="text-sm text-center mt-4 font-poppins">
                Already have an account?{" "}
                <button onClick={() => setIsRegistering(false)} className="text-blue-600 hover:underline">
                  Login here
                </button>
              </p>
            </>
          ) : (
            <>
              <input type="email" placeholder="Email" className="w-full mb-4 p-4 border rounded-md text-md font-poppins" />
              <input type="password" placeholder="Password" className="w-full mb-4 p-4 border rounded-md text-md font-poppins" />
              <p className="text-sm text-right text-blue-600 mb-5 cursor-pointer font-poppins">Forget Your Password?</p>
              <button className="w-full bg-orange-400 text-white py-3 rounded-md text-lg font-semibold font-poppins hover:bg-orange-500">
                SIGN IN
              </button>
              <p className="text-sm text-center mt-4 font-poppins">
                Don’t have an account?{" "}
                <button onClick={() => setIsRegistering(true)} className="text-blue-600 hover:underline">
                  Register as Technician
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
