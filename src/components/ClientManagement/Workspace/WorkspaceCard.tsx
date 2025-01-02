import React from "react";
import WorkspaceToggle from "./WorkspaceToggle";

interface WorkspaceCardProps {
  disabled?: boolean;
}

function WorkspaceCard({ disabled = false }: WorkspaceCardProps) {
  return (
    <div
      className={`p-6 rounded-[13px] w-[400px] ${
        disabled
          ? "bg-[#F1F1F1] cursor-not-allowed opacity-50"
          : "bg-[#F8FAFC] hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]"
      }`}
    >
      <div className="flex justify-between">
        <p className="text-[16px] font-[600]">DCL (Organization - Medium)</p>
        <WorkspaceToggle checked={!disabled}/>
      </div>
      <div className="flex justify-between w-full mb-4">
        <div className="">
          <p className="text-[#6F6F6F] font-[500] text-[12px] mt-3 mb-2">
            Customer ID
          </p>
          <p className="text-[#292D32] font-[600] text-[14px]">C1234</p>
        </div>
        <div className="">
          <p className="text-[#6F6F6F] font-[500] text-[12px] mt-3 mb-2">
            Customer Name
          </p>
          <p className="text-[#292D32] font-[600] text-[14px]">Ratul</p>
        </div>
        <div className="">
          <p className="text-[#6F6F6F] font-[500] text-[12px] mt-3 mb-2">
            Created On
          </p>
          <p className="text-[#292D32] font-[600] text-[14px]">12-12-2024</p>
        </div>
      </div>
      <div className="flex justify-between w-full mb-4">
        <div className="">
          <p className="text-[#6F6F6F] font-[500] text-[12px] mt-3 mb-2">
            Last Payment Date
          </p>
          <p className="text-[#292D32] font-[600] text-[14px]">01-01-2024</p>
        </div>
        <div className="">
          <p className="text-[#6F6F6F] font-[500] text-[12px] mt-3 mb-2">
            Projects
          </p>
          <p className="text-[#292D32] font-[600] text-[14px]">9</p>
        </div>
        <div className="">
          <p className="text-[#6F6F6F] font-[500] text-[12px] mt-3 mb-2">
            Employees
          </p>
          <p className="text-[#292D32] font-[600] text-[14px]">6</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="">
          <p className="text-[#6F6F6F] font-[500] text-[12px] mt-3 mb-2">
            Cloud Storage Used
          </p>
          <p className="text-[#292D32] font-[600] text-[14px]">
            200GB/500GB
          </p>
        </div>
        <p
          className={`text-[14px] font-[500] mt-3 mb-2 ${
            disabled ? "text-[#A0A0A0]" : "text-[#2377FC] cursor-pointer"
          }`}
        >
          View Details
        </p>
      </div>
    </div>
  );
}

export default WorkspaceCard;
