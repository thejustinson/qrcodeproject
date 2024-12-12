import Image from 'next/image'
import React from 'react'

const DeviceHead = () => {
  return (
    <div className='px-5 mt-5 flex justify-between items-center'>
        <div className='flex gap-3 items-center'>
            <div className='p-1 border border-neutral-400 w-[100px] h-[100px] rounded-full'>
                <Image src={"/images/laptop.jpg"} alt={"Image"} width={200} height={200} className='w-full h-full cover rounded-full'/>
            </div>
            <div>
                <p className='font-bold text-xl'>HP PAVILION X360 CONVERTIBLE</p>
                <p className='text-neutral-500'>Laptop</p>
            </div>
        </div>

        <div className='p-2 bg-white rounded-md'>
            <Image src={"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=http://localhost:3000/device/5CG0278BYS"} alt='QRCode' width={100} height={100} unoptimized/>
        </div>
    </div>
  )
}

export default DeviceHead