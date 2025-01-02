import StatusBadge from "@/components/Common/StatusBadge";
import DownloadSvg from "@/svg/Admin/DownloadSvg";
import React from "react";
import TypeBadge from "./TypeBadge";

function PaymentHistoryTable({ paymentHistory }: any) {
  return (
    <div>
      <p className="text-[20px] font-[600]">Payment History</p>
      <div className="mt-4 table-wrp block max-h-[calc(100vh-40vh)] overflow-y-auto">
        <table className="table-fixed w-full rounded-[16px]">
          <thead className="sticky top-0 bg-[#EDEDED]">
            <tr className="text-[#6F6F6F] text-[12px] font-[500]">
              <th className="border-b border-[#EAECF0] p-4 w-[15%] text-left rounded-l-[6px]">
                CUSTOMER
              </th>
              <th className="border-b border-[#EAECF0] p-3 w-[10%] text-left">
                DATE
              </th>
              <th className="borDder-b border-[#EAECF0] p-3 w-[15%] text-left">
                TRANSACTION ID
              </th>
              <th className="border-b border-[#EAECF0] p-3 w-[10%] text-left">
                TYPE
              </th>
              <th className="border-b border-[#EAECF0] p-3 w-[10%] text-left">
                AMOUNT
              </th>
              <th className="border-b border-[#EAECF0] p-3 w-[20%] text-left">
                GATEWAY
              </th>
              <th className="border-b border-[#EAECF0] p-3 w-[10%] text-left">
                STATUS
              </th>
              <th className="border-b border-[#EAECF0] p-3 w-[10%] text-left rounded-r-[6px]">
                INVOICE
              </th>
            </tr>
          </thead>
          <tbody className="text-[#292D32] bg-[#FFFFFF] text-[14px] font-[500]">
            {paymentHistory.map((item: any, index: number) => (
              <tr
                key={index}
                // className={index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}
              >
                <td className="border-b border-[#EAECF0] p-4">
                  {item.customer}
                </td>
                <td className="border-b border-[#EAECF0] p-4">{item.date}</td>
                <td className="border-b border-[#EAECF0] p-4">
                  {item.transactionId}
                </td>
                <td className="border-b border-[#EAECF0] p-4"><TypeBadge text={item.type}/></td>
                <td className="border-b border-[#EAECF0] p-4">{item.amount}</td>
                <td className="border-b border-[#EAECF0] p-4">
                  {item.gateway}
                </td>
                <td className="border-b border-[#EAECF0] p-4"><StatusBadge text={item.status} /></td>
                <td className="border-b border-[#EAECF0] p-4">
                  <div className="my-auto cursor-pointer">
                    <DownloadSvg />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PaymentHistoryTable;
