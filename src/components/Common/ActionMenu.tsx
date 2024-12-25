"use client";
import React, { useState, useRef, useEffect } from "react";

interface ActionMenuProps {
  options: {
    label: string;
    onClick: () => void;
    icon: React.ReactNode;
  }[];
}

const ActionMenu = ({ options }: ActionMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="focus:outline-none"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_3425_32373)">
            <path
              d="M11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19C13 18.7348 12.8946 18.4804 12.7071 18.2929C12.5196 18.1054 12.2652 18 12 18C11.7348 18 11.4804 18.1054 11.2929 18.2929C11.1054 18.4804 11 18.7348 11 19Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 5C11 5.26522 11.1054 5.51957 11.2929 5.70711C11.4804 5.89464 11.7348 6 12 6C12.2652 6 12.5196 5.89464 12.7071 5.70711C12.8946 5.51957 13 5.26522 13 5C13 4.73478 12.8946 4.48043 12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289C11.1054 4.48043 11 4.73478 11 5Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_3425_32373">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-full right-0 mt-2 max-w-[95px] sm:max-w-[100px] md:max-w-[120px] border border-[#E4E4E7] bg-white shadow-lg rounded-[8px] z-10"
        >
          {options.map((option, index) => (
            <button
              key={index}
              onClick={option.onClick}
              className="flex items-center p-2 text-[14px] font-[400] text-[#52525B] hover:bg-gray-100 w-full text-left rounded-[8px]"
            >
              {option.icon}
              <span className="ml-2">{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActionMenu;
