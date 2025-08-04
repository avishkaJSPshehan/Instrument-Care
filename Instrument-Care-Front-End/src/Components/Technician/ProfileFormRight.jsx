import React from "react";

export default function ProfileFormRight({ formData, handleChange }) {
  return (
    <div className="flex flex-col gap-3">
      <label>
        Experiences
        <input
          type="text"
          name="experiences"
          value={formData.experiences}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </label>

      <label>
        Certificates
        <input
          type="text"
          name="certificates"
          value={formData.certificates}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </label>

      <label>
        Specialist Instrument
        <input
          type="text"
          name="specialistInstrument"
          value={formData.specialistInstrument}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </label>

      <label>
        Working Number *
        <input
          type="text"
          name="workingNumber"
          value={formData.workingNumber}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </label>

      <label>
        Current Designation
        <input
          type="text"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </label>

      <label>
        Working Hours
        <input
          type="text"
          name="workingHours"
          value={formData.workingHours}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </label>

      <label>
        Working Type
        <input
          type="text"
          name="workingType"
          value={formData.workingType}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </label>

      <label>
        Hourly Charge
        <input
          type="text"
          name="hourlyCharge"
          value={formData.hourlyCharge}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </label>

      <label>
        Hourly Charge
        <input
          type="text"
          name="hourlyCharge"
          value={formData.hourlyCharge}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </label>
    </div>
  );
}
