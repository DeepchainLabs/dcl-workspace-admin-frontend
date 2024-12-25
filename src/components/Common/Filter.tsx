"use client";
import React, { useState, useEffect, useRef } from "react";

interface FilterProps {
  onClose: () => void;
  title: string;
  filterItems: { label: string; options: string[]; hasSearch?: boolean }[];
  placeholderText?: string;
  location?: "left" | "right";
}

const Filter = ({
  onClose,
  title,
  filterItems,
  placeholderText = "Search item",
  location = "right",
}: FilterProps) => {
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const toggleFilter = (filterName: string) => {
    setOpenFilter(openFilter === filterName ? null : filterName);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const positionClass = location === "left" ? "right-0" : "left-0";

  return (
    <div
      ref={popupRef}
      className={`bg-white border border-[#E4E4E7] w-auto min-w-[240px] rounded-[10.55px] shadow-lg absolute ${positionClass} mt-2 max-h-[250px] md:max-h-[450px] overflow-auto z-50 px-1`}
    >
      <button onClick={onClose} className="absolute top-3 right-3 p-2 py-1">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.83203 1.83301L10.1654 10.1663M1.83203 10.1663L10.1654 1.83301"
            stroke="#292D32"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <h2 className="text-[16px] font-[600] text-black px-4 py-3">{title}</h2>
      <div className="text-[#52525B] font-[500] text-[14px] sm:text-[16px] w-full">
        {filterItems.map(({ label, options, hasSearch }) => (
          <div
            key={label}
            className={`${
              openFilter === label ? "bg-[#F8F8F8]" : ""
            } pb-1 pl-2 w-full`}
          >
            <button
              onClick={() => toggleFilter(label)}
              className="flex items-center w-full p-2"
            >
              {openFilter === label ? (
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                >
                  <path
                    d="M7.01253 18.1478C3.67784 18.1478 0.974536 15.4445 0.974536 12.1098L0.974535 6.48993C0.974535 3.15524 3.67784 0.451937 7.01253 0.451936L12.6324 0.451936C15.9671 0.451936 18.6704 3.15524 18.6704 6.48993L18.6704 12.1098C18.6704 15.4445 15.9671 18.1478 12.6324 18.1478L7.01253 18.1478Z"
                    fill="white"
                  />
                  <path
                    d="M5.97656 7.37622L9.82349 11.2231L13.6704 7.37622"
                    stroke="#2563EB"
                    strokeWidth="1.15408"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                >
                  <path
                    d="M18.5802 12.3854C18.5802 15.7201 15.8768 18.4234 12.5422 18.4234L6.9223 18.4234C3.58761 18.4234 0.884308 15.7201 0.884308 12.3854L0.884309 6.76556C0.884309 3.43087 3.58761 0.727568 6.92231 0.727569L12.5422 0.727569C15.8769 0.727569 18.5802 3.43087 18.5802 6.76557L18.5802 12.3854Z"
                    stroke="#E4E4E7"
                    strokeWidth="0.769385"
                  />
                  <path
                    d="M7.80933 13.4221L11.6563 9.5752L7.80933 5.72827"
                    stroke="#2563EB"
                    strokeWidth="1.15408"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              <span>{label}</span>
            </button>
            {openFilter === label && (
              <div className="mt-2 ml-2 p-2 shadow-lg border border-[#E4E4E7] rounded-[6.59px] max-w-[221px] text-[#00000099] space-y-1">
                {hasSearch && (
                  <div className="relative">
                    <svg
                      className="absolute top-[9px] left-2"
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_3417_31307)">
                        <path
                          d="M8.81615 8.57514L10.6632 10.4222L10.0533 11.0321L8.20624 9.18505C7.54212 9.71638 6.69988 10.0342 5.78384 10.0342C3.64125 10.0342 1.90234 8.29532 1.90234 6.15274C1.90234 4.01015 3.64125 2.27124 5.78384 2.27124C7.92643 2.27124 9.66534 4.01015 9.66534 6.15274C9.66534 7.06877 9.34749 7.91101 8.81615 8.57514ZM7.95088 8.25513C8.47825 7.71163 8.80278 6.97027 8.80278 6.15274C8.80278 4.48477 7.45181 3.1338 5.78384 3.1338C4.11588 3.1338 2.7649 4.48477 2.7649 6.15274C2.7649 7.8207 4.11588 9.17168 5.78384 9.17168C6.60137 9.17168 7.34274 8.84714 7.88623 8.31978L7.95088 8.25513Z"
                          fill="#292D32"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3417_31307">
                          <rect
                            width="10.3507"
                            height="10.3507"
                            fill="white"
                            transform="translate(1.03906 1.40869)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <input
                      type="text"
                      placeholder={placeholderText}
                      className="w-full border-0 rounded pl-7 py-1 text-[14px] sm:text-[16px] font-[500] text-[#A1A1AA] mb-2 bg-[#EFEFEF]"
                    />
                  </div>
                )}
                {options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={`${label}-${option}`}
                      className="appearance-none h-3 w-3 border border-[#626262] rounded-[4.52px] bg-white checked:bg-[#2563EB] checked:border-transparent focus:outline-none focus:ring-transparent focus:ring-offset-0 focus:ring-0"
                    />
                    <label
                      htmlFor={`${label}-${option}`}
                      className="text-[#00000099] text-[14px] sm:text-[16px] font-[500]"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-2 border-t border-[#E4E4E7] p-4">
        <button className="text-[#2377FC] px-2 py-2 flex text-center items-center justify-center border border-[#FFFFFF] shadow shadow-[#1E293B1F] rounded-[8.79px] max-h-[26.38px] sm:text-[16px] text-[14px] font-[500] max-w-[63.75px]">
          Reset
        </button>
        <button className="text-[#FFFFFF] px-2 py-2 flex text-center items-center justify-center bg-[#2377FC] shadow shadow-[#1E293B1F] rounded-[8.79px] max-h-[26.38px] sm:text-[16px] text-[14px] font-[500] max-w-[63.75px]">
          Apply
        </button>
      </div>
    </div>
  );
};

export default Filter;
