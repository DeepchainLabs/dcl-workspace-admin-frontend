"use client";

import ViewIcon from "@/svg/PaymentManagement/ViewIcon";
import WriteMessageIcon from "@/svg/PaymentManagement/WriteMessageIcon";
import StatusDropdown from "../Common/StatusDropdown";
import { useState } from "react";
import TransactionDetails from "./TransactionDetails";
// import dynamic from "next/dynamic";
// const ComposeEmail = dynamic(() => import("@/components/Email/ComposeEmail"), {
//     ssr: false,
//   });

export default function RefundRequestTable() {
  const [showTransactionDetails, setShowTransactionDetails] = useState(false);
  const [composeEmail, setShowComposeEmail] = useState(false);

  const statuses = [
    { label: "Completed", style: "text-[#065F46] bg-[#D1FAE5]" },
  ];

  return (
    <div className="overflow-x-auto">
      <div className="bg-[#F6F6F6] w-full h-[45px] min-w-[1000px] grid grid-cols-10 px-4">
        <div className="col-span-1 my-auto">
          <p className="text-[#6F6F6F] text-[14px] font-[500]">Refund ID</p>
        </div>
        <div className="col-span-1 my-auto">
          <p className="text-[#6F6F6F] text-[14px] font-[500]">
            Transaction ID
          </p>
        </div>
        <div className="col-span-2 my-auto">
          <p className="text-[#6F6F6F] text-[14px] font-[500]">Email</p>
        </div>
        <div className="col-span-2 my-auto">
          <p className="text-[#6F6F6F] text-[14px] font-[500]">Username</p>
        </div>
        <div className="col-span-1 my-auto">
          <p className="text-[#6F6F6F] text-[14px] font-[500]">
            Date of Request
          </p>
        </div>
        <div className="col-span-1 my-auto">
          <p className="text-[#6F6F6F] text-[14px] font-[500]">Status</p>
        </div>
        <div className="col-span-1 my-auto">
          <p className="text-[#6F6F6F] text-[14px] font-[500]">Amount</p>
        </div>
        <div className="col-span-1 my-auto">
          <p className="text-[#6F6F6F] text-[14px] font-[500]">Action</p>
        </div>
      </div>
      {[1, 2]?.map((item, index) => (
        <div
          key={index}
          className="bg-[#FFFFFF] w-full border-b border-[#E5E9EB] py-4 grid grid-cols-10 px-4 rounded-[8px] group min-w-[1000px] cursor-pointer"
        >
          <div className="col-span-1 my-auto">
            <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
              #123456789
            </p>
          </div>
          <div className="col-span-1 my-auto">
            <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
              1724v875b2359
            </p>
          </div>
          <div className="col-span-2 my-auto">
            <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
              fahim@gmail.com
            </p>
          </div>
          <div className="col-span-2 my-auto">
            <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
              Fahim Wayez
            </p>
          </div>
          <div className="col-span-1 my-auto">
            <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
              12/12/2024
            </p>
          </div>
          <div className="col-span-1 my-auto">
            <StatusDropdown statuses={statuses}></StatusDropdown>
          </div>
          <div className="col-span-1 my-auto">
            <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
              $45500
            </p>
          </div>
          <div className="col-span-1 my-auto">
            <div className="flex items-center gap-4">
              <div
                className="cursor-pointer"
                onClick={() => setShowTransactionDetails(true)}
              >
                <ViewIcon></ViewIcon>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => setShowComposeEmail(true)}
              >
                <WriteMessageIcon></WriteMessageIcon>
              </div>
            </div>
          </div>
        </div>
      ))}
      {showTransactionDetails && (
        <TransactionDetails
          isOpen={setShowTransactionDetails}
        ></TransactionDetails>
      )}
      {/* {composeEmail && <ComposeEmail setShow={setShowComposeEmail} />} */}
    </div>
  );
}
