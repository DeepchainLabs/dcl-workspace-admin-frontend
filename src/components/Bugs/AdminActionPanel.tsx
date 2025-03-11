"use client";
import React from "react";
import DropDown from "../Common/DropDown";
import { BugReportResponse, BugTypes } from "@/interfaces/Bug.interface";
import { updateReportedBugs } from "@/resources/bugs/bugs.service";
import toast from "react-hot-toast";

function AdminActionPanel({
  bug,
  admins,
}: {
  bug: BugReportResponse;
  admins: unknown;
}) {
  const updateBug = async (data: {
    type?: string;
    verified_by?: string;
    assign_to?: string;
  }) => {
    await updateReportedBugs(bug._id, data)
      .then((res) => toast.success("Bug updated"))
      .catch((err) => toast.error("Failed to update bug"));
  };

  return (
    <div>
      <div className="w-full mb-4">
        <p className="text-[15px] text-[#292D32] font-[600] mb-2">Bug Type</p>
        <DropDown
          name="bugType"
          selected={bug.type}
          onChange={(type: string) => updateBug({ type })}
          options={BugTypes}
          width="100%"
          bgColor={false}
        />
        {/* {state.formErrors?.operatingSystem && (
                  <div className="text-red-500 text-[14px] font-[500] mt-1">
                    {state.formErrors?.operatingSystem}
                  </div>
                )} */}
      </div>
      <div className="w-full mb-4">
        <p className="text-[15px] text-[#292D32] font-[600] mb-2">
          Assigned To
        </p>
        <DropDown
          name="assignedTo"
          selected={bug.assign_to?.username}
          onChange={(assign_to: string) => updateBug({ assign_to })}
          options={admins}
          width="100%"
          bgColor={false}
        />
        {/* {state.formErrors?.operatingSystem && (
                  <div className="text-red-500 text-[14px] font-[500] mt-1">
                    {state.formErrors?.operatingSystem}
                  </div>
                )} */}
      </div>
      <div className="w-full mb-4">
        <p className="text-[15px] text-[#292D32] font-[600] mb-2">
          Verified By
        </p>
        <DropDown
          name="verifiedBy"
          selected={bug.verified_by?.username}
          onChange={(verified_by: string) => updateBug({ verified_by })}
          options={admins}
          width="100%"
          bgColor={false}
        />
        {/* {state.formErrors?.operatingSystem && (
                  <div className="text-red-500 text-[14px] font-[500] mt-1">
                    {state.formErrors?.operatingSystem}
                  </div>
                )} */}
      </div>
    </div>
  );
}

export default AdminActionPanel;
