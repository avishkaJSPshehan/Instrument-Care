import React from "react";
import profileImage from '../../assets/images/profile-image.jpeg';

export default function ProfileImageUpload() {
  return (
    <div className="flex flex-col items-center p-4">
      {/* Profile Image Placeholder */}
      <div className="border rounded-full flex items-center justify-center mb-2">
        
        <img
            src={profileImage}
            alt="Profile"
            className="h-28 w-28 rounded-full object-cover cursor-pointer border border-gray-300 hover:scale-105 transition-transform"
        />
      </div>
      <p className="text-sm text-gray-500">Brows Image From your computer</p>
      <button className="mt-2 bg-cyan-600 text-white px-4 py-2 rounded">
        Upload Image
      </button>
    </div>
  );
}
