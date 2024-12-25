"use client";
import React, { useState, useEffect, useRef } from "react";
import ToggleSwitch from "./ToggleSwitch";

const ManageColumns = ({
  onClose,
  columns,
}: {
  onClose: () => void;
  columns: string[];
}) => {
  const [columnStates, setColumnStates] = useState(
    columns.reduce(
      (acc, column) => {
        acc[column] = true;
        return acc;
      },
      {} as { [key: string]: boolean }
    )
  );

  const popupRef = useRef<HTMLDivElement>(null);

  const handleToggleChange = (columnName: string) => {
    setColumnStates((prevStates) => ({
      ...prevStates,
      [columnName]: !prevStates[columnName],
    }));
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

  return (
    <div
      ref={popupRef}
      className="absolute right-0 top-full mt-2 bg-white border border-[#E4E4E7] w-[200px] md:w-[251px] rounded-xl shadow-lg p-4  max-h-[450px] overflow-auto z-50"
    >
      <div className="justify-between">
        <button onClick={onClose} className="absolute top-5 right-5">
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
        <h2 className="text-[16px] font-[500] text-black mb-4">
          Manage Columns
        </h2>
      </div>
      <div>
        <p className="text-[14px]  text-[#00000080] font-[500]">
          Please drag and drop your column to reorder your table and enable see
          option as you want.
        </p>
      </div>
      <div className="relative my-4">
        <div className="relative">
          <svg
            className="absolute top-[7px] left-2"
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
        </div>
        <input
          type="text"
          placeholder="Search item"
          className="w-full max-w-[220px] max-h-[30px] border border-[#FFFFFF] rounded pl-6 text-[16px] font-[500] bg-[#F6F6F6] placeholder-[#A1A1AA]"
        />
      </div>
      <div>
        {columns.map((column) => (
          <div key={column} className="flex justify-between items-center pb-2">
            <div className="flex items-center gap-2">
              <svg
                className="cursor-grab"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.375 3.67C7.375 3.025 6.815 2.5 6.125 2.5C5.435 2.5 4.875 3.025 4.875 3.67C4.875 4.316 5.435 4.84 6.125 4.84C6.815 4.84 7.375 4.316 7.375 3.67ZM7.375 12.33C7.375 11.684 6.815 11.16 6.125 11.16C5.435 11.16 4.875 11.684 4.875 12.33C4.875 12.975 5.435 13.5 6.125 13.5C6.815 13.5 7.375 12.975 7.375 12.33ZM6.125 6.83C6.815 6.83 7.375 7.355 7.375 8C7.375 8.645 6.815 9.17 6.125 9.17C5.435 9.17 4.875 8.645 4.875 8C4.875 7.355 5.435 6.83 6.125 6.83ZM11.125 3.67C11.125 3.025 10.565 2.5 9.875 2.5C9.185 2.5 8.625 3.025 8.625 3.67C8.625 4.316 9.185 4.84 9.875 4.84C10.565 4.84 11.125 4.316 11.125 3.67ZM9.875 11.16C10.565 11.16 11.125 11.684 11.125 12.33C11.125 12.975 10.565 13.5 9.875 13.5C9.185 13.5 8.625 12.975 8.625 12.33C8.625 11.684 9.185 11.16 9.875 11.16ZM11.125 8C11.125 7.355 10.565 6.83 9.875 6.83C9.185 6.83 8.625 7.355 8.625 8C8.625 8.645 9.185 9.17 9.875 9.17C10.565 9.17 11.125 8.645 11.125 8Z"
                  fill="#A5B2CA"
                />
              </svg>
              <span className="text-[16px] font-[500] text-[#52525B]">
                {column}
              </span>
            </div>
            <ToggleSwitch
              isChecked={columnStates[column]}
              setIsChecked={() => handleToggleChange(column)}
              pairId={column}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageColumns;
