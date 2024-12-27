"use client";

import ViewIcon from "@/svg/PaymentManagement/ViewIcon";
import WriteMessageIcon from "@/svg/PaymentManagement/WriteMessageIcon";
import StatusDropdown from "../Common/StatusDropdown";
import { useState } from "react";
import TransactionDetails from "./TransactionDetails";
import { getRefundRequests } from "@/resources/payment/payment.service";
import { extractError } from "@/utils/errors.utils";
import StatusBadge from "../Common/StatusBadge";
import dayjs from "dayjs";
// import dynamic from "next/dynamic";
// const ComposeEmail = dynamic(() => import("@/components/Email/ComposeEmail"), {
//     ssr: false,
//   });

export default function RefundRequest({ requests }: any) {
  const [showTransactionDetails, setShowTransactionDetails] = useState(false);
  const [composeEmail, setShowComposeEmail] = useState(false);

  const statuses = [
    { label: "Completed", style: "text-[#065F46] bg-[#D1FAE5]" },
  ];

  return (
    <div className="mt-12">
      <p className="text-[#292D32] text-[20px] font-[600]">Refund Requests</p>
      <div className="overflow-x-auto mt-6">
        <div className="bg-[#F6F6F6] w-full h-[45px] min-w-[1000px] grid grid-cols-10 px-4">
          <div className="col-span-1 my-auto">
            <p className="text-[#6F6F6F] text-[14px] font-[500]">Refund ID</p>
          </div>
          <div className="col-span-1 my-auto">
            <p className="text-[#6F6F6F] text-[14px] font-[500]">Reason</p>
          </div>
          <div className="col-span-2 my-auto">
            <p className="text-[#6F6F6F] text-[14px] font-[500]">Description</p>
          </div>
          <div className="col-span-2 my-auto">
            <p className="text-[#6F6F6F] text-[14px] font-[500]">Email</p>
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
        {requests?.map((item: any, index: number) => (
          <div
            key={index}
            className="bg-[#FFFFFF] w-full border-b border-[#E5E9EB] py-4 grid grid-cols-10 px-4 rounded-[8px] group min-w-[1000px] cursor-pointer"
          >
            <div className="col-span-1 my-auto">
              <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                {item?.charge_id.slice(0, 12)}
              </p>
            </div>
            <div className="col-span-1 my-auto">
              <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                {item?.reason}
              </p>
            </div>
            <div className="col-span-2 my-auto">
              <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                {item?.description}
              </p>
            </div>
            <div className="col-span-2 my-auto">
              <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                N/A
              </p>
            </div>
            <div className="col-span-1 my-auto">
              <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                {dayjs(item?.created_at).format("DD MMM YYYY")}
              </p>
            </div>
            <div className="col-span-1 my-auto">
              {/* <StatusDropdown statuses={item?.status}></StatusDropdown> */}
              <StatusBadge text={item?.status} />
            </div>
            <div className="col-span-1 my-auto">
              <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                {item?.amount}
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
    </div>
  );
}
