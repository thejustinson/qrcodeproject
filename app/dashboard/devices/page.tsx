"use client";

import React, { useState } from "react";
import SideNav from "../../components/SideNav";
import DashboardSection from "../../components/Dashboard";

const Devices = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <div className="w-screen flex bg-neutral-100 h-screen">
      <SideNav setIsOpen={setIsOpen} isOpen={isOpen} />
      <DashboardSection isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Devices;
