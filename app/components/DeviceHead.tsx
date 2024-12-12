import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'
import data from "@/app/assets/dummy.json"

const DeviceHead = () => {
  // Get the current pathname and extract the device ID
  const pathname = usePathname();
  const deviceId = pathname.split('/').pop(); // Gets the last segment of the URL

  // Find the specific device matching the URL parameter
  const device = data.find(item => item.ENG_NO === deviceId);

  // If no device is found, return null or a placeholder
  if (!device) {
    return null;
  }

  // Determine device icon based on category
  const getDeviceIcon = (category:string) => {
    switch(category.toUpperCase()) {
      case 'LAPTOP':
        return "/images/laptop.jpg";
      case 'DESKTOP':
        return "/images/desktop.jpg";
      case 'PRINTER':
        return "/images/printer.jpg";
      case 'MONITOR':
        return "/images/monitor.jpg";
      case 'TABLET':
        return "/images/tablet.jpg";
      default:
        return "/images/device.jpg";
    }
  };

  return (
    <div className='px-4 md:px-5 mt-5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
      <div className='flex flex-col md:flex-row gap-3 items-center'>
        <div className='p-1 border border-neutral-400 w-20 h-20 md:w-[100px] md:h-[100px] rounded-full'>
          <Image 
            src={getDeviceIcon(device.Category)} 
            alt={`${device.Name} ${device.Model}`} 
            width={200} 
            height={200} 
            className='w-full h-full object-cover rounded-full'
          />
        </div>
        <div className='text-center md:text-left mt-2 md:mt-0'>
          <p className='font-bold text-base md:text-xl'>{device.Model}</p>
          <p className='text-neutral-500 text-sm md:text-base'>{device.S_Sub_Catg_Name}</p>
        </div>
      </div>

      <div className='p-2 bg-white rounded-md mt-4 md:mt-0'>
        <Image 
          src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${process.env.NEXT_PUBLIC_BASE_URL}/device/${deviceId}`} 
          alt='QR Code' 
          width={80} 
          height={80} 
          className='w-20 h-20 md:w-24 md:h-24'
          unoptimized
        />
      </div>
    </div>
  )
}

export default DeviceHead