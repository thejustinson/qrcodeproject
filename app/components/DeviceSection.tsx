import React from "react";
import DeviceHead from "./DeviceHead";

const DeviceSection = () => {
  return (
    <div className="w-full">
      <div className="py-5 border-b px-5 text-sm text-neutral-600">
        <div>
          <span>Devices</span> {">"}{" "}
          <span className="bg-black bg-opacity-20 p-2 rounded-full">
            5CG0278BYS
          </span>
        </div>
      </div>

      <DeviceHead />

      <div className="px-5 py-5">
        <div className="bg-white p-5 border border-neutral-200 rounded-lg">
          <h1 className="text-lg font-bold">Device Details</h1>

          <div className="grid">

          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceSection;
