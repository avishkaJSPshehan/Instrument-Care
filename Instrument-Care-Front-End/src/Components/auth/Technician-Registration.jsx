import React, { useEffect, useState } from "react";

export default function TechnicianAuthPage() {
  const [isRegistering, setIsRegistering] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    password: "",
    confirmPassword: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/technician/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Registration Response:", result);
      // You can show success message or redirect here
    } catch (err) {
      console.error("Registration failed:", err);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/technician/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      const result = await response.json();
      console.log("Login Response:", result);
      // Handle login success, store token, redirect, etc.
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

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
              <input type="text" placeholder="Full Name"
                className="w-full mb-4 p-4 border rounded-md text-md font-poppins"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input type="email" placeholder="Email"
                className="w-full mb-4 p-4 border rounded-md text-md font-poppins"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input type="text" placeholder="Phone Number"
                className="w-full mb-4 p-4 border rounded-md text-md font-poppins"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <input type="text" placeholder="Technical Skills"
                className="w-full mb-4 p-4 border rounded-md text-md font-poppins"
                value={formData.skills}
                onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
              />
              <input type="password" placeholder="Password"
                className="w-full mb-4 p-4 border rounded-md text-md font-poppins"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <input type="password" placeholder="Confirm Password"
                className="w-full mb-4 p-4 border rounded-md text-md font-poppins"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              />
              <button
                onClick={handleRegister}
                className="w-full bg-orange-400 text-white py-3 rounded-md text-lg font-semibold font-poppins hover:bg-orange-500"
              >
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
              <input type="email" placeholder="Email"
                className="w-full mb-4 p-4 border rounded-md text-md font-poppins"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              />
              <input type="password" placeholder="Password"
                className="w-full mb-4 p-4 border rounded-md text-md font-poppins"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              />
              <p className="text-sm text-right text-blue-600 mb-5 cursor-pointer font-poppins">
                Forget Your Password?
              </p>
              <button
                onClick={handleLogin}
                className="w-full bg-orange-400 text-white py-3 rounded-md text-lg font-semibold font-poppins hover:bg-orange-500"
              >
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
