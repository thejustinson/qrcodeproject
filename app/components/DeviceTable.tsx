import {
  RiDeleteBin5Line,
  RiExternalLinkLine,
  RiPencilLine,
  RiMore2Line
} from "@remixicon/react";
import React, { useState } from "react";
import data from "@/app/assets/dummy.json";

const DeviceTable = () => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const toggleRowExpand = (index: number) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  return (
    <div className="p-4">
      {/* Desktop Table */}
      <div className="hidden lg:block overflow-hidden rounded-lg shadow-sm max-h-[calc(100vh-252px)] overflow-y-auto">
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

      {/* Mobile List View */}
      <div className="lg:hidden space-y-4">
        {data.map((device, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-sm border border-neutral-200"
          >
            <div 
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggleRowExpand(index)}
            >
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-neutral-200 border border-neutral-100 rounded-md"></div>
                <div>
                  <h3 className="font-semibold text-neutral-900">{device.Name}</h3>
                  <p className="text-xs text-neutral-500">{device.ENG_NO}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <RiMore2Line size={20} className="text-neutral-500" />
              </div>
            </div>

            {/* Expandable Details */}
            {expandedRow === index && (
              <div className="p-4 pt-0 space-y-2 text-sm text-neutral-600">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-xs text-neutral-500">Category</p>
                    <p>{device.S_Sub_Catg_Name || device.Category}</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">Asset Code</p>
                    <p>{device["Asset Code"]}</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">Model</p>
                    <p>{device["Model"]}</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">Location</p>
                    <p>{device.LOCATION}</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">Room</p>
                    <p>{device.Room}</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">Attached To</p>
                    <p>{device.ATTACH}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center pt-2 mt-2 border-t border-neutral-200">
                  <div className="flex space-x-3">
                    <a
                      href={`/device/${device.ENG_NO}`}
                      className="text-neutral-500 hover:text-blue-600 flex items-center space-x-1"
                    >
                      <RiExternalLinkLine size={18} />
                      <span className="text-xs">View</span>
                    </a>
                    <button className="text-neutral-500 hover:text-blue-600 flex items-center space-x-1">
                      <RiPencilLine size={18} />
                      <span className="text-xs">Edit</span>
                    </button>
                    <button className="text-neutral-500 hover:text-red-600 flex items-center space-x-1">
                      <RiDeleteBin5Line size={18} />
                      <span className="text-xs">Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeviceTable;