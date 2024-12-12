import React from "react";
import { usePathname } from "next/navigation";
import DeviceHead from "./DeviceHead";
import data from "@/app/assets/dummy.json";

const DeviceSection = () => {
  // Get the current pathname and extract the device ID
  const pathname = usePathname();
  const deviceId = pathname.split('/').pop(); // Gets the last segment of the URL

  // Find the specific device matching the URL parameter
  const device = data.find(item => item.ENG_NO === deviceId);

  // If no device is found, show an error message
  if (!device) {
    return (
      <div className="w-full">
        <div className="py-5 border-b px-5 text-sm text-neutral-600">
          Device not found
        </div>
      </div>
    );
  }

  // Define the details to display
  const deviceDetails = [
    { label: "Engineering Number", value: device.ENG_NO },
    { label: "Model", value: device.Model },
    { label: "Category", value: device.Category },
    { label: "Sub Category", value: device.S_Sub_Catg_Name },
    { label: "Name", value: device.Name },
    { label: "Asset Code", value: device["Asset Code"] },
    { label: "Location", value: device.LOCATION },
    { label: "Room", value: device.Room || "N/A" },
    { label: "At", value: device.At || "N/A" },
    { label: "Attached To", value: device.ATTACH || "Unassigned" }
  ];

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="py-3 md:py-5 border-b px-4 md:px-5 text-xs md:text-sm text-neutral-600">
        <div className="flex items-center">
          <span className="truncate">Devices</span> 
          <span className="mx-2">{" > "}</span>
          <span className="bg-black bg-opacity-20 px-2 py-1 rounded-full text-xs">
            {deviceId}
          </span>
        </div>
      </div>

      <DeviceHead />

      <div className="px-4 md:px-5 py-5">
        <div className="bg-white p-4 md:p-5 border border-neutral-200 rounded-lg">
          <h1 className="text-base md:text-lg font-bold">Device Details</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-5 gap-x-4 gap-y-4 md:gap-y-5">
            {deviceDetails.map((detail, index) => (
              <div key={index} className="flex flex-col">
                <div className="text-xs md:text-sm text-neutral-500 mb-1">
                  {detail.label}
                </div>
                <div className="text-sm md:text-base truncate">
                  {detail.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceSection;