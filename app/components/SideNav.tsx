"use client"

import React from 'react';
import { RiAddCircleLine, RiAdminLine, RiMacbookLine, RiCloseLine } from "@remixicon/react";

interface SideNavOptions {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void,
    onItemSelect?: (label: string) => void
}

const SideNav = ({isOpen, setIsOpen, onItemSelect}:SideNavOptions) => {
  const navItems = [
    { icon: RiMacbookLine, label: 'Devices', active: true },
    { icon: RiAddCircleLine, label: 'Add New', active: false },
    { icon: RiAdminLine, label: 'Admins', active: false }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: { label: string, active: boolean }) => {
    // Update active state and call onItemSelect if provided
    onItemSelect && onItemSelect(item.label);
  };

  return (
    <>    
      {/* Side Navigation */}
      <div 
        className={`
          fixed 
          top-0 left-0 bottom-0 
          w-64 max-w-[80%]
          bg-white border-r border-neutral-200 
          transform transition-transform duration-300 ease-in-out
          md:relative md:translate-x-0  
          z-50
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          overflow-y-auto
          shadow-lg md:shadow-none
        `}
        aria-label="Side Navigation"
      >
        <div className="flex items-center justify-between p-5 sticky top-0 bg-white z-10">
          <h2 className="text-lg font-bold truncate">QRCode Project</h2>
          <button 
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Close navigation menu"
          >
            <RiCloseLine size={24} />
          </button>
        </div>

        <nav className="p-5">
          <ul className="space-y-2 text-sm">
            {navItems.map((item, index) => (
              <li 
                key={index}
                onClick={() => handleItemClick(item)}
                className={`
                  flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer
                  transition duration-200 group
                  ${item.active 
                    ? 'bg-neutral-100 text-neutral-900' 
                    : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-800'}
                `}
                role="menuitem"
                aria-selected={item.active}
              >
                <item.icon 
                  className={`
                    shrink-0 
                    ${item.active 
                      ? 'text-neutral-900' 
                      : 'text-neutral-600 group-hover:text-neutral-800'}
                  `} 
                  size={20}  // Consistent icon size
                />
                <span className="flex-grow truncate">{item.label}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 md:hidden z-40"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default SideNav;