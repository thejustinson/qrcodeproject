"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  RiCloseLine,
  RiSearchLine,
  RiUserLine,
  RiNotification2Line,
  RiArrowDownSLine,
  RiMenuLine,
} from "@remixicon/react";

interface DashboardTopProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onSearch?: (query: string) => void;
}

const DashboardTop: React.FC<DashboardTopProps> = ({ 
  isOpen, 
  setIsOpen, 
  onSearch 
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle search with optional callback
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch && onSearch(query);
  };

  // Dropdown menu items
  const dropdownItems = [
    { label: 'Profile', action: () => {/* Handle profile action */}, className: '' },
    { label: 'Settings', action: () => {/* Handle settings action */}, className: '' },
    { label: 'Logout', action: () => {/* Handle logout action */}, className: 'text-red-600' }
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className="
        sticky top-0 z-40 
        w-full p-4 
        border-b border-neutral-200 
        bg-white/80 backdrop-blur-md 
        flex items-center justify-between gap-4
      "
    >
      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden p-2 rounded-full hover:bg-neutral-100"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        {isOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
      </button>

      {/* Search Bar */}
      <div className="flex-grow max-w-md">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <RiSearchLine className="text-neutral-400" size={20} />
          </div>
          <input
            type="text"
            placeholder="Search projects, devices, or reports"
            value={searchQuery}
            onChange={handleSearch}
            className="
              w-full pl-10 pr-4 py-2 
              bg-neutral-100 rounded-full 
              text-sm 
              focus:outline-none focus:ring-2 focus:ring-blue-500/50
              transition duration-200
            "
            aria-label="Search"
          />
        </div>
      </div>

      {/* User Profile and Notifications */}
      <div className="flex items-center gap-4">
        {/* Notification Icon */}
        <button
          className="
            relative p-2 rounded-full 
            hover:bg-neutral-100 
            transition duration-200
            focus:outline-none focus:ring-2 focus:ring-blue-500/50
          "
          aria-label="Notifications"
        >
          <RiNotification2Line size={20} className="text-neutral-600" />
          <span
            className="
              absolute top-0 right-0 
              bg-red-500 text-white 
              text-[10px] 
              rounded-full 
              w-4 h-4 
              flex items-center justify-center
            "
          >
            3
          </span>
        </button>

        {/* User Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="
              flex items-center gap-2 
              hover:bg-neutral-100 
              p-2 rounded-full 
              transition duration-200
              focus:outline-none focus:ring-2 focus:ring-blue-500/50
            "
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
          >
            <div className="bg-neutral-200 border border-neutral-300 w-10 h-10 flex justify-center items-center rounded-full">
              <RiUserLine className="text-neutral-600" />
            </div>
            <div className="hidden md:flex flex-col items-start">
              <span className="text-sm font-semibold">Admin</span>
              <span className="text-xs text-neutral-500">
                admin@qrcodeproject.com
              </span>
            </div>
            <RiArrowDownSLine
              className={`
                text-neutral-600 
                transition duration-200 
                ${isDropdownOpen ? "rotate-180" : ""}
              `}
            />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div
              className="
                absolute right-0 top-full mt-2 
                w-56 
                bg-white 
                border border-neutral-200 
                rounded-lg 
                shadow-lg 
                z-50
                overflow-hidden
              "
              role="menu"
              aria-orientation="vertical"
            >
              <div className="py-1">
                {dropdownItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={item.action}
                    className={`
                      w-full text-left 
                      px-4 py-2 
                      text-sm text-neutral-700 
                      hover:bg-neutral-100 
                      focus:outline-none focus:bg-neutral-100
                      ${item.className}
                    `}
                    role="menuitem"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardTop;