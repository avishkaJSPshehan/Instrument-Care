import React from "react";
import { Link } from "react-router-dom";

export default function Tabs() {
  return (
    <div className="flex gap-6 border-b mb-4">

      <Link to="/user/view-profile">
        <button className="pb-2 border-b-2 border-black font-semibold">Overview</button>
      </Link>

      <Link to="/user/service-request">
        <button className="pb-2 text-gray-600">Service Request</button>
      </Link>

      <Link to="">
        <button className="pb-2 text-gray-600">Works</button>
      </Link>
    </div>
  );
}
