import CloudStorageInsightGraph from "@/components/Admin/ClientManagement/Workspace/CloudStorageInsight";
import CloudStorageTable from "@/components/Admin/ClientManagement/Workspace/CloudStorageTable";
import InformationCard from "@/components/Admin/ClientManagement/Workspace/InformationCard";
import PaymentHistoryTable from "@/components/Admin/ClientManagement/Workspace/PaymentHistoryTable";
import WorkspaceToggle from "@/components/Admin/ClientManagement/Workspace/WorkspaceToggle";
import { cards, paymentHistory } from "@/contents/Admin/Workspace";
import BlockUserSvg from "@/svg/Admin/BlockUserSvg";
import React from "react";

function WorkspaceDetails() {
  return (
    <div className="">
      <div className="border-b border-[#E5E9EB] h-[70px] px-4 lg:px-8">
        <div className="flex flex-col justify-center h-full">
          <p className="text-[24px] font-[700]">Workspace Details</p>
        </div>
      </div>
      <div className="py-6 h-[calc(100vh-155px)] overflow-y-auto custom-layout">
        <div className=" bg-[#F8FAFC] p-4 rounded-[12px]">
          <div className="flex gap-4">
            <div className="flex flex-wrap gap-x-20 gap-y-6 w-[80%]">
              <div className="">
                <p className="text-[#292D32] font-[600] text-[14px]">
                  Customer Name
                </p>
                <p className="text-[#6F6F6F] font-[500] text-[14px] mt-3">
                  Tonmoy Asif
                </p>
              </div>
              <div className="">
                <p className="text-[#292D32] font-[600] text-[14px]">
                  Workspace Name
                </p>
                <p className="text-[#6F6F6F] font-[500] text-[14px] mt-3">
                  Deepchain Labs
                </p>
              </div>
              <div className="">
                <p className="text-[#292D32] font-[600] text-[14px]">
                  Created On
                </p>
                <p className="text-[#6F6F6F] font-[500] text-[14px] mt-3">
                  1223445D6
                </p>
              </div>
              <div className="">
                <p className="text-[#292D32] font-[600] text-[14px]">
                  Last Payment Date
                </p>
                <p className="text-[#6F6F6F] font-[500] text-[14px] mt-3">
                  12/24/2024
                </p>
              </div>
              <div className="">
                <p className="text-[#292D32] font-[600] text-[14px]">
                  Customer ID
                </p>
                <p className="text-[#6F6F6F] font-[500] text-[14px] mt-3">
                  1234
                </p>
              </div>
              <div className="">
                <p className="text-[#292D32] font-[600] text-[14px]">Package</p>
                <p className="text-[#6F6F6F] font-[500] text-[14px] mt-3">
                  Organizaiton (Medium)
                </p>
              </div>
            </div>
            <div className="w-[20%]">
              <div className="flex justify-end">
                <WorkspaceToggle />
              </div>
            </div>
          </div>
          <div className="flex justify-end flex-wrap gap-4 mt-4 md:mt-1">
            <button className="flex gap-2 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.08)] bg-[#F0F5FF] text-[#2377FC] w-auto h-[42px] px-4 py-3 rounded-[8px] font-[600] text-[14px]">
              <BlockUserSvg />
              Block User
            </button>
            <button className="bg-[#2377FC] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.08)] text-[#F0F5FF] w-auto h-[42px] px-6 py-3 rounded-[8px] font-[600] text-[14px]">
              Send Email
            </button>
          </div>
        </div>

        <div className="mt-6 grid my-auto justify-center md:justify-start grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-6">
          {cards.map((card, index) => {
            return <InformationCard key={index} name={card.name} limit={card?.limit} used={card.used} icon={card.icon}/>
          })}
        </div>

        <div className="mt-6 flex justify-between">
          <div className="w-[40%]">
            <CloudStorageInsightGraph />
          </div>
          <div className="w-[70%]">
            <CloudStorageTable />
          </div>
        </div>
        <div className="mt-6">
          <PaymentHistoryTable paymentHistory={paymentHistory}/>
        </div>
      </div>
    </div>
  );
}

export default WorkspaceDetails;
