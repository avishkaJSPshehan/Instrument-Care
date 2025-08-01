import React from "react";

export default function ServiceRequestTable_Request({ data, onView }) {
  return (
    <div className="bg-[#ffffff80] rounded-lg p-4">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-lg">Pending Service Request</h3>
        <button className="bg-teal-500 text-white px-3 py-1 rounded text-sm font-bold">
          View all
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2">Instrument</th>
              <th className="p-2">Owner</th>
              <th className="p-2">Start Date</th>
              <th className="p-2">Contact Number</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((req, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{req.instrument}</td>
                <td className="p-2">{req.owner}</td>
                <td className="p-2">{req.startDate}</td>
                <td className="p-2">{req.contact}</td>
                <td className="p-2">
                  <button
                    className="bg-teal-500 text-white px-4 py-1 rounded text-sm"
                    onClick={() => onView(req)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
