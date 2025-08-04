import React from "react";

export default function ProfileFormLeft({ formData, handleChange }) {
  return (
    <div className="flex flex-col gap-3">
      <label>
        Full Name *
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </label>

      <label>
        Email Address *
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border rounded p-2 w-full"
          placeholder="example@example.com"
        />
      </label>

      <label>
        Physical Address *
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </label>

      <label>
        Personal Number *
        <input
          type="text"
          name="personalNumber"
          value={formData.personalNumber}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </label>

      <label>
        Profile Bio *
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </label>
    </div>
  );
}
