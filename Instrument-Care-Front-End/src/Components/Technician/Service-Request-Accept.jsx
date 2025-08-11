import React from "react";

export default function ServiceRequestAccept({
  formData = {
    ownerEmail: "jspshehan@gmail.com",
    yourEmail: "",
    subject: "",
    message: "",
  },
  onChange = () => {},
  onBack = () => {},
  onSend = () => {},
}) {
  return (
    <div className="rounded-lg p-4 sm:p-6 w-full  mx-auto shadow bg-[#ffffff80]">

      {/* Section Title */}
      <h3 className="mb-2 font-bold text-lg">Response to the Service Request</h3>
      <hr className="mb-4" />

      {/* Form */}
      <form className="space-y-4">
        {/* Owner Email */}
        <div className="flex flex-col sm:flex-row sm:items-center">
          <label className="font-semibold w-full sm:w-1/3 mb-1 sm:mb-0">
            Owner Email Address
          </label>
          <input
            type="email"
            value={formData.ownerEmail}
            onChange={(e) => onChange("ownerEmail", e.target.value)}
            className="border rounded px-2 py-1 w-full sm:w-2/3"
          />
        </div>

        {/* Your Email */}
        <div className="flex flex-col sm:flex-row sm:items-center">
          <label className="font-semibold w-full sm:w-1/3 mb-1 sm:mb-0">
            Your Email Address
          </label>
          <input
            type="email"
            value={formData.yourEmail}
            onChange={(e) => onChange("yourEmail", e.target.value)}
            className="border rounded px-2 py-1 w-full sm:w-2/3"
          />
        </div>

        {/* Subject */}
        <div className="flex flex-col sm:flex-row sm:items-center">
          <label className="font-semibold w-full sm:w-1/3 mb-1 sm:mb-0">
            Subject
          </label>
          <input
            type="text"
            value={formData.subject}
            onChange={(e) => onChange("subject", e.target.value)}
            className="border rounded px-2 py-1 w-full sm:w-2/3"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col sm:flex-row sm:items-start">
          <label className="font-semibold w-full sm:w-1/3 mb-1 sm:mb-0">
            Message
          </label>
          <textarea
            rows="5"
            value={formData.message}
            onChange={(e) => onChange("message", e.target.value)}
            className="border rounded px-2 py-1 w-full sm:w-2/3"
          />
        </div>

        <hr className="mt-4" />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-3 mt-4">
          <button
            type="button"
            onClick={onBack}
            className="bg-red-500 hover:bg-red-400 text-white px-6 py-2 rounded-md font-semibold"
          >
            Back
          </button>
          <button
            type="button"
            onClick={onSend}
            className="bg-green-500 hover:bg-green-400 text-white px-6 py-2 rounded-md font-semibold"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
