"use client";
import React, { useState, useRef, useEffect } from "react";

interface DropdownMenuButtonProps {
  label: string;
  icon: React.ReactNode;
  arrow: React.ReactNode;
  options: { label: string; icon: React.ReactNode; onClick: () => void }[];
}

const DropdownMenuButton: React.FC<DropdownMenuButtonProps> = ({
  label,
  icon,
  arrow,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const closeDropdown = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleDropdown}
        className="flex gap-2 px-1 py-2 text-[16px]  font-[500] bg-[#E9ECF8] shadow-sm rounded-md text-[#2377FC] items-center"
      >
        {icon}
        {label}
        {arrow}
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full mt-1 bg-white border border-[#E4E4E7] shadow-lg rounded-[8px] w-40 sm:w-48 z-50">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={option.onClick}
              className="flex items-center gap-2 w-full px-2 py-1 sm:px-4 sm:py-2 text-left hover:bg-[#F8F8F8] focus:outline-none text-[12px] sm:text-[14px] font-[600] text-[#52525B] rounded-[8px]"
            >
              {option.icon}
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenuButton;
