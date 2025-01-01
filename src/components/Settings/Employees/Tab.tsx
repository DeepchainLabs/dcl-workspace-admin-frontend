"use client";
import React, { useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import AddEmployee from "./AddEmployee";

export default function Tab({
  status,
  view,
}: {
  status: string;
  view: string;
}) {
  const [activeTab, setActiveTab] = React.useState(status);
  const [viewTab, setViewTab] = useState(view);
  const [openAddModal, setOpenAddModal] = React.useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleStatusTypeChange = (value: any) => {
    setActiveTab(value);
    const queryString = createQueryString("status", value);
    router.push(`${pathname}?${queryString}`);
  };

  const handleViewTypeChange = (value: any) => {
    setViewTab(value);
    const queryString = createQueryString("view_type", value);
    router.push(`${pathname}?${queryString}`);
  };

  return (
    <div>
      <div className="mt-2 mb-2 flex justify-between">
        <p className="text-[#222425] text-[24px] font-[700]">Employee List</p>
        <div className="flex gap-8 items-center">
          {/* Hide toggle button on smaller screens */}
          <div className="hidden md:flex border border-[#EBEEF2] rounded-[10px] justify-between h-[44px] w-[280px]">
            <div
              onClick={() => handleViewTypeChange("grid")}
              className={`w-[50%] border-r border-[#E5E9EB] flex justify-center rounded-l-[10px] cursor-pointer ${
                viewTab === "grid" ? "bg-[#F0F5FF]" : "bg-[#FFFFFF]"
              }`}
            >
              <div className="flex justify-center gap-1.5 pt-2">
                <svg
                  className={`${
                    viewTab === "grid" ? "fill-[#2377FC]" : "fill-[#A5B2CA]"
                  }`}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 3V11H11V3H3ZM9 9H5V5H9V9ZM3 13V21H11V13H3ZM9 19H5V15H9V19ZM13 3V11H21V3H13ZM19 9H15V5H19V9ZM13 13V21H21V13H13ZM19 19H15V15H19V19Z" />
                </svg>
                <p
                  className={`${
                    viewTab === "grid" ? "text-[#2377FC]" : "text-[#A5B2CA]"
                  } text-[16px] font-[500]`}
                >
                  Grid View
                </p>
              </div>
            </div>
            <div
              onClick={() => handleViewTypeChange("list")}
              className={`w-[50%] flex justify-center rounded-r-[10px] cursor-pointer ${
                viewTab === "list" ? "bg-[#F0F5FF]" : "bg-[#FFFFFF]"
              }`}
            >
              <div className="flex justify-center gap-1.5 pt-2">
                <svg
                  className={`${
                    viewTab === "list" ? "fill-[#2377FC]" : "fill-[#A5B2CA]"
                  }`}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" />
                </svg>
                <p
                  className={`${
                    viewTab === "list" ? "text-[#2377FC]" : "text-[#A5B2CA]"
                  } text-[16px] font-[500]`}
                >
                  List View
                </p>
              </div>
            </div>
          </div>

          <div className="h-[44px]">
            <div
              onClick={() => setOpenAddModal(true)}
              className="bg-[#317EF3] rounded-[8px] border border-[#317EF3] text-[16px] text-[#FFFFFF] font-[500] px-4 py-2 flex gap-2 cursor-pointer"
            >
              <svg
                className="my-auto"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.6049 7.49969C13.6049 7.68225 13.5323 7.85732 13.4032 7.98641C13.2742 8.11549 13.0991 8.18801 12.9165 8.18801H8.55715V12.5474C8.55715 12.7299 8.48463 12.905 8.35555 13.0341C8.22646 13.1632 8.05139 13.2357 7.86883 13.2357C7.68628 13.2357 7.5112 13.1632 7.38211 13.0341C7.25303 12.905 7.18051 12.7299 7.18051 12.5474V8.18801H2.82113C2.63858 8.18801 2.4635 8.11549 2.33442 7.98641C2.20533 7.85732 2.13281 7.68225 2.13281 7.49969C2.13281 7.31714 2.20533 7.14206 2.33442 7.01297C2.4635 6.88389 2.63858 6.81137 2.82113 6.81137H7.18051V2.45199C7.18051 2.26944 7.25303 2.09436 7.38211 1.96528C7.5112 1.83619 7.68628 1.76367 7.86883 1.76367C8.05139 1.76367 8.22646 1.83619 8.35555 1.96528C8.48463 2.09436 8.55715 2.26944 8.55715 2.45199V6.81137H12.9165C13.0991 6.81137 13.2742 6.88389 13.4032 7.01297C13.5323 7.14206 13.6049 7.31714 13.6049 7.49969Z"
                  fill="white"
                />
              </svg>
              <p className="my-auto">Add Employee</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-6 mb-4">
        <div className="flex justify-between overflow-auto ">
          <div className="bg-[#EAEEF5] min-h-[40px] flex rounded-[6px] p-1">
            <div
              onClick={() => handleStatusTypeChange("all")}
              className={`text-[#000000] text-[16px] font-[500] px-12 py-1.5 rounded-[4px] cursor-pointer ${
                activeTab === "all" ? "bg-[#FFFFFF]" : ""
              }`}
            >
              All
            </div>
            <div
              onClick={() => handleStatusTypeChange("active")}
              className={`text-[#000000] text-[16px] font-[500] px-12  py-1.5 rounded-[4px] cursor-pointer ${
                activeTab === "active" ? "bg-[#FFFFFF]" : ""
              }`}
            >
              Active
            </div>
            <div
              onClick={() => handleStatusTypeChange("inactive")}
              className={`text-[#000000] text-[16px] font-[500] px-12  py-1.5 rounded-[4px] cursor-pointer ${
                activeTab === "inactive" ? "bg-[#FFFFFF]" : ""
              }`}
            >
              Inactive
            </div>
          </div>
        </div>
      </div>
      {openAddModal && (
        <AddEmployee
          show={openAddModal}
          setShow={() => setOpenAddModal(false)}
        />
      )}
    </div>
  );
}
