"use client";

import React, { useState } from "react";
import SideNav from "../../components/SideNav";
import DashboardTop from "@/app/components/DashboardTop";
import DeviceSection from "@/app/components/DeviceSection";

const Device = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <div className="w-screen flex bg-neutral-100 h-screen">
      <SideNav setIsOpen={setIsOpen} isOpen={isOpen} />
      <div className='w-full h-screen overflow-y-hidden'>
        <DashboardTop isOpen={isOpen} setIsOpen={setIsOpen}/>
        <DeviceSection/>
    </div>
    </div>
  );
};

export default Device;