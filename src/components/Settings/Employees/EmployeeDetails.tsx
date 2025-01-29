"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { hasPermission } from "@/utils/checkPermission";

export default function EmployeeDetails({
  show,
  setShow,
  handleUpdate,
  employeeDetails,
}: {
  show: boolean;
  setShow: (value: boolean) => void;
  handleUpdate: () => void;
  employeeDetails?: any;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (show) {
      setIsOpen(true);
    }
  }, [show]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => {
      setShow(false);
    }, 500);
  }, [setShow]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, closeMenu]);

  // console.log(employeeDetails);

  return (
    <div
      className="w-[calc(100vw)] h-[calc(100vh)] bg-[#00000026] backdrop-blur-[2px] fixed top-0 left-0 overflow-y-hidden transition-transform duration-500 ease-in-out overflow-x-hidden"
      style={{ zIndex: "9999" }}
    >
      <div
        className={`absolute top-0 bottom-0 w-screen h-screen transition-transform duration-500 ease-in-out ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
        style={{ zIndex: "2", right: 0 }}
      >
        <div className="absolute top-0 right-0">
          <div
            ref={modalRef}
            className="w-[350px] md:w-[600px] h-screen bg-[#FFFFFF] px-6 py-4 overflow-y-auto scrollbar-none relative"
            style={{ zIndex: "1" }}
          >
            <div className="flex justify-between">
              <p className="text-[#292D32] text-[20px] font-[600]">
                Employee Profile
              </p>
              <svg
                onClick={closeMenu}
                className="my-auto cursor-pointer"
                width="43"
                height="43"
                viewBox="0 0 43 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9102 15.9099L26.5168 26.5165"
                  stroke="#52525B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.91 26.5165L26.5166 15.9099"
                  stroke="#52525B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="mt-0">
              <div className="flex justify-between items-center">
                <p className="text-[#A5B2CA] text-[16px] font-[500]">
                  General Information
                </p>
                {hasPermission("MANAGE_EMPLOYEES") && (
                  <div
                    onClick={() => {
                      handleUpdate();
                    }}
                    className="flex gap-1 bg-[#F0F5FF] rounded-[8px] px-2 py-0.5 cursor-pointer"
                  >
                    <p className="text-[#2377FC] text-[16px] font-[500]">
                      Edit
                    </p>
                    <svg
                      className="my-auto"
                      width="12"
                      height="13"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.5 1.5H4.5C2 1.5 1 2.5 1 5V8C1 10.5 2 11.5 4.5 11.5H7.5C10 11.5 11 10.5 11 8V7"
                        stroke="#2377FC"
                        strokeWidth="1.125"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.01994 2.01061L4.07994 5.95061C3.92994 6.10061 3.77994 6.39561 3.74994 6.61061L3.53494 8.11561C3.45494 8.66061 3.83994 9.04061 4.38494 8.96561L5.88994 8.75061C6.09994 8.72061 6.39494 8.57061 6.54994 8.42061L10.4899 4.48061C11.1699 3.80061 11.4899 3.01061 10.4899 2.01061C9.48994 1.01061 8.69994 1.33061 8.01994 2.01061Z"
                        stroke="#2377FC"
                        strokeWidth="1.125"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.45508 2.5752C7.79008 3.7702 8.72508 4.7052 9.92508 5.0452"
                        stroke="#2377FC"
                        strokeWidth="1.125"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>

              <div className="mt-4">
                <div className="w-[100px] h-[100px] relative">
                  <Image
                    className="rounded-full"
                    src="/images/dummy_user.png"
                    fill
                    alt=""
                  />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between gap-8">
                  <div className="w-full">
                    <p className="text-[#324054] text-[16px] font-[500] mb-2">
                      First Name
                    </p>
                    <p className="text-[#292D32] text-[16px] font-[500] opacity-70">
                      {employeeDetails?.first_name}
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-[#324054] text-[16px] font-[500] mb-2">
                      Last Name
                    </p>
                    <p className="text-[#292D32] text-[16px] font-[500] opacity-70">
                      {employeeDetails?.last_name}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between gap-8">
                  <div className="w-full">
                    <p className="text-[#324054] text-[16px] font-[500] mb-2">
                      Email Address
                    </p>
                    <p className="text-[#292D32] text-[16px] font-[500] opacity-70">
                      {employeeDetails?.email}
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-[#324054] text-[16px] font-[500] mb-2">
                      Username
                    </p>
                    <p className="text-[#292D32] text-[16px] font-[500] opacity-70">
                      {employeeDetails?.username}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between gap-8">
                  <div className="w-full">
                    <p className="text-[#324054] text-[16px] font-[500] mb-2">
                      Designation
                    </p>
                    <p className="text-[#292D32] text-[16px] font-[500] opacity-70">
                      {employeeDetails?.designation || "N/A"}
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-[#324054] text-[16px] font-[500] mb-2">
                      Phone Number
                    </p>
                    <p className="text-[#292D32] text-[16px] font-[500] opacity-70">
                      {employeeDetails?.phone || "N/A"}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between gap-8">
                  <div className="w-full">
                    <p className="text-[#324054] text-[16px] font-[500] mb-2">
                      Position
                    </p>
                    <p className="text-[#292D32] text-[16px] font-[500] opacity-70">
                      {employeeDetails?.position || "N/A"}
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-[#324054] text-[16px] font-[500] mb-2">
                      Date of Birth
                    </p>
                    <p className="text-[#292D32] text-[16px] font-[500] opacity-70">
                      N/A
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="w-full">
                    <p className="text-[#324054] text-[16px] font-[500] mb-2">
                      Address
                    </p>
                    <p className="text-[#292D32] text-[16px] font-[500] opacity-70">
                      N/A
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
