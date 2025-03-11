import AddBugButton from "@/components/Bugs/AddBugButton";
import BugList from "@/components/Bugs/BugListTable";
import ErrorAllert from "@/components/Common/ErrorAllert";
import { BugReportResponse } from "@/interfaces/Bug.interface";
import { getAllReportedBugs } from "@/resources/bugs/bugs.service";
import { extractError } from "@/utils/errors.utils";
import Link from "next/";
import React from "react";

async function page() {
  const bugs = await getAllReportedBugs().catch((error) => {
    return extractError(error);
  });
  if (typeof bugs === "string") return <ErrorAllert message={bugs} />;

  return (
    <div className="">
      <div className="flex justify-between border-b border-[#E5E9EB] h-[70px] px-4 lg:px-8">
        <div className="flex flex-col justify-center h-full">
          <p className="text-[24px] font-[700]">Bug List</p>
        </div>
        <AddBugButton />
      </div>
      <div className="py-6 h-[calc(100vh-155px)] overflow-y-auto custom-layout">
        <BugList bugs={bugs as unknown as BugReportResponse[]} />
      </div>
    </div>
  );
}

export default page;
