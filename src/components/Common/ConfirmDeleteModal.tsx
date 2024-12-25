"use client";
import React, { useEffect, useRef } from "react";

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div ref={modalRef} className="bg-[#F6F6F6] rounded-[12px] w-[300px]">
        <div className="flex justify-between items-center bg-[#F6F6F6] w-full p-4 rounded-[12px]">
          <h2 className="text-[18px] font-[400] text-[#292D32]">
            Deleted Successfully
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9119 5.09082L5.09375 14.909M5.09375 5.09082L14.9119 14.909"
                stroke="#667085"
                strokeWidth="1.63636"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="border border-[#E5E9EB] bg-white p-4">
          <p className="text-[#00000080] text-[14px] font-[400]">
            Deleted Successfully!
          </p>
        </div>
        <div className="flex justify-end space-x-2 mt-4 p-4 pt-0 rounded-[12px] text-[14px] font-[400]">
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-white bg-[#2377FC] rounded-[8px]"
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
