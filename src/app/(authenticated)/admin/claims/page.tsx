import AddBugButton from "@/components/Bugs/AddBugButton";
import BugList from "@/components/Bugs/BugListTable";
import ClaimListTable from "@/components/Claim/ClaimListTable";
import ErrorAllert from "@/components/Common/ErrorAllert";
import { BugReportResponse } from "@/interfaces/Bug.interface";
import { ClaimResponse } from "@/interfaces/Claim.interface";
import { getAllReportedBugs } from "@/resources/bugs/bugs.service";
import { getAllClaims } from "@/resources/claims/claim.service";
import { extractError } from "@/utils/errors.utils";
import Link from "next/";
import React from "react";

async function page() {
  const claims = await getAllClaims().catch((error) => {
    return extractError(error);
  });
  if (typeof claims === "string") return <ErrorAllert message={claims} />;

  return (
    <div className="">
      <div className="flex justify-between border-b border-[#E5E9EB] h-[70px] px-4 lg:px-8">
        <div className="flex flex-col justify-center h-full">
          <p className="text-[24px] font-[700]">Claim List</p>
        </div>
        {/* <AddBugButton /> */}
      </div>
      <div className="py-6 h-[calc(100vh-155px)] overflow-y-auto custom-layout">
        <ClaimListTable claims={claims as unknown as ClaimResponse[]} />
      </div>
    </div>
  );
}

export default page;
