"use client";
import { ModalCrossButton } from "@/svg/Crms/CommonModalIcons";
import { DeleteIcon, EditIcon } from "@/svg/Hrms/CommonIcons";
import React, { useEffect, useRef } from "react";

const NoticeDetailsModal = ({ notice, onClose, isOpen, isPageView }: any) => {
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
    if (isOpen && !isPageView) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose, isPageView]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 ${
        isPageView ? "static bg-transparent p-8" : ""
      }`}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-[12px] shadow-lg w-auto sm:w-[490px] lg:w-[622px] 2xl:w-[840px] p-6 max-h-[400px] overflow-auto"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[20px] font-[600] text-[#292D32]">
            {notice.title || "Notice Details"}
          </h2>

          <div className="flex space-x-2">
            <button onClick={() => console.log("Edit", notice.id)}>
              <EditIcon />
            </button>
            <button onClick={() => console.log("Delete", notice.id)}>
              <DeleteIcon />
            </button>
            {!isPageView && (
              <button onClick={onClose}>
                <ModalCrossButton />
              </button>
            )}
          </div>
        </div>

        <div>
          <p className="text-[#324054] text-[16px] font-[600] mb-2">
            Description
          </p>
          <p className="text-[#6F6F6F] text-[16px] font-[500] mb-6">
            {notice.description || "No description available."}
          </p>

          <div className="grid grid-cols-2 gap-y-4">
            <div>
              <p className="text-[#324054] text-[14px] font-[600]">Posted By</p>
              <p className="text-[#54595E] text-[16px] font-[500]">
                {notice.postedBy || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-[#324054] text-[16px] font-[600]">
                Posted Date
              </p>
              <p className="text-[#54595E] text-[16px] font-[500]">
                {notice.postedDate || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-[#324054] text-[16px] font-[600]">Type</p>
              <span className="text-[14px] font-[600] bg-[#E9ECF8] text-[#6962FE] px-2 py-1 rounded-[5px]">
                {notice.noticeType || "General"}
              </span>
            </div>
            <div>
              <p className="text-[#324054] text-[16px] font-[600]">Status</p>
              <span
                className={`text-[14px] font-[600] px-2 py-1 rounded-[5px] ${
                  notice.status === "Published"
                    ? "bg-[#F0FFF1] text-[#065F46]"
                    : "bg-[#FEE2E2] text-[#991B1B]"
                }`}
              >
                {notice.status || "Draft"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetailsModal;
