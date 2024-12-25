import NotFound from "@/components/Common/NotFound";
import StatusBadge from "@/components/Common/StatusBadge";
import React from "react";

export default function ScheduledTasks() {
  return (
    <div className="">
      <div className="text-[#222425] text-[20px] font-[700] border-b border-[#E5E9EB] pb-3">
        Scheduled Tasks
      </div>
      <div className="mt-4 bg-[#F6F6F6] w-full h-[45px] grid grid-cols-5 px-4">
        <div className="col-span-1 my-auto">
          <p className="text-[#6F6F6F] text-[14px] font-[600]">SL</p>
        </div>
        <div className="col-span-2 my-auto">
          <p className="text-[#6F6F6F] text-[14px] font-[600]">Task Name</p>
        </div>
        <div className="col-span-2 my-auto">
          <p className="text-[#6F6F6F] text-[14px] font-[600]">Status</p>
        </div>
      </div>
      <div className="bg-[#FFFFFF] w-full border-b border-[#E5E9EB] py-4 grid grid-cols-5 px-4 rounded-[8px] hover:shadow-[0px_3px_20px_1px_rgba(0,0,0,0.15)] group">
        <div className="col-span-1 my-auto">
          <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[600]">
            01.
          </p>
        </div>
        <div className="col-span-2 my-auto">
          <p className="text-[#292D32] text-[16px] group-hover:text-[#2377FC] font-[600]">
            Modus DAO Wireframe Design
          </p>
        </div>
        <div className="col-span-2 my-auto">
          <StatusBadge text="on-going" />
        </div>
      </div>
      <div className="bg-[#FFFFFF] w-full border-b border-[#E5E9EB] py-4 grid grid-cols-5 px-4 rounded-[8px] hover:shadow-[0px_3px_20px_1px_rgba(0,0,0,0.07)] group">
        <div className="col-span-1 my-auto">
          <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[600]">
            02.
          </p>
        </div>
        <div className="col-span-2 my-auto">
          <p className="text-[#292D32] text-[16px] group-hover:text-[#2377FC] font-[600]">
            Modus DAO PRD
          </p>
        </div>
        <div className="col-span-2 my-auto">
          <p className="text-[#292D32] text-[16px] font-[600]">
            <StatusBadge text="completed" />
          </p>
        </div>
      </div>
      <div className="h-[300px] w-full grid place-items-center">
        <NotFound
          title="Currently, no tasks are available"
          subTitle="Upgrade your workspace to unlock"
        />
      </div>
    </div>
  );
}
