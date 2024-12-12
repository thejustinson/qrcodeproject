import {
  RiDeleteBin5Line,
  RiExternalLinkLine,
  RiPencilLine,
} from "@remixicon/react";
import React from "react";
import data from "@/app/assets/dummy.json";

const DeviceTable = () => {
  return (
    <div className="p-4">
      <div className="overflow-hidden rounded-lg shadow-sm max-h-[calc(100vh-252px)] overflow-y-scroll">
        <table className="w-full border-collapse bg-white text-sm">
          <thead className="bg-neutral-900 text-white text-left">
            <tr>
              <th className="p-2 rounded-tl-lg"></th>
              <th className="p-2">Eng No</th>
              <th className="p-2">Category</th>
              <th className="p-2">Asset Code</th>
              <th className="p-2">Model</th>
              <th className="p-2">Name</th>
              <th className="p-2">Location</th>
              <th className="p-2">Room</th>
              <th className="p-2">Attached To</th>
              <th className="p-2 rounded-tr-lg"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((device, index) => (
              <tr
                key={index}
                className="hover:bg-neutral-50 transition-colors border-b border-b-neutral-200 text-neutral-600"
              >
                <td className="p-2 ">
                  <div className="w-5 h-5 bg-neutral-200 border border-neutral-100 rounded-md"></div>
                </td>
                <td className="p-2">{device.ENG_NO}</td>
                <td className="p-2">
                  {device.S_Sub_Catg_Name || device.Category}
                </td>
                <td className="p-2">{device["Asset Code"]}</td>
                <td className="p-2">{device["Model"]}</td>
                <td className="p-2">{device.Name}</td>
                <td className="p-2">{device.LOCATION}</td>
                <td className="p-2">{device.Room}</td>
                <td className="p-2">{device.ATTACH}</td>
                <td className="p-2 text-neutral-500">
                  <div className="flex gap-2">
                    <a
                      href={`/device/${device.ENG_NO}`}
                      className="text-neutral-500 hover:text-blue-600"
                    >
                      <RiExternalLinkLine size={18} />
                    </a>
                    <button className="text-neutral-500 hover:text-blue-600">
                      <RiPencilLine size={18} />
                    </button>
                    <button className="text-neutral-500 hover:text-red-600">
                      <RiDeleteBin5Line size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeviceTable;
