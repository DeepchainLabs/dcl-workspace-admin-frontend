"use client";
import React from "react";
import DropDown from "../Common/DropDown";
import { BugReportResponse, BugTypes } from "@/interfaces/Bug.interface";
import { updateReportedBugs } from "@/resources/bugs/bugs.service";
import toast from "react-hot-toast";
import { ClaimResponse, ClaimStatusList } from "@/interfaces/Claim.interface";
import { updateClaim } from "@/resources/claims/claim.service";

function ClaimAdminAction({ claim }: { claim: ClaimResponse }) {
  const updateClaimAsync = async (data: {
    status?: string;
    requiredAction?: string;
    description?: string;
  }) => {
    await updateClaim(claim._id, data)
      .then((res) => toast.success("Status updated"))
      .catch((err) => toast.error("Failed to update status"));
  };

  return (
    <div>
      <div className="w-full mb-4">
        <p className="text-[15px] text-[#292D32] font-[600] mb-2">Status</p>
        <DropDown
          name="status"
          selected={claim.status}
          onChange={(status: string) => updateClaimAsync({ status })}
          options={ClaimStatusList}
          width="100%"
          bgColor={false}
        />
      </div>
    </div>
  );
}

export default ClaimAdminAction;
