import React from "react";

export default function Tabs() {
  return (
    <div className="flex gap-6 border-b mb-4">
      <button className="pb-2 border-b-2 border-black font-semibold">Overview</button>
      <button className="pb-2 text-gray-600">Service Request</button>
      <button className="pb-2 text-gray-600">Works</button>
    </div>
  );
}
