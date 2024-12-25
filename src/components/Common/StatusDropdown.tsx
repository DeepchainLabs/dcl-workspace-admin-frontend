"use client";
import React, { useState, useRef, useEffect } from "react";

interface Status {
  label: string;
  style: string;
}

interface StatusDropdownProps {
  statuses: Status[];
  defaultStatus?: string;
}

const StatusDropdown: React.FC<StatusDropdownProps> = ({
  statuses,
  defaultStatus = statuses[0]?.label || "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(defaultStatus);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleStatusChange = (status: string) => {
    setSelectedStatus(status);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const currentStatus = statuses.find(
    (status) => status.label === selectedStatus
  );

  return (
    <div ref={containerRef} className="relative inline-block">
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className={`flex items-center px-3 gap-3 py-1 text-[14px] font-[500] rounded-[8px] focus:outline-none border ${
          currentStatus?.style || ""
        }`}
      >
        {selectedStatus}
        <svg
          width="11"
          height="6"
          viewBox="0 0 11 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.65918 1.5L6.36629 4.79289C5.97576 5.18342 5.3426 5.18342 4.95207 4.79289L1.65918 1.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute left-0 mt-2 bg-white border border-[#f3f4f6] rounded shadow-lg z-50 text-[14px] font-[500]"
          style={{
            minWidth: buttonRef.current
              ? buttonRef.current.offsetWidth
              : "100px",
          }}
        >
          {statuses.map((status) => (
            <button
              key={status.label}
              onClick={() => handleStatusChange(status.label)}
              className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
                status.label === selectedStatus
                  ? `${status.style} font-[500]`
                  : "text-gray-700"
              }`}
            >
              {status.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default StatusDropdown;