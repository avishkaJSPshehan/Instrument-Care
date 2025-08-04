import React, { useState } from "react";
import ProfileImageUpload from "./ProfileImageUpload";
import ProfileFormLeft from "./ProfileFormLeft";
import ProfileFormRight from "./ProfileFormRight";

export default function EditProfileForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    personalNumber: "",
    bio: "",
    experiences: "",
    certificates: "",
    specialistInstrument: "",
    workingNumber: "",
    designation: "",
    workingHours: "",
    workingType: "",
    hourlyCharge: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#ffffff80] p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Edit Profile</h2>

      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProfileImageUpload />
        <ProfileFormLeft formData={formData} handleChange={handleChange} />
        <ProfileFormRight formData={formData} handleChange={handleChange} />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-4">
        <button className="bg-transparent text-cyan-600 font-bold py-2 px-6 rounded">
          Clear
        </button>
        <button className="bg-cyan-600 text-white font-bold py-2 px-6 rounded">
          Update Profile
        </button>
      </div>
    </div>
  );
}
