import React from "react";
import DeviceTable from "./DeviceTable";

const DashboardBody = () => {
  return (
    <div className="w-full">
      <div className="py-10 border-b px-5">
        <h1 className="text-xl font-bold">Devices</h1>
        <p className="text-sm text-neutral-500">Manage all devices from here</p>
      </div>
      <DeviceTable />
    </div>
  );
};

export default DashboardBody;
