"use client";
import ThreeDot from "@/svg/CloudStorage/ThreeDot";
import React, { useRef, useEffect, useState } from "react";

const ActionMenuForClientManagement = ({
  options,
  threeDotVertical = false,
}: {
  options: {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
    textColor?: string;
  }[];
  threeDotVertical?: boolean;
}) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // console.log(options);

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
      {/* Three Dot Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="focus:outline-none flex flex-col items-start"
      >
        <div className="flex items-start">
          <ThreeDot isVertical={threeDotVertical} />
        </div>
      </button>

      {/* Action Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-full right-0 mt-2 w-[150px] max-w-[200px] border border-[#E4E4E7] bg-white shadow-lg rounded-[8px] z-10"
        >
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                setIsOpen(false);
                option.onClick();
              }}
              style={{ color: option.textColor || "#52525B" }}
              className={`flex items-center p-2 text-[14px] font-[600] hover:bg-[#F0F5FF] w-full text-left rounded-[8px]`}
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

export default ActionMenuForClientManagement;
