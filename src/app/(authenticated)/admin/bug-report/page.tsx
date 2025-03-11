import BugReportForm from "@/components/Bugs/BugReportForm";
import { getLoggedInUser } from "@/resources/auth/auth.service";
import React from "react";

async function page({
  params,
}: {
  params: Promise<{ user: string; workspace: string }>;
}) {
  const me = await getLoggedInUser();
  return (
    <div>
      <div className="border-b border-[#E5E9EB] h-[76px] px-4 lg:px-8">
        <div className="flex flex-col justify-center h-full">
          <p className="text-[24px] font-[700]">Bug Report</p>
        </div>
      </div>
      <div className=" h-[calc(100vh-155px)] overflow-y-auto custom-layout pt-4">
        <BugReportForm loggedInUser={me}/>
      </div>
    </div>
  );
}

export default page;
